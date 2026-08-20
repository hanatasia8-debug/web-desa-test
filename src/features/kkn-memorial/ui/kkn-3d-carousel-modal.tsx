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
  const total = KKN_MEMBERS.length;

  const nextMember = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevMember = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
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

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 40;
    const velocity = 300;

    if (info.offset.x < -threshold || info.velocity.x < -velocity) {
      nextMember();
    } else if (info.offset.x > threshold || info.velocity.x > velocity) {
      prevMember();
    }
  };

  // Helper to get relative card offset (-1 for left, 0 for center, +1 for right)
  const getCardAtOffset = (offset: number): { member: KknMember; index: number } => {
    const targetIdx = (currentIndex + offset + total) % total;
    return {
      member: KKN_MEMBERS[targetIdx],
      index: targetIdx,
    };
  };

  const leftItem = getCardAtOffset(-1);
  const centerItem = getCardAtOffset(0);
  const rightItem = getCardAtOffset(1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#001E16]/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative z-10 flex max-h-[95vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2.5rem] border border-[#003527]/15 bg-[#FBFBFA] p-6 text-[#003527] shadow-[0_25px_70px_rgba(0,30,22,0.35)] sm:p-8 md:p-10"
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
              className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#003527]/10 text-xl font-light text-[#003527]/60 transition-all hover:bg-[#003527]/5 hover:text-[#003527]"
            >
              ×
            </button>
          </div>

          {/* 3D Physical Card Carousel Viewport */}
          <div className="relative my-4 flex min-h-[360px] sm:min-h-[400px] md:min-h-[430px] items-center justify-center overflow-hidden py-4 select-none [perspective:1200px]">
            {/* Left Card (Slightly Behind & Tilted) */}
            <div
              onClick={prevMember}
              className="absolute left-1/2 -translate-x-[160px] sm:-translate-x-[220px] md:-translate-x-[270px] z-10 cursor-pointer transition-all duration-300 pointer-events-auto"
              style={{
                transform: "translate(-50%, 0) scale(0.84) rotateY(12deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <MemberCard
                member={leftItem.member}
                index={leftItem.index}
                total={total}
                isSide
              />
            </div>

            {/* Right Card (Slightly Behind & Tilted) */}
            <div
              onClick={nextMember}
              className="absolute left-1/2 translate-x-[160px] sm:translate-x-[220px] md:translate-x-[270px] z-10 cursor-pointer transition-all duration-300 pointer-events-auto"
              style={{
                transform: "translate(-50%, 0) scale(0.84) rotateY(-12deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <MemberCard
                member={rightItem.member}
                index={rightItem.index}
                total={total}
                isSide
              />
            </div>

            {/* Active Center Card (Interactive & Draggable) */}
            <motion.div
              key={centerItem.member.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={handleDragEnd}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              whileTap={{ cursor: "grabbing" }}
              className="relative z-30 cursor-grab active:cursor-grabbing"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <MemberCard
                member={centerItem.member}
                index={centerItem.index}
                total={total}
                isActive
              />
            </motion.div>
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
                {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
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
          <div className="mt-6 flex flex-col items-center justify-center border-t border-[#003527]/10 pt-5 text-center">
            <p className="font-serif italic text-xs md:text-sm text-[#003527]/80 max-w-lg leading-relaxed">
              &ldquo;{KKN_INFO.appreciationQuote}&rdquo;
            </p>

            <span className="mt-2 text-[10px] tracking-wider text-[#064E3B]/60 uppercase">
              {KKN_INFO.title} · {KKN_INFO.year}
            </span>

            <button
              onClick={onClose}
              className="mt-4 inline-flex items-center justify-center rounded-full border border-[#003527]/30 px-6 py-2 text-xs font-medium text-[#003527] transition-all hover:border-[#003527] hover:bg-[#003527] hover:text-white"
            >
              Tutup & Kembali ke Website
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

interface MemberCardProps {
  member: KknMember;
  index: number;
  total: number;
  isActive?: boolean;
  isSide?: boolean;
}

function MemberCard({ member, index, total, isActive, isSide }: MemberCardProps) {
  const initials = getInitials(member.name);

  return (
    <div
      className={cn(
        "relative flex h-[350px] w-[260px] sm:h-[380px] sm:w-[280px] md:h-[400px] md:w-[300px] flex-col items-center justify-between overflow-hidden rounded-[2rem] border bg-gradient-to-b from-[#FFFFFF] to-[#F9F8F5] p-6 text-center transition-all duration-300",
        isActive
          ? "border-[#003527]/15 shadow-[0_15px_40px_rgba(0,35,27,0.12)] ring-1 ring-[#C9A86A]/20"
          : "border-[#003527]/10 opacity-60 shadow-md",
        isSide && "filter blur-[0.4px]",
      )}
    >
      {/* Subtle Inner Border Frame */}
      <div className="pointer-events-none absolute inset-2.5 rounded-[1.6rem] border border-[#C9A86A]/25" />

      {/* Top Portrait / Initials Badge */}
      <div className="mt-3 relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border border-[#C9A86A]/40 bg-gradient-to-b from-[#FAF8F5] to-[#EFECE6] p-1 shadow-inner">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#003527]/5 text-[#003527]">
          <span className="font-serif text-2xl sm:text-3xl font-medium tracking-wider text-[#003527]">
            {initials}
          </span>
        </div>
      </div>

      {/* Member Details */}
      <div className="flex flex-col items-center px-1">
        {/* Full Name */}
        <h3 className="font-headline-md text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#003527] leading-snug">
          {member.name}
        </h3>

        {/* Role */}
        <p className="mt-1.5 text-xs sm:text-sm font-semibold text-[#064E3B] leading-tight">
          {member.role}
        </p>

        {/* Program Studi · Fakultas */}
        <p className="mt-1 text-[11px] sm:text-xs text-[#003527]/60 leading-normal">
          {member.major} · {member.faculty}
        </p>
      </div>

      {/* Bottom Counter */}
      <div className="w-full flex items-center justify-between pt-2 px-1 text-[10px] font-mono text-[#003527]/40">
        <span className="uppercase tracking-widest text-[#C9A86A]">2026</span>
        <span>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
