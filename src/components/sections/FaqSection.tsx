import { FaqItem } from '@/components/faq/FaqItem';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQ_ITEMS } from '@/constants/content';

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-slate-50" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading
          title="الأسئلة الشائعة"
          subtitle="كل ما ترغب في معرفته حول آليات التطبيق وشروط الانضمام لأسرة JobConnect"
        />

        <div className="mt-12 reveal">
          {FAQ_ITEMS.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
