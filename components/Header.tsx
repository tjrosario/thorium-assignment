"use client";

import { FC, HTMLAttributes, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { SlideMenu } from "@/components/SlideMenu";

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`relative z-50 w-full ${className || ""}`} {...props}>
      <Container narrow>
        <div className="flex items-center justify-between pb-5 pt-10">
          <Link aria-label="MagnaCare - Go to homepage" className="w-48 lg:w-56" href="/">
            <Image
              alt="Magnacare Logo"
              className="h-auto w-full"
              height={40}
              priority
              src="/images/logo.png"
              width={234}
            />
          </Link>

          <button
            aria-label="Open navigation menu"
            className="group flex flex-col items-end gap-1.5 p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
            type="button"
          >
            {/* Hamburger Lines */}
            <span className="h-[2px] w-[28px] bg-white transition-all duration-300 ease-in-out group-hover:w-[35px]" />
            <span className="h-[2px] w-[21px] bg-white transition-all duration-300 ease-in-out group-hover:w-[35px]" />
            <span className="h-[2px] w-[28px] bg-white transition-all duration-300 ease-in-out group-hover:w-[35px]" />
          </button>
        </div>
      </Container>

      <SlideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};
