import { Download, Play } from 'lucide-react';
import { APK_DOWNLOAD_URL, GOOGLE_PLAY_URL } from '@/constants/site';
import { SafeLink } from '@/components/ui/SafeLink';

export function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden" aria-labelledby="download-heading">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-800" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
        <h2 id="download-heading" className="text-4xl md:text-5xl font-black mb-6 reveal">
          ابدأ رحلتك المهنية اليوم
        </h2>
        <p className="text-lg md:text-xl text-sky-100 mb-10 max-w-2xl mx-auto reveal leading-relaxed">
          انضم للآلاف من أبناء المجتمع وباشر في توظيف كفاءات مرنة موثوقة أو ابدأ في جني دخل
          يتوافق تماماً مع ظروفك المعيشية.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 reveal">
          <SafeLink
            href={GOOGLE_PLAY_URL}
            external
            className="flex items-center gap-3 bg-slate-950 text-white px-7 py-3.5 rounded-2xl font-bold hover:bg-black transition-colors w-full sm:w-auto justify-center shadow-lg"
            aria-label="تحميل من Google Play"
          >
            <Play className="w-6 h-6 fill-current text-white" aria-hidden />
            <div className="text-right flex flex-col leading-tight">
              <span className="text-[10px] text-slate-400 font-medium">حمله الآن من</span>
              <span className="text-base font-bold font-mono">Google Play</span>
            </div>
          </SafeLink>

          <SafeLink
            href={APK_DOWNLOAD_URL}
            external
            className="flex items-center gap-3 bg-white text-sky-950 px-7 py-3.5 rounded-2xl font-bold hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center shadow-lg"
            aria-label="تحميل APK مباشر"
          >
            <Download className="w-6 h-6 text-sky-600" aria-hidden />
            <div className="text-right flex flex-col leading-tight">
              <span className="text-[10px] text-slate-500 font-medium">تحميل مباشر</span>
              <span className="text-base font-bold font-mono">APK Download</span>
            </div>
          </SafeLink>
        </div>
      </div>
    </section>
  );
}
