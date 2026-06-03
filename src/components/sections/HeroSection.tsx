import {
  ArrowLeft,
  Bell,
  Briefcase,
  Check,
  Clock,
  Download,
  MapPin,
  Menu,
  Star,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SafeImage } from '@/components/ui/SafeImage';
import { SafeLink } from '@/components/ui/SafeLink';
import { SIDEBAR_LINKS } from '@/constants/content';
import { APK_DOWNLOAD_URL } from '@/constants/site';

const AVATAR_INDICES = [1, 2, 3, 4] as const;

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden" aria-labelledby="hero-heading">
      <div
        className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-sky-100/40 blur-3xl opacity-60"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full bg-emerald-100/30 blur-3xl opacity-50"
        aria-hidden
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-right reveal active">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-700 rounded-full font-bold text-sm mb-6 border border-sky-100">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" aria-hidden />
              أول منصة للعمل المرن في الجزائر
            </div>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5.5xl lg:text-6.5xl font-black text-slate-900 leading-tight mb-6"
            >
              فرص العمل المرنة <br />
              <span className="text-sky-600">في مكان واحد</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              منصة تجمع الطلبة والمتقاعدين وأصحاب العمل في بيئة احترافية وسهلة الاستخدام لتبادل
              الخبرات وتأدية المهام بمرونة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <SafeLink
                href={APK_DOWNLOAD_URL}
                external
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 transform active:scale-95 text-base shadow-md shadow-sky-100 bg-sky-600 text-white hover:bg-sky-700"
                aria-label="تحميل التطبيق APK"
              >
                تحميل التطبيق
                <span className="flex-shrink-0"><Download className="w-5 h-5" aria-hidden /></span>
              </SafeLink>
              <Button variant="secondary" icon={<ArrowLeft className="w-5 h-5" aria-hidden />}>
                إنشاء حساب مجاني
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3 -space-x-reverse" aria-hidden>
                {AVATAR_INDICES.map((i) => (
                  <SafeImage
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 14}`}
                    alt=""
                    className="w-11 h-11 rounded-full border-2 border-white shadow-sm"
                    width={44}
                    height={44}
                  />
                ))}
              </div>
              <div className="text-right">
                <div className="flex items-center text-yellow-500" aria-label="تقييم 4.9 من 5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" aria-hidden />
                  ))}
                  <span className="mr-2 font-bold text-slate-800 text-sm">4.9/5</span>
                </div>
                <span className="text-xs text-slate-500 font-semibold">
                  بناءً على تقييم أكثر من +15,000 مستخدم
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full flex justify-center items-center h-[580px] lg:h-[640px]">
            <div
              className="app-phone-mockup absolute left-2 lg:left-6 bottom-4 transform -rotate-6 scale-90 opacity-40 z-0"
              aria-hidden
            >
              <div className="h-full bg-slate-900 text-white flex flex-col justify-between pt-8 pb-4">
                <div className="px-5 py-4 border-b border-slate-800 flex justify-between items-center">
                  <span className="font-black text-xl">JobConnect</span>
                  <div className="w-7 h-7 bg-slate-800 rounded-lg flex items-center justify-center">
                    <X className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
                <div className="flex-1 px-3 py-6 space-y-2">
                  <div className="flex items-center gap-3 bg-sky-600 text-white p-3.5 rounded-2xl font-bold">
                    <Briefcase className="w-5 h-5" /> الرئيسية
                  </div>
                  {SIDEBAR_LINKS.map((link) => (
                    <div
                      key={link}
                      className="flex items-center gap-3 text-slate-300 p-3.5 hover:bg-slate-800/50 rounded-2xl font-medium"
                    >
                      <div className="w-5 h-5 rounded bg-slate-800 flex-shrink-0" /> {link}
                    </div>
                  ))}
                </div>
                <div className="px-5 pt-4 border-t border-slate-800">
                  <div className="bg-slate-800 p-3 rounded-xl flex justify-between items-center text-sm">
                    <span>اللغة</span>
                    <span className="font-bold text-sky-400">Français</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="app-phone-mockup relative z-10 shadow-2xl scale-105 border-slate-900" aria-hidden>
              <div className="h-10 bg-white" />
              <div className="bg-white border-b border-slate-100 px-4 py-3 flex justify-between items-center">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <Menu className="w-4 h-4 text-slate-700" />
                </div>
                <span className="font-bold text-slate-800 text-sm">التفاصيل</span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <Bell className="w-4 h-4 text-slate-700" />
                </div>
              </div>

              <div className="p-4 bg-slate-50 h-[calc(100%-110px)] overflow-y-auto space-y-4 text-right">
                <div>
                  <span className="text-xs text-slate-500 block mb-2 font-bold">⏱️ المدة</span>
                  <div className="flex gap-2">
                    <span className="px-4 py-1.5 bg-sky-600 text-white rounded-xl text-xs font-bold flex-1 text-center">
                      الكل
                    </span>
                    <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold flex-1 text-center">
                      قصير
                    </span>
                    <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold flex-1 text-center">
                      طويل
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 font-bold">تم العثور على 5 وظيفة</p>

                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative space-y-3">
                  <div className="absolute top-4 left-4 text-rose-500 bg-rose-50 p-1.5 rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <h3 className="font-black text-slate-800 text-lg">Teaching</h3>
                  <div className="space-y-2 text-sm text-slate-600 font-medium">
                    <div className="flex items-center gap-2 justify-start">
                      <MapPin className="w-4 h-4 text-rose-500" />
                      <span>Tlemcen</span>
                    </div>
                    <div className="flex items-center gap-2 justify-start">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>weeks 2</span>
                    </div>
                    <div className="flex items-center gap-2 justify-start">
                      <span className="text-emerald-600 font-black text-lg">DZD 20000</span>
                      <span>💰</span>
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-lg">
                    متوسط
                  </div>
                  <p className="text-slate-500 text-sm font-semibold">Teaching kids</p>
                  <button
                    type="button"
                    className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl text-sm flex items-center justify-center gap-2 border border-slate-200"
                    tabIndex={-1}
                    aria-hidden
                  >
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3px]" /> تم التقديم
                  </button>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-100 opacity-60">
                  <h4 className="font-bold text-slate-800 text-sm">تدريس</h4>
                </div>
              </div>
            </div>

            <div className="absolute right-0 bottom-12 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 w-48 hidden sm:block z-20" aria-hidden>
              <div className="flex items-center justify-between mb-3 border-b border-slate-50 pb-2">
                <span className="text-xs font-bold text-slate-400">حالة الطلبات</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-semibold">المقبولة</span>
                  <span className="font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">1</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-semibold">المجموع</span>
                  <span className="font-black text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">2</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-slate-50 pt-2">
                  <span className="text-slate-500 font-semibold">التقييم</span>
                  <span className="font-black text-amber-500 flex items-center gap-1">⭐ 4.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
