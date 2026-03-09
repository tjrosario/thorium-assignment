import { About } from "@/components/About";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { CTAForm } from "@/components/CTAForm";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function AccessPage() {
  return (
    <>
      <AnnouncementBar
        message={`This is an example of a notification message. It can be used to promote a specific campaign, etc.`}
      />
      <Header />
      <main>
        <Hero id="hero" />
        <CTAForm id="cta-form" />
        <About id="about" />
      </main>
    </>
  );
}
