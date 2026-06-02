import { Clock, GraduationCap, Users } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PROBLEM_CARDS } from '@/constants/content';
import type { ProblemCard } from '@/types';

const ICON_MAP = {
  graduation: GraduationCap,
  clock: Clock,
  users: Users,
} as const;

const ICON_STYLES = {
  graduation: 'bg-rose-50 text-rose-600',
  clock: 'bg-amber-50 text-amber-600',
  users: 'bg-sky-50 text-sky-600',
} as const;

function ProblemCardItem({ icon, title, description }: ProblemCard) {
  const Icon = ICON_MAP[icon];
  const iconStyle = ICON_STYLES[icon];

  return (
    <article className="reveal bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div
        className={`w-14 h-14 ${iconStyle} rounded-2xl flex items-center justify-center mb-6 font-bold`}
      >
        <Icon className="w-7 h-7" aria-hidden />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
    </article>
  );
}

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-white relative" aria-labelledby="problem-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="المشكلة"
          subtitle="التحديات التي نواجهها في سوق العمل التقليدي وكيف تؤثر على مختلف فئات المجتمع"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEM_CARDS.map((card) => (
            <ProblemCardItem key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
