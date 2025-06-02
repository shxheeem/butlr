'use client';

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(currentScrollY <= lastScrollY);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={twMerge(
        "fixed top-0 left-0 right-0 flex items-center justify-between px-3 md:px-5 py-2 md:py-4 bg-black/90 backdrop-blur-sm transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
        "hover:translate-y-0",
        className
      )}
      style={{
        zIndex: 50,
        transform: `translateY(${isVisible ? '0' : '-100%'})`,
        transition: 'transform 0.3s ease-in-out'
      }}
    >
      <div>
        <Link href="/">
          <Image
            src="/butlr_logo.png"
            alt="Butlr Logo"
            width={80}
            height={48}
            className="w-[60px] md:w-[80px] h-auto"
          />
        </Link>
      </div>
      <div className="flex gap-3 md:gap-4 text-[#897F7F] text-sm md:text-base">
        <Link href="/" className="hover:text-white transition">About</Link>
        <Link href="/contact" className="hover:text-white transition">Contact</Link>
      </div>
    </nav>
  );
}
