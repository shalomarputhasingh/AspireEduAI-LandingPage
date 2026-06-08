import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { Consolidation } from "@/components/sections/Consolidation";
import { Problem } from "@/components/sections/Problem";
import { WhyNow } from "@/components/sections/WhyNow";
import { Founder } from "@/components/sections/Founder";
import { Solution } from "@/components/sections/Solution";
import { Benefits } from "@/components/sections/Benefits";
import { InstitutionTypes } from "@/components/sections/InstitutionTypes";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/ui/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HeroVisual />
      <Consolidation />
      <SocialProof />
      <Problem />
      <WhyNow />
      <Founder />
      <Solution />
      <Benefits />
      <InstitutionTypes />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
