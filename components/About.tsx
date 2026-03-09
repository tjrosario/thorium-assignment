import { FC, HTMLAttributes } from "react";

import Image from "next/image";

import { DotPattern } from "@/components/DecorativeElements";
import { USMapIllustration } from "@/components/USMapIllustration";

interface AboutProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const About: FC<AboutProps> = ({ className, ...props }) => {
  return (
    <section className={`relative pb-24 lg:pb-40 ${className || ""}`} {...props}>
      {/* Nurse Image & Centered Dots */}
      <div className="relative flex flex-col md:flex-row md:items-stretch">
        <div className="w-full lg:w-[60%]">
          <Image
            alt="Medical professional with patient"
            className="w-full object-cover shadow-2xl"
            height={672}
            src="/images/feature-nurse.jpg"
            width={928}
          />
        </div>

        {/* Centered Dots Container */}
        <div className="hidden flex-1 justify-center lg:flex">
          <DotPattern className="mt-[120px]" />
        </div>
      </div>

      {/* Content Box: Max 1440px, flush right */}
      <div className="relative z-10 mx-auto -mt-20 w-[94%] bg-[#001A2C] px-8 py-16 shadow-2xl lg:-mt-56 lg:ml-auto lg:mr-0 lg:max-w-[94%] lg:px-20 lg:py-20">
        {/* Heading */}
        <div className="mb-12 max-w-4xl lg:mb-16">
          <h2 className="font-messina text-4xl leading-[1.05] text-white sm:text-5xl lg:text-[72px]">
            Need to offer <em className="font-serif italic text-accent-cyan">nationwide</em> access
            to health care providers?
          </h2>
        </div>

        {/* Lower Grid: Paragraph and Map */}
        <div className="grid grid-cols-1 items-stretch gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex max-w-xl flex-col justify-between">
            <p className="text-lg leading-relaxed text-accent-ice/60 lg:pr-36 lg:text-xl lg:leading-loose">
              MagnaCare has an extensive PPO network that includes all 50 states and Puerto Rico,
              with top-rated doctors and hospitals, as well as inpatient and outpatient services
              such as rehab centers, urgent care centers and ambulatory surgery centers.
            </p>

            <div className="mt-12 pt-8 lg:mt-auto">
              <a
                className="group flex items-center gap-6 font-krona text-[11px] uppercase tracking-[0.3em] text-accent-ice/60 transition-colors hover:text-accent-cyan lg:text-[15px]"
                href="/contact"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Map Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <USMapIllustration className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
