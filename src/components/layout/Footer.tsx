import { Globe, Mail } from 'lucide-react';
import { JobConnectLogo } from '@/components/brand/JobConnectLogo';
import { CONTACT_EMAIL } from '@/constants/site';
import { SafeLink } from '@/components/ui/SafeLink';

const CURRENT_YEAR = new Date().getFullYear();
const MAILTO = `mailto:${CONTACT_EMAIL}`;

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <JobConnectLogo className="w-12 h-12" />
              <span className="text-2xl font-black text-white">JobConnect</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              المنصة الجزائرية الرائدة والأولى المخصصة لربط المتقاعدين والطلاب الجامعيين بأصحاب
              العمل لتوفير وظائف مرنة تساهم في نمو الاقتصاد ونقل الخبرات.
            </p>
            <div className="flex items-center gap-2 text-sm text-sky-400 font-bold pt-2">
              <Mail className="w-4 h-4" aria-hidden />
              <SafeLink href={MAILTO} className="hover:underline">
                {CONTACT_EMAIL}
              </SafeLink>
            </div>
          </div>

          <nav aria-label="روابط حول المنصة">
            <h4 className="text-white font-bold mb-4 text-base">حول المنصة</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  المشكلة والحل
                </a>
              </li>
              <li>
                <a href="#users" className="hover:text-white transition-colors">
                  فئات المستخدمين
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  مزايا التطبيق
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="القوانين والخصوصية">
            <h4 className="text-white font-bold mb-4 text-base">القوانين والخصوصية</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#download" className="hover:text-white transition-colors">
                  سياسة الخصوصية والأمان
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">
                  شروط وأحكام الاستخدام
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">
                  إرشادات التحقق للطلاب
                </a>
              </li>
              <li>
                <SafeLink href={MAILTO} className="hover:text-white transition-colors">
                  الدعم الفني
                </SafeLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500 font-medium">
            © {CURRENT_YEAR} JobConnect. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" aria-hidden /> الجزائر
            </span>
            <span aria-hidden>•</span>
            <SafeLink href={MAILTO} className="hover:text-white">
              تواصل معنا المباشر
            </SafeLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
