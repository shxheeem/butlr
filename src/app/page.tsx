import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features";
import TeamSection from "@/components/team-section";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      <Navbar className="fixed top-0 left-0 right-0 z-50" />
      <div className="pt-16 md:pt-20">
        <div className="snap-start">
          <HeroSection />
        </div>
        <div className="snap-start">
          <Features />
        </div>
        <div className="snap-start">
          <TeamSection />
        </div>
      </div>
    </main>
  );
}
