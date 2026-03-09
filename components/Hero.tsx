import { FC, HTMLAttributes } from "react";

import Image from "next/image";

interface HeroProps extends HTMLAttributes<HTMLElement> {}

export const Hero: FC<HeroProps> = ({ className, ...props }) => {
  return (
    <section
      aria-labelledby="hero-heading"
      className={`relative flex w-full flex-col overflow-hidden pb-16 lg:pb-32 ${className || ""}`}
      {...props}
    >
      <div className="mx-auto max-w-4xl lg:max-w-[1100px]">
        <p className="text-left font-krona text-[11px] uppercase !tracking-[0.38em] text-accent-ice sm:text-xs lg:text-[35px]">
          Choose Your
        </p>
      </div>

      <div className="relative mt-10 flex-grow">
        <div className="relative z-10 px-4 text-center">
          <h1
            className="xs:text-[16vw] relative flex flex-row justify-center font-krona text-[14vw] leading-[0.92] tracking-[-0.05em] text-[#54C9FF] sm:text-[100px] lg:block lg:text-[308px]"
            id="hero-heading"
          >
            {/* First Half */}
            <div className="relative inline-block lg:block">
              <div className="relative inline-block">
                ACC
                <div
                  aria-hidden="true"
                  className="absolute bottom-[28px] left-[-100px] hidden h-[79.5px] w-[709px] bg-accent-ice/50 mix-blend-overlay lg:block"
                />
              </div>
            </div>

            {/* Second Half */}
            <div className="relative inline-block lg:block">
              <div className="relative inline-block">
                ESS
                <div
                  aria-hidden="true"
                  className="absolute right-[-250px] top-[50px] hidden h-[79.5px] w-[709px] bg-accent-ice/50 mix-blend-overlay lg:block"
                />
              </div>
            </div>
          </h1>
        </div>

        <div className="absolute right-0 top-[-8%] z-30 hidden w-[332px] lg:block">
          <Image
            alt="Doctor with tablet"
            height={391}
            src="/images/hero-doctor-tablet.jpg"
            style={{ height: "auto" }}
            width={332}
          />
        </div>
        <div className="absolute left-0 top-[35%] z-30 hidden w-[369px] lg:block">
          <Image
            alt="Doctor with child"
            height={508}
            src="/images/hero-doctor-child.jpg"
            style={{ height: "auto" }}
            width={369}
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto mt-14 lg:mt-20">
        <div className="mx-auto max-w-4xl px-6 lg:max-w-[1100px] lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-4 lg:mt-24 xl:mt-0">
              <p className="text-left font-messina text-[18px] leading-[1.6] text-white/90 sm:text-[22px] lg:text-[28px]">
                Expand your provider network{" "}
                <em className="font-serif italic text-white">anywhere</em> in the country. Or lease
                just the network locations you need. With MagnaCare Access,{" "}
                <strong className="font-bold text-white">the choice is yours.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
