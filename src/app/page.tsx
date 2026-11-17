import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";
import { Services } from "@/components/sections/services";
import { WhyChooseMe } from "@/components/sections/why-choose-me";
import { CallToAction } from "@/components/sections/call-to-action";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <WhyChooseMe />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
