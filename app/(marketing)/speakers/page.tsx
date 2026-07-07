import SectionHeading from "@/components/shared/SectionHeading";
import { getSpeakers } from "@/lib/content";

export default function SpeakersPage() {
  const speakers = getSpeakers();

  return (
    <div className="w-full surface-page py-12 md:py-24 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-4xl flex flex-col gap-10 md:gap-14">
        {/* Page Header */}
        <SectionHeading
          eyebrow="Keynote Program"
          title="Keynote Speakers"
          description="Leading academic researchers and industry architects will present keynotes on the future of secure, autonomous computing."
        />

        {/* Honest Empty State */}
        {speakers.length === 0 ? (
          <div className="flex flex-col items-center gap-10 mt-4">
            {/* Main empty state — flat dashed border */}
            <div className="border border-dashed border-hairline bg-canvas-soft p-8 sm:p-12 text-center w-full max-w-xl">
              {/* Speaker icon placeholder in blue-tinted block */}
              <div className="mx-auto mb-6 h-14 w-14 flex items-center justify-center bg-primary/10">
                <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-[15px] font-semibold text-ink">Speakers to be announced</p>
              <p className="text-[13px] text-ink-secondary font-[300] mt-2 max-w-md mx-auto leading-relaxed">
                The selection committee is currently finalizing speaking details. Once confirmed, full bio and abstract notes will be posted here.
              </p>
              <span className="inline-block mt-5 font-sans text-[11px] uppercase tracking-wider text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-none">
                Expected · July 2026
              </span>
            </div>

            {/* Why Attend — 3-panel info row */}
            <div className="w-full">
              <h3 className="text-[14px] font-semibold text-ink border-b border-hairline pb-2.5 mb-5">What to Expect from Keynotes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 sm:p-5 border border-hairline bg-canvas rounded-none">
                  <div className="h-7 w-7 bg-[#24a148]/10 flex items-center justify-center mb-3">
                    <svg className="h-4 w-4 text-[#24a148]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-[13px] font-semibold text-ink">Foundational Research</h4>
                  <p className="text-[12px] text-ink-secondary font-[300] mt-1">Frontier breakthroughs in AI, Blockchain, and Robotics from world-class institutions.</p>
                </div>
                <div className="p-4 sm:p-5 border border-hairline bg-canvas rounded-none">
                  <div className="h-7 w-7 bg-primary/10 flex items-center justify-center mb-3">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-[13px] font-semibold text-ink">Industry Perspectives</h4>
                  <p className="text-[12px] text-ink-secondary font-[300] mt-1">Technology leaders sharing practical applications and real-world deployment insights.</p>
                </div>
                <div className="p-4 sm:p-5 border border-hairline bg-canvas rounded-none">
                  <div className="h-7 w-7 bg-ruby/10 flex items-center justify-center mb-3">
                    <svg className="h-4 w-4 text-ruby" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 className="text-[13px] font-semibold text-ink">Open Q&A Sessions</h4>
                  <p className="text-[12px] text-ink-secondary font-[300] mt-1">Interactive panels with time allocated for audience questions and discussion.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Future speaker items would render here dynamically */}
          </div>
        )}
      </div>
    </div>
  );
}
