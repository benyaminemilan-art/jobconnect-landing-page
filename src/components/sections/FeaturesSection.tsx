import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FEATURES } from '@/constants/content';

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white relative" aria-labelledby="features-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="المميزات الاحترافية داخل التطبيق"
          subtitle="لقد قمنا بتصميم واجهات JobConnect لتمنحك كافة الأدوات الضرورية في بيئة مريحة وبلغة عربية سليمة."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="reveal bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" aria-hidden />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
