import { SectionHeading } from '@/components/ui/SectionHeading';

export function ScreenshotsSection() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden" aria-labelledby="screenshots-heading">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <SectionHeading
          title="نظرة واقعية من داخل التطبيق"
          subtitle="لقطات شاشة مستوحاة بالكامل من تصميمات تطبيقنا الفعلي لتأكيد الجودة والشفافية."
        />
      </div>

      <div
        className="flex gap-8 px-6 overflow-x-auto pb-12 snap-x justify-start lg:justify-center"
        role="list"
        aria-label="لقطات شاشة التطبيق"
      >
        <div className="app-phone-mockup shrink-0 snap-center bg-white" role="listitem">
          <div className="h-full flex flex-col">
            <div className="h-8 bg-slate-100" aria-hidden />
            <div className="p-4 flex-1 overflow-y-auto space-y-4 text-right text-xs">
              <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm space-y-3">
                <div className="flex items-center gap-3 justify-start">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">mohammed</h4>
                    <p className="text-slate-400">60-65 سنة</p>
                  </div>
                </div>
                <div className="bg-amber-50/50 p-3 rounded-xl flex justify-between items-center border border-amber-100/50">
                  <span className="font-bold text-slate-700">تقييمك</span>
                  <span className="font-bold text-amber-600 flex items-center gap-1">
                    ⭐ 0.0 (0 تقييم)
                  </span>
                </div>
                <div className="space-y-2">
                  <span className="font-bold text-slate-700 block">مجالات خبرتك</span>
                  <span className="inline-block px-3 py-1 bg-amber-100/60 text-amber-800 rounded-lg font-semibold">
                    التدريس (سابق)
                  </span>
                </div>
                <div className="space-y-2">
                  <span className="font-bold text-slate-700 block">تفضيلات العمل</span>
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-lg font-semibold">
                    استشارات بدوام جزئي
                  </span>
                </div>
              </div>
              <div className="bg-white border border-slate-100 rounded-xl p-3 flex justify-between items-center">
                <span className="font-bold">معلومات الاتصال</span>
                <button type="button" className="text-sky-600 font-bold" tabIndex={-1} aria-hidden>
                  تعديل
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="app-phone-mockup shrink-0 snap-center bg-white" role="listitem">
          <div className="h-full flex flex-col">
            <div className="h-8 bg-slate-100" aria-hidden />
            <div className="p-4 flex-1 overflow-y-auto space-y-4 text-right text-xs">
              <div className="bg-sky-600 text-white p-3 rounded-xl font-bold flex justify-between">
                <span>نجح diaa!</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white border border-slate-100 p-3 rounded-xl text-center">
                  <span className="text-slate-400 block mb-1">طلباتي</span>
                  <span className="text-lg font-bold text-sky-600">2</span>
                </div>
                <div className="bg-white border border-slate-100 p-3 rounded-xl text-center">
                  <span className="text-slate-400 block mb-1">مقبول</span>
                  <span className="text-lg font-bold text-emerald-600">1</span>
                </div>
              </div>
              <div className="bg-white border border-slate-100 p-3 rounded-xl text-center">
                <span className="text-slate-400 block mb-1">تقييمك</span>
                <span className="text-base font-bold text-amber-500">⭐ 4.0</span>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-slate-800 block text-sm">طلباتي</span>
                <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                  <span className="bg-red-50 text-red-500 px-2 py-0.5 rounded text-[10px]">مرفوض</span>
                  <div className="text-left">
                    <p className="font-bold">Application #VXMqQkaq</p>
                    <span className="text-slate-400 text-[10px]">1/27/2026</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                  <span className="bg-emerald-50 text-emerald-500 px-2 py-0.5 rounded text-[10px]">
                    مقبول
                  </span>
                  <div className="text-left">
                    <p className="font-bold">Application #V5Yk8g25</p>
                    <span className="text-slate-400 text-[10px]">1/27/2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-phone-mockup shrink-0 snap-center bg-white" role="listitem">
          <div className="h-full flex flex-col">
            <div className="h-8 bg-slate-100" aria-hidden />
            <div className="p-4 flex-1 overflow-y-auto space-y-4 text-right text-xs">
              <div className="bg-white border border-slate-100 rounded-2xl p-4 space-y-3">
                <div>
                  <span className="text-slate-400 block">الاسم الكامل</span>
                  <span className="font-bold text-slate-800 text-sm">diaa</span>
                </div>
                <div>
                  <span className="text-slate-400 block">رقم الهاتف</span>
                  <span className="font-bold text-slate-800 text-sm">074581245</span>
                </div>
                <div>
                  <span className="text-slate-400 block">المدينة / الولاية</span>
                  <span className="font-bold text-slate-800 text-sm">oran</span>
                </div>
                <div>
                  <span className="text-slate-400 block">نبذة عني</span>
                  <p className="text-slate-600 leading-relaxed font-semibold">
                    طالب جامعي تخصص تسويق ماستر 1 مقيم في إقامة جامعية بولاية تلمسان لدي خبرة في
                    البيع.
                  </p>
                </div>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-4 space-y-3">
                <h4 className="font-black text-slate-800 text-sm">التحقق من الطالب</h4>
                <p className="text-slate-500 leading-relaxed text-[11px]">
                  التحقق اختياري. الطلاب المتحققون يحصلون على ثقة أعلى وظهور أفضل.
                </p>
                <button
                  type="button"
                  className="w-full py-2 bg-sky-600 text-white font-bold rounded-xl text-xs"
                  tabIndex={-1}
                  aria-hidden
                >
                  تحقق من حالة طالبك
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
