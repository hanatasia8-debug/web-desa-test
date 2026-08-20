"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { User, ChevronLeft, ChevronRight, X, Sparkles, Award } from "lucide-react";
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
          {/* Luxury Dark Emerald Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Luxury Obsidian Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative z-10 flex max-h-[96vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2.5rem] border border-[#C9A86A]/30 bg-gradient-to-b from-[#021A12] via-[#01140E] to-[#000D09] p-6 text-[#F5E6C8] shadow-[0_25px_90px_rgba(0,0,0,0.8),0_0_50px_rgba(6,78,59,0.35)] sm:p-8 md:p-10"
          >
            {/* Ambient Top Glow Effect */}
            <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#064E3B]/50 via-[#C9A86A]/15 to-transparent blur-3xl" />

            {/* Header Section */}
            <div className="relative flex flex-col items-center justify-center text-center">
              {/* Gold Shimmer Pill Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A86A]/40 bg-[#064E3B]/30 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E6C687] shadow-[0_0_15px_rgba(201,168,106,0.2)]">
                <Sparkles className="h-3 w-3 text-[#E6C687] animate-pulse" />
                <span>{KKN_INFO.title}</span>
                <span className="text-[#C9A86A]">·</span>
                <span>{KKN_INFO.year}</span>
              </div>

              {/* Title */}
              <h2 className="mt-2.5 font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-[#FFF6E3] via-[#F4E3BF] to-[#D9B777] bg-clip-text text-transparent">
                Dewan Pengabdian Mahasiswa KKN
              </h2>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Tutup Modal"
                className="group absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A86A]/30 bg-[#021A12]/80 text-[#E6C687] transition-all hover:border-[#C9A86A] hover:bg-[#C9A86A]/20 hover:scale-105 active:scale-95 shadow-md"
              >
                <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* True 3D Physical CoverFlow Viewport */}
            <div className="relative my-4 flex min-h-[380px] sm:min-h-[420px] md:min-h-[445px] items-center justify-center overflow-hidden py-4 select-none [perspective:1400px]">
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

                  // Calculate scale, Z depth, opacity, and layering
                  const absOffset = Math.abs(offset);
                  const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.83 : 0.65;
                  const z = absOffset === 0 ? 0 : absOffset === 1 ? -140 : -280;
                  const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.72 : 0.15;
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
              {/* Luxury Arrow Buttons & Counter */}
              <div className="flex items-center justify-center gap-8 text-[#E6C687]">
                <button
                  onClick={prevMember}
                  aria-label="Anggota Sebelumnya"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A86A]/40 bg-[#064E3B]/25 text-xl text-[#F5E6C8] shadow-[0_0_15px_rgba(201,168,106,0.15)] transition-all hover:scale-110 hover:border-[#C9A86A] hover:bg-[#C9A86A]/20 active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Counter */}
                <div className="flex items-center gap-1.5 rounded-full border border-[#C9A86A]/30 bg-[#001E16]/80 px-4 py-1 font-mono text-xs tracking-widest text-[#E6C687] shadow-inner">
                  <span className="font-bold text-[#FFF6E3]">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#C9A86A]/50">/</span>
                  <span className="text-[#C9A86A]/80">
                    {String(total).padStart(2, "0")}
                  </span>
                </div>

                <button
                  onClick={nextMember}
                  aria-label="Anggota Selanjutnya"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A86A]/40 bg-[#064E3B]/25 text-xl text-[#F5E6C8] shadow-[0_0_15px_rgba(201,168,106,0.15)] transition-all hover:scale-110 hover:border-[#C9A86A] hover:bg-[#C9A86A]/20 active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Glowing Thin Progress Tracker */}
              <div className="relative h-[3px] w-52 overflow-hidden rounded-full bg-[#064E3B]/40 border border-[#C9A86A]/20">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#064E3B] via-[#C9A86A] to-[#FFF6E3] shadow-[0_0_8px_#C9A86A]"
                  animate={{
                    width: `${((currentIndex + 1) / total) * 100}%`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>

              {/* Micro Caption */}
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A86A]/60 font-medium">
                Swipe to explore
              </p>
            </div>

            {/* Footer Section */}
            <div className="mt-5 flex flex-col items-center justify-center border-t border-[#C9A86A]/20 pt-4 text-center">
              <p className="font-serif italic text-xs md:text-sm text-[#E6C687]/90 max-w-lg leading-relaxed">
                &ldquo;{KKN_INFO.appreciationQuote}&rdquo;
              </p>

              <span className="mt-1.5 text-[10px] tracking-wider text-[#C9A86A]/60 uppercase font-semibold">
                {KKN_INFO.title} · {KKN_INFO.year}
              </span>

              {/* Premium Outlined Button */}
              <button
                onClick={onClose}
                className="mt-3.5 inline-flex items-center justify-center rounded-full border border-[#C9A86A]/50 bg-gradient-to-r from-[#064E3B]/80 to-[#021A12]/80 px-7 py-2 text-xs font-semibold text-[#FFF6E3] shadow-[0_0_20px_rgba(6,78,59,0.4)] transition-all hover:border-[#C9A86A] hover:bg-[#C9A86A] hover:text-[#001E16] hover:scale-105 active:scale-95"
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
        "relative flex h-[355px] w-[265px] sm:h-[385px] sm:w-[285px] md:h-[405px] md:w-[305px] flex-col items-center justify-between overflow-hidden rounded-[2.3rem] border p-6 text-center transition-all duration-300",
        isActive
          ? "border-[#C9A86A]/50 bg-gradient-to-b from-[#0B2E24] via-[#051C15] to-[#02100B] text-[#F5E6C8] shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(201,168,106,0.25)] ring-1 ring-[#C9A86A]/40"
          : "border-[#C9A86A]/20 bg-gradient-to-b from-[#08221A] via-[#041510] to-[#010B07] text-[#E6C687]/80 shadow-xl",
      )}
    >
      {/* 3D Ambient Light Reflection Sheen */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[2.3rem] transition-opacity duration-300",
          isActive
            ? "bg-gradient-to-tr from-transparent via-[#C9A86A]/10 to-transparent opacity-100"
            : offset < 0
            ? "bg-gradient-to-r from-black/40 via-transparent to-transparent opacity-95"
            : "bg-gradient-to-l from-black/40 via-transparent to-transparent opacity-95",
        )}
      />

      {/* Luxury Inner Double Gold Line */}
      <div className="pointer-events-none absolute inset-2.5 rounded-[1.8rem] border border-[#C9A86A]/30 shadow-inner" />
      <div className="pointer-events-none absolute inset-3.5 rounded-[1.5rem] border border-[#C9A86A]/10" />

      {/* Top Portrait Medal Placeholder with Lucide User Icon */}
      <div className="mt-2 relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-2 border-[#C9A86A]/60 bg-gradient-to-b from-[#0F3A2E] to-[#051812] p-1.5 shadow-[0_0_20px_rgba(201,168,106,0.25)]">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#092B21] to-[#02120D] text-[#E6C687] border border-[#C9A86A]/30 shadow-inner">
          <User className="h-10 w-10 sm:h-12 sm:w-12 text-[#E6C687] drop-shadow-[0_2px_8px_rgba(201,168,106,0.4)]" />
        </div>
        {/* Subtle Gold Badge Icon at bottom right of avatar */}
        <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#C9A86A] bg-[#021A12] text-[#E6C687] shadow-md">
          <Award className="h-3.5 w-3.5 text-[#E6C687]" />
        </div>
      </div>

      {/* Member Information */}
      <div className="flex flex-col items-center px-1 z-10">
        {/* Full Name */}
        <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-wide bg-gradient-to-r from-[#FFFFFF] via-[#FDF3DE] to-[#E6C687] bg-clip-text text-transparent leading-snug">
          {member.name}
        </h3>

        {/* Role Pill Badge */}
        <div className="mt-2 rounded-full border border-[#C9A86A]/40 bg-[#064E3B]/40 px-3 py-0.5 text-xs font-semibold text-[#E6C687] shadow-sm">
          {member.role}
        </div>

        {/* Program Studi · Fakultas */}
        <p className="mt-1.5 text-[11px] sm:text-xs text-[#C9A86A]/75 leading-normal">
          {member.major} · {member.faculty}
        </p>
      </div>

      {/* Bottom Counter */}
      <div className="w-full flex items-center justify-between pt-2 px-2 text-[10px] font-mono text-[#C9A86A]/60 z-10">
        <span className="uppercase tracking-widest text-[#E6C687] font-semibold flex items-center gap-1">
          <Sparkles className="h-2.5 w-2.5 text-[#E6C687]" /> 2026
        </span>
        <span className="font-bold tracking-wider text-[#FFF6E3]">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
