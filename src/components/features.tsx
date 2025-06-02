// src/components/features.tsx
import Image from "next/image";

export default function Features() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="bg-white text-black rounded-xl p-4 md:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
            <div className="max-w-lg space-y-4" style={{ fontFamily: "SF_Pro_Light" }}>
              <h2 className="text-xl md:text-2xl lg:text-3xl">Butlr - A Complete Platform</h2>
              <p className="text-sm md:text-base">
                A simple and powerful platform bringing together core digital services of a Higher Education Institute.
              </p>
              <p className="text-sm md:text-base">
                We aim to provide students and educators tools that would improve workflows and student experience by centralising:
              </p>
              <div className="space-y-2">
                {[
                  "Access to Course Materials",
                  "Student Engagement Data",
                  "Clubs and Societies"
                ].map((feature) => (
                  <div
                    key={feature}
                    className="bg-black/10 hover:bg-black/20 text-center py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer text-xs md:text-sm"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full max-w-[200px] lg:max-w-[250px] relative">
              <div className="relative aspect-[9/19]">
                <Image
                  src="/landing_page.png"
                  alt="Landing Page"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
