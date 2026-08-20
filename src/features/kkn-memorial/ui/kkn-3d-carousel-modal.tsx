"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { User, ChevronLeft, ChevronRight, X } from "lucide-react";
import { KKN_INFO, KKN_MEMBERS, KknMember } from "@/shared/data/kkn-team.data";
import { cn } from "@/shared/utils/cn";

interface Kkn3dCarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Kkn3dCarouselModal({ isOpen, onClose }: Kkn3dCarouselModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = KKN_MEMBERS.length;

  // 1. Always reset to member #1 (index 0) whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setDragOffset(0);
    }
  }, [isOpen]);

  // Screen size detection for responsive 3D spacing
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextMember = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
    setDragOffset(0);
  }, [total]);

  const prevMember = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setDragOffset(0);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextMember();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevMember();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextMember, prevMember, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setDragOffset(info.offset.x);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 40;
    const velocity = 250;

    if (info.offset.x < -threshold || info.velocity.x < -velocity) {
      nextMember();
    } else if (info.offset.x > threshold || info.velocity.x > velocity) {
      prevMember();
    } else {
      setDragOffset(0);
    }
  };

  // Render 5 slots around currentIndex: [-2, -1, 0, 1, 2]
  const visibleOffsets = [-2, -1, 0, 1, 2];
  const spacing = isMobile ? 160 : 255;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop: Deep Dark Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Minimalist Premium Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative z-10 flex max-h-[96vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0B120F]/95 p-6 text-white shadow-2xl sm:p-8 md:p-10 backdrop-blur-2xl"
          >
            {/* Header: Understated & Clean */}
            <div className="relative flex flex-col items-center justify-center text-center">
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-400/80">
                {KKN_INFO.title}
              </span>
              <span className="mt-0.5 text-[10px] tracking-widest text-neutral-400 font-mono">
                {KKN_INFO.year}
              </span>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Tutup Modal"
                className="group absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
              >
                <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* True 3D Physical CoverFlow Viewport */}
            <div className="relative my-4 flex min-h-[380px] sm:min-h-[415px] md:min-h-[440px] items-center justify-center overflow-hidden py-4 select-none [perspective:1400px]">
              <div
                className="relative flex h-full w-full items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {visibleOffsets.map((offset) => {
                  const targetIndex = (currentIndex + offset + total) % total;
                  const member = KKN_MEMBERS[targetIndex];
                  const isActive = offset === 0;

                  // 3D calculations with drag integration
                  const baseX = offset * spacing;
                  const currentX = baseX + dragOffset * (isActive ? 1 : 0.45);

                  let rotateY = 0;
                  if (isActive) {
                    rotateY = -dragOffset * 0.08;
                  } else if (offset === -1) {
                    rotateY = 24;
                  } else if (offset === 1) {
                    rotateY = -24;
                  } else if (offset === -2) {
                    rotateY = 36;
                  } else if (offset === 2) {
                    rotateY = -36;
                  }

                  const absOffset = Math.abs(offset);
                  const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.84 : 0.66;
                  const z = absOffset === 0 ? 0 : absOffset === 1 ? -130 : -260;
                  const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.65 : 0.15;
                  const zIndex = 30 - absOffset * 10;

                  return (
                    <motion.div
                      key={member.id}
                      onClick={() => {
                        if (offset === -1) prevMember();
                        if (offset === 1) nextMember();
                      }}
                      drag={isActive ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.45}
                      onDrag={isActive ? handleDrag : undefined}
                      onDragEnd={isActive ? handleDragEnd : undefined}
                      animate={{
                        x: currentX,
                        scale,
                        rotateY,
                        z,
                        opacity,
                        rotateZ: isActive ? dragOffset * 0.02 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 28,
                        mass: 0.8,
                      }}
                      style={{
                        position: "absolute",
                        zIndex,
                        transformStyle: "preserve-3d",
                        cursor: isActive
                          ? "grab"
                          : absOffset === 1
                          ? "pointer"
                          : "default",
                      }}
                      whileTap={isActive ? { cursor: "grabbing" } : undefined}
                    >
                      <MemberCard
                        member={member}
                        index={targetIndex}
                        total={total}
                        isActive={isActive}
                        offset={offset}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Controls & Progress */}
            <div className="flex flex-col items-center gap-3">
              {/* Clean Arrow Controls & Counter */}
              <div className="flex items-center justify-center gap-7 text-white">
                <button
                  onClick={prevMember}
                  aria-label="Anggota Sebelumnya"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-all hover:scale-105 hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                {/* Minimal Counter */}
                <div className="font-mono text-xs tracking-widest text-neutral-400">
                  <span className="font-semibold text-white">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="mx-1 text-neutral-600">/</span>
                  <span>{String(total).padStart(2, "0")}</span>
                </div>

                <button
                  onClick={nextMember}
                  aria-label="Anggota Selanjutnya"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 transition-all hover:scale-105 hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Minimal Hairline Progress Tracker */}
              <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-emerald-400"
                  animate={{
                    width: `${((currentIndex + 1) / total) * 100}%`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>

              {/* Micro Caption */}
              <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-medium">
                Swipe to explore
              </p>
            </div>

            {/* Footer Section */}
            <div className="mt-5 flex flex-col items-center justify-center border-t border-white/10 pt-4 text-center">
              <p className="font-serif italic text-xs md:text-sm text-neutral-300 max-w-lg leading-relaxed">
                &ldquo;{KKN_INFO.appreciationQuote}&rdquo;
              </p>

              <span className="mt-1.5 text-[10px] tracking-wider text-neutral-500 uppercase font-mono">
                {KKN_INFO.title} · {KKN_INFO.year}
              </span>

              {/* Understated Minimal Button */}
              <button
                onClick={onClose}
                className="mt-3.5 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-1.5 text-xs font-medium text-neutral-300 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
              >
                Tutup & Kembali ke Website
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface MemberCardProps {
  member: KknMember;
  index: number;
  total: number;
  isActive?: boolean;
  offset: number;
}

function MemberCard({
  member,
  index,
  total,
  isActive,
  offset,
}: MemberCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-[355px] w-[265px] sm:h-[385px] sm:w-[285px] md:h-[405px] md:w-[305px] flex-col items-center justify-between overflow-hidden rounded-[2.2rem] border p-6 text-center transition-all duration-300",
        isActive
          ? "border-white/20 bg-gradient-to-b from-[#13201A] to-[#0D1612] text-white shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
          : "border-white/10 bg-gradient-to-b from-[#0F1A15] to-[#0A110E] text-neutral-300 shadow-xl",
      )}
    >
      {/* Dynamic 3D Ambient Light Overlay */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[2.2rem] transition-opacity duration-300",
          isActive
            ? "bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent opacity-100"
            : offset < 0
            ? "bg-gradient-to-r from-black/30 via-transparent to-transparent opacity-90"
            : "bg-gradient-to-l from-black/30 via-transparent to-transparent opacity-90",
        )}
      />

      {/* Subtle Inner Hairline Border */}
      <div className="pointer-events-none absolute inset-2.5 rounded-[1.8rem] border border-white/[0.06]" />

      {/* Top Portrait Avatar with Lucide User Icon */}
      <div className="mt-2 relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-1.5 shadow-inner">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/20">
          <User className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-300/90" strokeWidth={1.5} />
        </div>
      </div>

      {/* Member Information */}
      <div className="flex flex-col items-center px-1 z-10">
        {/* Full Name */}
        <h3 className="font-sans text-base sm:text-lg md:text-xl font-bold tracking-tight text-white leading-snug">
          {member.name}
        </h3>

        {/* Role Pill Badge */}
        <div className="mt-2 rounded-full border border-emerald-500/25 bg-emerald-950/50 px-3.5 py-0.5 text-xs font-medium text-emerald-300 shadow-xs">
          {member.role}
        </div>

        {/* Program Studi · Fakultas */}
        <p className="mt-1.5 text-[11px] sm:text-xs text-neutral-400 leading-normal">
          {member.major} · {member.faculty}
        </p>
      </div>

      {/* Bottom Counter */}
      <div className="w-full flex items-center justify-between pt-2 px-2 text-[10px] font-mono text-neutral-500 z-10">
        <span className="uppercase tracking-widest text-emerald-400/80 font-medium">2026</span>
        <span className="font-semibold text-neutral-400">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
