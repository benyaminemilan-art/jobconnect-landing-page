import { SectionHeading } from '@/components/ui/SectionHeading';
import { WORKFLOW_STEPS } from '@/constants/content';

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-24 bg-slate-900 text-white relative"
      aria-labelledby="solution-heading"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="كيف يحل JobConnect هذه المشكلة؟"
          subtitle="خطوات ميسرة وبسيطة تم تصميمها بعناية لتوفر لكم تجربة انتقال مهني غاية في السلاسة"
          isDark
        />

        <div className="max-w-5xl mx-auto mt-16 relative">
          <div
            className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 rounded-full z-0"
            aria-hidden
          />

          <ol className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10 list-none">
            {WORKFLOW_STEPS.map((step) => (
              <li
                key={step.num}
                className="reveal bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl text-center flex flex-col items-center group hover:border-sky-500 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-full bg-sky-600 text-white font-black text-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-sky-900/30"
                  aria-hidden
                >
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
