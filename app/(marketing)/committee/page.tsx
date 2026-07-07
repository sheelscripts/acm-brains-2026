import SectionHeading from "@/components/shared/SectionHeading";
import { getCommittee } from "@/lib/content";

const COMMITTEE_ROLES = [
  { role: "General Chairs", description: "Overall strategic direction, institutional liaisons, and venue coordination.", color: "primary" },
  { role: "Technical Program Committee", description: "Reviewers and area chairs who evaluate submitted manuscripts under double-blind procedures.", color: "success" },
  { role: "Local Organizing Committee", description: "On-ground logistics, hospitality, registration desk, and volunteer coordination at USAR.", color: "warning" },
  { role: "Advisory Board", description: "Distinguished senior academics providing guidance on program quality and outreach.", color: "ruby" },
  { role: "Web & Publicity Chairs", description: "Website, social media, and digital media communications.", color: "primary" },
  { role: "Finance Chairs", description: "Registration, grants, sponsors, and budget administration.", color: "success" },
];

export default function CommitteePage() {
  const committee = getCommittee();

  return (
    <div className="w-full surface-page py-12 md:py-24 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-4xl flex flex-col gap-10 md:gap-14">
        {/* Page Header */}
        <SectionHeading
          eyebrow="Organization"
          title="Organizing Committee"
          description="The conference is managed by a coalition of academic faculty, researchers, and student leaders from GGSIPU USAR and the GGSIPU EDC ACM Student Chapter."
        />

        {/* Committee Role Grid — always shown */}
        <section className="flex flex-col gap-6">
          <h3 className="text-[20px] font-[300] tracking-[-0.2px] text-ink border-b border-hairline pb-2.5">
            Committee Structure
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {COMMITTEE_ROLES.map(({ role, description, color }) => {
              const colorMap: Record<string, string> = {
                primary: "bg-primary/10 text-primary",
                success: "bg-[#24a148]/10 text-[#24a148]",
                warning: "bg-lemon/15 text-[#9b6829]",
                ruby: "bg-ruby/10 text-ruby",
              };
              return (
                <div key={role} className="p-4 sm:p-5 border border-hairline bg-canvas rounded-none hover:border-primary transition-colors flex flex-col gap-3">
                  <div className={`inline-flex self-start px-2 py-0.5 rounded-none text-[10px] font-sans uppercase tracking-wider ${colorMap[color]}`}>
                    {role}
                  </div>
                  <p className="text-[12px] text-ink-secondary font-[300] leading-relaxed">{description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Member Empty State (honest) */}
        {committee.length === 0 ? (
          <div className="flex flex-col gap-4 mt-2">
            {/* Empty state card — dashed flat border */}
            <div className="border border-dashed border-hairline bg-canvas-soft p-6 sm:p-8 flex flex-col items-center text-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center bg-canvas border border-hairline rounded-none">
                <svg className="h-5 w-5 text-ink-mute" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-[14px] font-semibold text-ink">Member details pending</p>
              <p className="text-[13px] text-ink-secondary font-[300] max-w-md leading-relaxed">
                Full appointments of the General Chairs, Technical Program Committee (TPC), and Advisory Board will be published shortly. Nominations are currently under review.
              </p>
            </div>

            {/* Host institution strip */}
            <div className="border-l-4 border-l-primary border border-hairline bg-canvas-soft p-4 sm:p-5">
              <p className="text-[13px] text-ink-secondary font-[300] leading-relaxed">
                <strong className="text-ink font-semibold">Host Institution:</strong> Guru Gobind Singh Indraprastha University (GGSIPU) — University School of Automation and Robotics (USAR), East Delhi Campus, Surajmal Vihar, Delhi-110032.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Future committee members will render here dynamically */}
          </div>
        )}
      </div>
    </div>
  );
}
