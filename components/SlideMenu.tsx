import { FC } from "react";

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SlideMenu: FC<SlideMenuProps> = ({ isOpen, onClose }) => {
  const navLinks = [
    { href: "#hero", name: "Hero" },
    { href: "#cta-form", name: "Contact" },
    { href: "#about", name: "About" },
  ];

  return (
    <div
      className={`fixed inset-0 z-[60] transform bg-black/90 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        aria-label="Close Menu"
        className="absolute right-6 top-6 text-4xl text-white lg:right-20 lg:top-10"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Navigation Links */}
      <nav className="flex h-full flex-col items-center justify-center gap-8">
        {navLinks.map((link) => (
          <a
            className="font-krona text-2xl uppercase tracking-wider text-white transition-colors hover:text-[#54C9FF] lg:text-4xl"
            href={link.href}
            key={link.name}
            onClick={onClose}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </div>
  );
};
