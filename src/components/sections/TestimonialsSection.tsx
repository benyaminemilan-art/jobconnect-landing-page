import { Star } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TESTIMONIALS } from '@/constants/content';

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <SectionHeading
          title="آراء وقصص نجاح مستخدمينا"
          subtitle="شاهد كيف ساعد تطبيق JobConnect أصحاب العمل على تسريع إنتاجيتهم والطلبة على بدء مسيراتهم."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {TESTIMONIALS.map((test) => (
            <blockquote
              key={test.name}
              className="reveal bg-slate-50 p-8 rounded-3xl border border-slate-100 text-right flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-500 mb-4 justify-start" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                  &ldquo;{test.comment}&rdquo;
                </p>
              </div>
              <footer className="border-t border-slate-200/50 pt-4 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 font-bold flex items-center justify-center text-sm"
                  aria-hidden
                >
                  {test.name[0]}
                </div>
                <cite className="not-italic">
                  <h4 className="font-bold text-slate-800 text-sm">{test.name}</h4>
                  <span className="text-xs text-slate-400">{test.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
