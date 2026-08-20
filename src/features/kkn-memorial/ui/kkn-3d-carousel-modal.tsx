"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { KKN_INFO, KKN_MEMBERS, KknMember } from "@/shared/data/kkn-team.data";
import { cn } from "@/shared/utils/cn";

interface Kkn3dCarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
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
  const spacing = isMobile ? 165 : 245;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#001E16]/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative z-10 flex max-h-[96vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2.5rem] border border-[#003527]/15 bg-[#FBFBFA] p-5 text-[#003527] shadow-[0_25px_80px_rgba(0,30,22,0.4)] sm:p-8 md:p-10"
          >
            {/* Header */}
            <div className="relative flex flex-col items-center justify-center text-center">
              <span className="font-label-sm text-[11px] font-semibold uppercase tracking-[0.25em] text-[#064E3B]/80">
                {KKN_INFO.title}
              </span>
              <span className="font-label-sm text-[10px] tracking-widest text-[#C9A86A] font-medium">
                {KKN_INFO.year}
              </span>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Tutup Modal"
                className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#003527]/10 text-xl font-light text-[#003527]/60 transition-all hover:bg-[#003527]/5 hover:text-[#003527] active:scale-90"
              >
                ×
              </button>
            </div>

            {/* True 3D Physical CoverFlow Viewport */}
            <div className="relative my-3 flex min-h-[370px] sm:min-h-[410px] md:min-h-[435px] items-center justify-center overflow-hidden py-4 select-none [perspective:1400px]">
              <div
                className="relative flex h-full w-full items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {visibleOffsets.map((offset) => {
                  const targetIndex = (currentIndex + offset + total) % total;
                  const member = KKN_MEMBERS[targetIndex];
                  const isActive = offset === 0;

                  // 3D Motion calculations with real-time drag integration
                  const baseX = offset * spacing;
                  const currentX = baseX + dragOffset * (isActive ? 1 : 0.45);

                  // Calculate rotation: center card rotates slightly with drag, side cards face inwards
                  let rotateY = 0;
                  if (isActive) {
                    rotateY = -dragOffset * 0.08; // dynamic tilt as you drag
                  } else if (offset === -1) {
                    rotateY = 24;
                  } else if (offset === 1) {
                    rotateY = -24;
                  } else if (offset === -2) {
                    rotateY = 36;
                  } else if (offset === 2) {
                    rotateY = -36;
                  }

                  // Calculate scale and Z depth
                  const absOffset = Math.abs(offset);
                  const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.83 : 0.66;
                  const z = absOffset === 0 ? 0 : absOffset === 1 ? -140 : -280;
                  const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.72 : 0.18;
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
              {/* Arrow Buttons & Counter */}
              <div className="flex items-center justify-center gap-8 text-[#003527]">
                <button
                  onClick={prevMember}
                  aria-label="Anggota Sebelumnya"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-[#003527]/70 transition-all hover:scale-110 hover:text-[#003527] active:scale-95"
                >
                  ‹
                </button>

                <span className="font-mono text-xs tracking-widest text-[#003527]/70">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>

                <button
                  onClick={nextMember}
                  aria-label="Anggota Selanjutnya"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-[#003527]/70 transition-all hover:scale-110 hover:text-[#003527] active:scale-95"
                >
                  ›
                </button>
              </div>

              {/* Thin Progress Indicator */}
              <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-[#003527]/10">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[#003527]"
                  animate={{
                    width: `${((currentIndex + 1) / total) * 100}%`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>

              {/* Micro Caption */}
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#003527]/40">
                Swipe to explore
              </p>
            </div>

            {/* Footer */}
            <div className="mt-5 flex flex-col items-center justify-center border-t border-[#003527]/10 pt-4 text-center">
              <p className="font-serif italic text-xs md:text-sm text-[#003527]/80 max-w-lg leading-relaxed">
                &ldquo;{KKN_INFO.appreciationQuote}&rdquo;
              </p>

              <span className="mt-1.5 text-[10px] tracking-wider text-[#064E3B]/60 uppercase">
                {KKN_INFO.title} · {KKN_INFO.year}
              </span>

              <button
                onClick={onClose}
                className="mt-3 inline-flex items-center justify-center rounded-full border border-[#003527]/30 px-6 py-1.5 text-xs font-medium text-[#003527] transition-all hover:border-[#003527] hover:bg-[#003527] hover:text-white active:scale-95"
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
  const initials = getInitials(member.name);
  const isSide = Math.abs(offset) > 0;

  return (
    <div
      className={cn(
        "relative flex h-[350px] w-[260px] sm:h-[380px] sm:w-[280px] md:h-[400px] md:w-[300px] flex-col items-center justify-between overflow-hidden rounded-[2.2rem] border bg-gradient-to-b from-[#FFFFFF] to-[#F9F8F5] p-6 text-center transition-shadow duration-300",
        isActive
          ? "border-[#003527]/20 shadow-[0_20px_50px_rgba(0,35,27,0.18)] ring-1 ring-[#C9A86A]/30"
          : "border-[#003527]/10 shadow-lg",
      )}
    >
      {/* Dynamic 3D Ambient Sheen (Light Reflection) */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[2.2rem] transition-opacity duration-300",
          isActive
            ? "bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-100"
            : offset < 0
            ? "bg-gradient-to-r from-black/10 via-transparent to-transparent opacity-90"
            : "bg-gradient-to-l from-black/10 via-transparent to-transparent opacity-90",
        )}
      />

      {/* Subtle Inner Gold Frame */}
      <div className="pointer-events-none absolute inset-2.5 rounded-[1.7rem] border border-[#C9A86A]/25" />

      {/* Top Portrait / Initials Badge */}
      <div className="mt-3 relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border border-[#C9A86A]/40 bg-gradient-to-b from-[#FAF8F5] to-[#EFECE6] p-1 shadow-inner">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#003527]/5 text-[#003527]">
          <span className="font-serif text-2xl sm:text-3xl font-medium tracking-wider text-[#003527]">
            {initials}
          </span>
        </div>
      </div>

      {/* Member Details */}
      <div className="flex flex-col items-center px-1 z-10">
        {/* Full Name */}
        <h3 className="font-headline-md text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#003527] leading-snug">
          {member.name}
        </h3>

        {/* Role / Jabatan */}
        <p className="mt-1.5 text-xs sm:text-sm font-semibold text-[#064E3B] leading-tight">
          {member.role}
        </p>

        {/* Program Studi · Fakultas */}
        <p className="mt-1 text-[11px] sm:text-xs text-[#003527]/60 leading-normal">
          {member.major} · {member.faculty}
        </p>
      </div>

      {/* Bottom Counter */}
      <div className="w-full flex items-center justify-between pt-2 px-1 text-[10px] font-mono text-[#003527]/40 z-10">
        <span className="uppercase tracking-widest text-[#C9A86A]">2026</span>
        <span>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
