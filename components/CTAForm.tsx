"use client";

import { type FC, type FormEvent, type HTMLAttributes, useState } from "react";

import { Container } from "@/components/Container";
import { PlusCross } from "@/components/DecorativeElements";

interface CTAFormProps extends HTMLAttributes<HTMLElement> {}

type FormStatus = "idle" | "submitting" | "success";

export const CTAForm: FC<CTAFormProps> = ({ className, ...props }) => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("submitting");

    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    setStatus("success");
    setEmail("");

    // Reset to idle after a delay
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <section className={`relative pb-12 pt-4 lg:py-32 ${className || ""}`} {...props}>
      <Container narrow className="">
        {/* Decorative Plus */}
        <div
          aria-hidden="true"
          className="absolute left-[140px] top-[45px] hidden opacity-20 lg:block"
        >
          <PlusCross className="h-24 w-24" />
        </div>

        <div className="flex flex-col items-center">
          <form
            className="flex w-full max-w-4xl flex-col justify-center gap-1 sm:flex-row sm:gap-0"
            noValidate
            onSubmit={handleSubmit}
          >
            <input
              className="placeholder:text-white/52 w-full flex-1 rounded-md border border-white/30 bg-white/5 px-6 py-4 font-messina text-[14px] leading-none tracking-[0.02em] text-white transition-colors focus:border-accent-cyan focus:outline-none sm:rounded-r-none sm:border-r-0 lg:max-w-[416px] lg:text-[25px]"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              type="email"
              value={email}
            />
            <button
              className="w-full rounded-md bg-[#FF7A45] px-12 py-4 font-krona text-[10px] uppercase tracking-[0.2em] text-navy-800 transition-all hover:bg-[#FF6A2D] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:rounded-l-none lg:text-[17px]"
              disabled={status === "submitting"}
              type="submit"
            >
              {status === "submitting" ? "Submitting..." : "Learn More"}
            </button>
          </form>

          {/* Status Message */}
          {status === "success" && (
            <p className="mt-4 text-center text-accent-cyan" role="alert">
              Success! We'll be in touch.
            </p>
          )}

          {/* Disclaimer Text */}
          <p className="mx-auto mt-10 max-w-2xl text-center text-[10px] leading-relaxed text-white/30 sm:text-[11px] lg:px-14 lg:text-[12px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s...
          </p>
        </div>
      </Container>
    </section>
  );
};
