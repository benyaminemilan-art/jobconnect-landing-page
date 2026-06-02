import { ArrowLeft, Briefcase, GraduationCap, Users } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function UsersSection() {
  return (
    <section id="users" className="py-24 bg-slate-50" aria-labelledby="users-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="مُصمم ليناسب الجميع"
          subtitle="ثلاث فئات متناغمة تلتقي في بيئة واحدة لتحقيق أهدافها المهنية بكفاءة"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="reveal bg-white rounded-3xl p-8 border border-slate-100 shadow-md flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 font-bold">
                <GraduationCap className="w-7 h-7" aria-hidden />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-3">الطلبة</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                اعثر على فرص عمل مرنة ومتوافقة مع جدولك الدراسي. ابنِ خبرتك المهنية الحقيقية
                واحصل على دخل إضافي يساعدك في تمويل دراستك الجامعية دون أي تعارض.
              </p>
            </div>
            <div className="border-t border-slate-50 pt-4 text-sky-600 font-bold flex items-center gap-2 cursor-pointer group-hover:gap-3 transition-all">
              <span>تصفح وظائف الطلبة</span> <ArrowLeft className="w-4 h-4" aria-hidden />
            </div>
          </article>

          <article className="reveal bg-sky-600 text-white rounded-3xl p-8 shadow-xl shadow-sky-600/20 flex flex-col justify-between relative overflow-hidden transform lg:-translate-y-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" aria-hidden />
            <div>
              <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                <Users className="w-7 h-7" aria-hidden />
              </div>
              <h3 className="text-2xl font-black mb-3">المتقاعدون</h3>
              <p className="text-sky-50 leading-relaxed mb-6">
                استثمر خبرتك وعمرك المهني الطويل في تقديم خدمات استشارية وتوجيهية وتدريبية مرنة.
                تواصل مع الشركات التي تقدر قيمتك العلمية والمعرفية لتبقى فاعلاً ومؤثراً.
              </p>
            </div>
            <div className="border-t border-white/10 pt-4 text-white font-bold flex items-center gap-2 cursor-pointer">
              <span>شارك خبرتك الآن</span> <ArrowLeft className="w-4 h-4" aria-hidden />
            </div>
          </article>

          <article className="reveal bg-white rounded-3xl p-8 border border-slate-100 shadow-md flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 font-bold">
                <Briefcase className="w-7 h-7" aria-hidden />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-3">أصحاب العمل</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                اعثر على المواهب المناسبة بسرعة وكفاءة فائقة. تواصل مع مئات الطلبة النشطين أو
                الخبراء المتقاعدين لتلبية احتياجات أعمالك المؤقتة أو المستمرة دون التزامات معقدة.
              </p>
            </div>
            <div className="border-t border-slate-50 pt-4 text-emerald-600 font-bold flex items-center gap-2 cursor-pointer group-hover:gap-3 transition-all">
              <span>أعلن عن وظيفة شاغرة</span> <ArrowLeft className="w-4 h-4" aria-hidden />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
