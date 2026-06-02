import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Smartphone, Users, Briefcase, GraduationCap, 
  CheckCircle2, ChevronDown, Star, Download, Play, 
  ArrowLeft, Search, Clock, Mail, MapPin, Bell, Check, Globe
} from 'lucide-react';

// --- Custom Styled CSS for exact matching application theme ---
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --app-blue-primary: #0284c7; /* Sky 600 - Exact app active blue */
    --app-blue-hover: #0369a1;
    --app-bg-light: #f8fafc;
    --app-green: #22c55e; /* Exact emerald for price DZD 20000 */
    --app-yellow-light: #fef9c3; /* Yellow background for ratings */
    --app-dark-blue: #0f172a; /* Custom dark navy from app drawer */
  }

  body {
    font-family: 'Cairo', sans-serif;
    background-color: var(--app-bg-light);
    color: #1e293b;
    direction: rtl;
  }

  /* Custom Scrollbar for premium feel */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  ::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }

  /* Smooth Entrance Animations */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  /* Device Mockup with exact look from screenshots */
  .app-phone-mockup {
    border: 10px solid #0f172a;
    border-radius: 36px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.3);
    background: #f8fafc;
    aspect-ratio: 9/19;
    width: 100%;
    max-width: 290px;
  }
  .app-phone-mockup::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 110px;
    height: 20px;
    background: #0f172a;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    z-index: 40;
  }
`;

// --- Inline SVG Logo (Recreating the uploaded modern 'M' arrow logo) ---
const JobConnectLogo = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Clean Soft Neumorphic Squircle Background */}
    <rect x="25" y="25" width="450" height="450" rx="110" fill="white" />
    <rect x="25" y="25" width="450" height="450" rx="110" fill="url(#bg_grad)" opacity="0.05" />
    <rect x="25" y="25" width="450" height="450" rx="110" stroke="#f1f5f9" strokeWidth="8" />
    
    {/* Stylized M with upward Arrow in gradients */}
    <g filter="url(#shadow_drop)">
      {/* First curve (Left Blue Arm of M) */}
      <path d="M120 340 C120 230, 190 140, 230 170 C260 190, 210 320, 270 340 C300 350, 310 230, 390 130" 
            stroke="url(#m_grad_blue_purple)" strokeWidth="54" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Upward Arrow (Green Right Arm) */}
      <path d="M290 320 L380 180" stroke="url(#m_grad_green)" strokeWidth="54" strokeLinecap="round" />
      
      {/* Arrow Head */}
      <path d="M330 150 L405 135 L420 210 Z" fill="#10b981" />
      
      {/* Tiny Right decorative crescent leaf seen in logo */}
      <path d="M400 300 C410 330, 380 370, 345 350 C325 340, 360 270, 400 300 Z" fill="url(#m_grad_green_light)" />
    </g>

    <defs>
      <linearGradient id="bg_grad" x1="0" y1="0" x2="500" y2="500">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
      <linearGradient id="m_grad_blue_purple" x1="120" y1="340" x2="390" y2="130">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="50%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#c084fc" />
      </linearGradient>
      <linearGradient id="m_grad_green" x1="290" y1="320" x2="380" y2="180">
        <stop offset="0%" stopColor="#059669" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
      <linearGradient id="m_grad_green_light" x1="345" y1="350" x2="400" y2="300">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>
      <filter id="shadow_drop" x="50" y="50" width="400" height="400" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0f172a" floodOpacity="0.12" />
      </filter>
    </defs>
  </svg>
);

// --- Section Heading Component ---
const SectionHeading = ({ title, subtitle, isDark = false }) => (
  <div className="text-center mb-16">
    <h2 className={`text-3xl md:text-4.5xl font-black mb-4 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

// --- Custom Button Component ---
const Button = ({ children, variant = 'primary', className = "", icon, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 transform active:scale-95 text-base shadow-sm";
  const variants = {
    primary: "bg-sky-600 text-white hover:bg-sky-700 shadow-md shadow-sky-100",
    secondary: "bg-white text-sky-600 border border-slate-200 hover:border-sky-600 hover:bg-sky-50/50",
    dark: "bg-slate-900 text-white hover:bg-black",
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};

// --- Custom Interactive Accordion ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200/80 rounded-2xl overflow-hidden mb-4 bg-white transition-all duration-300 hover:shadow-sm">
      <button
        className="w-full px-6 py-5 flex justify-between items-center text-right focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-slate-800">{question}</span>
        <ChevronDown className={`w-5 h-5 text-sky-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-52 py-5 border-t border-slate-100 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed text-base">{answer}</p>
      </div>
    </div>
  );
};

// --- MAIN APPLICATION ---
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor Scroll for Navbar styling & Reveal trigger animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial trigger
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" dir="rtl">
      <style>{customStyles}</style>

      {/* --- Premium Navigation Bar --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <JobConnectLogo className="w-11 h-11" />
            <span className="text-2.5xl font-extrabold tracking-tight text-slate-900 font-cairo">
              JobConnect
            </span>
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex items-center gap-10 font-bold text-slate-600">
            <a href="#problem" className="hover:text-sky-600 transition-colors">المشكلة</a>
            <a href="#solution" className="hover:text-sky-600 transition-colors">كيف نعمل</a>
            <a href="#users" className="hover:text-sky-600 transition-colors">الفئات المستهدفة</a>
            <a href="#features" className="hover:text-sky-600 transition-colors">مميزات التطبيق</a>
            <a href="#faq" className="hover:text-sky-600 transition-colors">الأسئلة الشائعة</a>
          </div>

          {/* Download Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#download" className="text-slate-600 font-bold hover:text-sky-600 transition-colors">تسجيل الدخول</a>
            <Button variant="primary" className="px-5 py-2.5 rounded-xl text-sm">تحميل التطبيق</Button>
          </div>

          {/* Hamburger menu for mobile */}
          <button className="md:hidden text-slate-800 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-6 flex flex-col gap-4 animate-fadeIn">
            <a href="#problem" className="font-bold text-slate-700 py-2 border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>المشكلة</a>
            <a href="#solution" className="font-bold text-slate-700 py-2 border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>كيف نعمل</a>
            <a href="#users" className="font-bold text-slate-700 py-2 border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>الفئات المستهدفة</a>
            <a href="#features" className="font-bold text-slate-700 py-2 border-b border-slate-50" onClick={() => setMobileMenuOpen(false)}>المميزات</a>
            <Button variant="primary" className="w-full mt-4 justify-center" onClick={() => setMobileMenuOpen(false)}>تحميل التطبيق مجاناً</Button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden">
        {/* Soft Background Blobs matching uploaded graphic style */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-sky-100/40 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full bg-emerald-100/30 blur-3xl opacity-50"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Hero Left (Text content) */}
            <div className="flex-1 text-center lg:text-right reveal active">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-700 rounded-full font-bold text-sm mb-6 border border-sky-100">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
                أول منصة للعمل المرن في الجزائر
              </div>
              <h1 className="text-4xl md:text-5.5xl lg:text-6.5xl font-black text-slate-900 leading-tight mb-6">
                فرص العمل المرنة <br />
                <span className="text-sky-600">في مكان واحد</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                منصة تجمع الطلبة والمتقاعدين وأصحاب العمل في بيئة احترافية وسهلة الاستخدام لتبادل الخبرات وتأدية المهام بمرونة.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary" icon={<Download className="w-5 h-5" />}>
                  تحميل التطبيق
                </Button>
                <Button variant="secondary" icon={<ArrowLeft className="w-5 h-5" />}>
                  إنشاء حساب مجاني
                </Button>
              </div>

              {/* Verified Users count */}
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3 -space-x-reverse">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+14}`} alt="User profile" className="w-11 h-11 rounded-full border-2 border-white shadow-sm" />
                  ))}
                </div>
                <div className="text-right">
                  <div className="flex items-center text-yellow-500">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    <span className="mr-2 font-bold text-slate-800 text-sm">4.9/5</span>
                  </div>
                  <span className="text-xs text-slate-500 font-semibold">بناءً على تقييم أكثر من +15,000 مستخدم</span>
                </div>
              </div>
            </div>

            {/* Hero Right: Premium Mobile Mockups displaying uploaded designs */}
            <div className="flex-1 relative w-full flex justify-center items-center h-[580px] lg:h-[640px]">
              {/* Back Phone: Active Menu Drawer matching uploaded image (1000093388) */}
              <div className="app-phone-mockup absolute left-2 lg:left-6 bottom-4 transform -rotate-6 scale-90 opacity-40 z-0">
                <div className="h-full bg-slate-900 text-white flex flex-col justify-between pt-8 pb-4">
                  {/* Sidebar Header */}
                  <div className="px-5 py-4 border-b border-slate-800 flex justify-between items-center">
                    <span className="font-black text-xl">JobConnect</span>
                    <div className="w-7 h-7 bg-slate-800 rounded-lg flex items-center justify-center">
                      <X className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                  {/* Sidebar Links */}
                  <div className="flex-1 px-3 py-6 space-y-2">
                    <div className="flex items-center gap-3 bg-sky-600 text-white p-3.5 rounded-2xl font-bold">
                      <Briefcase className="w-5 h-5" /> الرئيسية
                    </div>
                    {["الوظائف", "الرسائل", "الخدمات", "الوظائف المكتملة", "الملف الشخصي", "الإعدادات"].map((link, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-300 p-3.5 hover:bg-slate-800/50 rounded-2xl font-medium">
                        <div className="w-5 h-5 rounded bg-slate-800 flex-shrink-0" /> {link}
                      </div>
                    ))}
                  </div>
                  {/* Language Drawer switch */}
                  <div className="px-5 pt-4 border-t border-slate-800">
                    <div className="bg-slate-800 p-3 rounded-xl flex justify-between items-center text-sm">
                      <span>اللغة</span>
                      <span className="font-bold text-sky-400">Français</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Phone: Real Job Post Details Page matching uploaded image (1000093380) */}
              <div className="app-phone-mockup relative z-10 shadow-2xl scale-105 border-slate-900">
                {/* Simulated Phone Bar */}
                <div className="h-10 bg-white"></div>
                
                {/* Simulated App Header */}
                <div className="bg-white border-b border-slate-100 px-4 py-3 flex justify-between items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <Menu className="w-4 h-4 text-slate-700" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">التفاصيل</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <Bell className="w-4 h-4 text-slate-700" />
                  </div>
                </div>

                {/* Simulated App Body - EXACT replica of image 1000093380 */}
                <div className="p-4 bg-slate-50 h-[calc(100%-110px)] overflow-y-auto space-y-4 text-right">
                  {/* Duration Filter Pills */}
                  <div>
                    <span className="text-xs text-slate-500 block mb-2 font-bold">⏱️ المدة</span>
                    <div className="flex gap-2">
                      <span className="px-4 py-1.5 bg-sky-600 text-white rounded-xl text-xs font-bold flex-1 text-center">الكل</span>
                      <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold flex-1 text-center">قصير</span>
                      <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-bold flex-1 text-center">طويل</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 font-bold">تم العثور على 5 وظيفة</p>

                  {/* Main Teaching Card replicate */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative space-y-3">
                    <div className="absolute top-4 left-4 text-rose-500 bg-rose-50 p-1.5 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    
                    <h3 className="font-black text-slate-800 text-lg">Teaching</h3>
                    
                    {/* Specifications */}
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

                    {/* Exact Applied Button Replica */}
                    <button className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl text-sm flex items-center justify-center gap-2 border border-slate-200">
                      <Check className="w-4 h-4 text-emerald-600 stroke-[3px]" /> تم التقديم
                    </button>
                  </div>
                  
                  {/* Secondary card snippet */}
                  <div className="bg-white p-4 rounded-xl border border-slate-100 opacity-60">
                    <h4 className="font-bold text-slate-800 text-sm">تدريس</h4>
                  </div>
                </div>
              </div>

              {/* Side Floating Widget: diaa statistics matching image (1000093384) */}
              <div className="absolute right-0 bottom-12 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 w-48 hidden sm:block z-20">
                <div className="flex items-center justify-between mb-3 border-b border-slate-50 pb-2">
                  <span className="text-xs font-bold text-slate-400">حالة الطلبات</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
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

      {/* --- PROBLEM SECTION --- */}
      <section id="problem" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading 
            title="المشكلة" 
            subtitle="التحديات التي نواجهها في سوق العمل التقليدي وكيف تؤثر على مختلف فئات المجتمع"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="reveal bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-6 font-bold">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">صعوبة العثور على عمل جزئي للطلبة</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                يواجه الطلبة مشقة هائلة في إيجاد وظائف مرنة تتناسب مع جداول محاضراتهم المتغيرة وتسمح لهم بتوفير مصاريف الدراسة.
              </p>
            </div>

            {/* Card 2 */}
            <div className="reveal bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 font-bold">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">ضياع خبرات المتقاعدين بعد التقاعد</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                العديد من الخبراء والمتقاعدين يرغبون في تقديم الاستشارة والعمل لبعض الوقت لنقل خبراتهم بدلاً من الانعزال التام عن مجتمعاتهم.
              </p>
            </div>

            {/* Card 3 */}
            <div className="reveal bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 font-bold">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">صعوبة إيجاد كفاءات مرنة لأصحاب العمل</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                تجد الشركات والمؤسسات صعوبة بالغة في العثور على موظفين مستقلين موثوقين لتلبية متطلبات المشاريع السريعة والموسمية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTION SECTION (WORKFLOW) --- */}
      <section id="solution" className="py-24 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionHeading 
            title="كيف يحل JobConnect هذه المشكلة؟" 
            subtitle="خطوات ميسرة وبسيطة تم تصميمها بعناية لتوفر لكم تجربة انتقال مهني غاية في السلاسة"
            isDark={true}
          />

          <div className="max-w-5xl mx-auto mt-16 relative">
            {/* Timeline connection connector on desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 rounded-full z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { num: "1", title: "إنشاء حساب", desc: "سجل حسابك بسهولة برقم الهاتف أو البريد الإلكتروني." },
                { num: "2", title: "استكمال الملف الشخصي", desc: "أضف خبراتك الحقيقية وتخصصك بوضوح." },
                { num: "3", title: "نشر أو البحث عن الوظائف", desc: "تصفح مئات الوظائف المعروضة أو انشر احتياجك." },
                { num: "4", title: "التقديم أو التوظيف", desc: "قدم بنقرة زر واحدة أو وظف كفاءتك المفضلة." },
                { num: "5", title: "متابعة الطلبات", desc: "تتبع حالة قبولك من خلال نظام الإشعارات المتكامل." }
              ].map((step, idx) => (
                <div key={idx} className="reveal bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl text-center flex flex-col items-center group hover:border-sky-500 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-sky-600 text-white font-black text-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-sky-900/30">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- USER TYPES SECTION (Students, Retirees, Employers) --- */}
      <section id="users" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading 
            title="مُصمم ليناسب الجميع" 
            subtitle="ثلاث فئات متناغمة تلتقي في بيئة واحدة لتحقيق أهدافها المهنية بكفاءة"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Students Card */}
            <div className="reveal bg-white rounded-3xl p-8 border border-slate-100 shadow-md flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 font-bold">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-3">الطلبة</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  اعثر على فرص عمل مرنة ومتوافقة مع جدولك الدراسي. ابنِ خبرتك المهنية الحقيقية واحصل على دخل إضافي يساعدك في تمويل دراستك الجامعية دون أي تعارض.
                </p>
              </div>
              <div className="border-t border-slate-50 pt-4 text-sky-600 font-bold flex items-center gap-2 cursor-pointer group-hover:gap-3 transition-all">
                <span>تصفح وظائف الطلبة</span> <ArrowLeft className="w-4 h-4" />
              </div>
            </div>

            {/* Retirees Card - Featuring mohammed design from uploaded 1000093382 */}
            <div className="reveal bg-sky-600 text-white rounded-3xl p-8 shadow-xl shadow-sky-600/20 flex flex-col justify-between relative overflow-hidden transform lg:-translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>
              <div>
                <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-3">المتقاعدون</h3>
                <p className="text-sky-50 leading-relaxed mb-6">
                  استثمر خبرتك وعمرك المهني الطويل في تقديم خدمات استشارية وتوجيهية وتدريبية مرنة. تواصل مع الشركات التي تقدر قيمتك العلمية والمعرفية لتبقى فاعلاً ومؤثراً.
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 text-white font-bold flex items-center gap-2 cursor-pointer">
                <span>شارك خبرتك الآن</span> <ArrowLeft className="w-4 h-4" />
              </div>
            </div>

            {/* Employers Card */}
            <div className="reveal bg-white rounded-3xl p-8 border border-slate-100 shadow-md flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
              <div>
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 font-bold">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-3">أصحاب العمل</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  اعثر على المواهب المناسبة بسرعة وكفاءة فائقة. تواصل مع مئات الطلبة النشطين أو الخبراء المتقاعدين لتلبية احتياجات أعمالك المؤقتة أو المستمرة دون التزامات معقدة.
                </p>
              </div>
              <div className="border-t border-slate-50 pt-4 text-emerald-600 font-bold flex items-center gap-2 cursor-pointer group-hover:gap-3 transition-all">
                <span>أعلن عن وظيفة شاغرة</span> <ArrowLeft className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading 
            title="المميزات الاحترافية داخل التطبيق" 
            subtitle="لقد قمنا بتصميم واجهات JobConnect لتمنحك كافة الأدوات الضرورية في بيئة مريحة وبلغة عربية سليمة."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "وظائف بدوام جزئي", desc: "خيارات تصفية ذكية حسب ساعات العمل المفضلة وطبيعة المهمة." },
              { title: "نظام تقديم مباشر", desc: "إمكانية التقديم بنقرة واحدة مع توفير سيرة ذاتية آلية داخل التطبيق." },
              { title: "تتبع حالة الطلبات", desc: "معرفة فورية في حال كان طلبك مقبولاً، معلقاً، أو مرفوضاً بكل شفافية." },
              { title: "إشعارات فورية", desc: "تنبيهات لحظية عند وصول رسائل جديدة أو تحديث حالة تقديمك المهني." },
              { title: "ملفات شخصية احترافية", desc: "ملف تعريفي مخصص يبرز تخصصك الأكاديمي، سنوات خبرتك، وتقييماتك السابقة." },
              { title: "لوحة تحكم متكاملة", desc: "شاشات إحصاءات متكاملة تعرض عدد الطلبات الحالية ونسبة قبولك وتاريخ التقديم." },
              { title: "واجهة عربية حديثة", desc: "تجربة عربية أصيلة تماماً خالية من الترجمات الحرفية المعقدة لتسهيل الاستخدام." },
              { title: "دعم الجوال بالكامل", desc: "تطبيق سريع الخفة ومتوافق مع جميع الهواتف الذكية القديمة والجديدة بمرونة." }
            ].map((feature, idx) => (
              <div key={idx} className="reveal bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APP SCREENSHOTS SECTION (Carousel/Grid showcase) --- */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center mb-16">
          <SectionHeading 
            title="نظرة واقعية من داخل التطبيق" 
            subtitle="لقطات شاشة مستوحاة بالكامل من تصميمات تطبيقنا الفعلي لتأكيد الجودة والشفافية." 
          />
        </div>

        {/* Horizontal flex wrap / scroll containing actual simulated layouts */}
        <div className="flex gap-8 px-6 overflow-x-auto pb-12 snap-x justify-start lg:justify-center">
          
          {/* Screen 1: Profile mohammed (1000093382) */}
          <div className="app-phone-mockup shrink-0 snap-center bg-white">
            <div className="h-full flex flex-col">
              <div className="h-8 bg-slate-100"></div>
              <div className="p-4 flex-1 overflow-y-auto space-y-4 text-right text-xs">
                {/* Profile Card */}
                <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm space-y-3">
                  <div className="flex items-center gap-3 justify-start">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">M</div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800">mohammed</h4>
                      <p className="text-slate-400">60-65 سنة</p>
                    </div>
                  </div>
                  
                  {/* Rating Replica */}
                  <div className="bg-amber-50/50 p-3 rounded-xl flex justify-between items-center border border-amber-100/50">
                    <span className="font-bold text-slate-700">تقييمك</span>
                    <span className="font-bold text-amber-600 flex items-center gap-1">⭐ 0.0 (0 تقييم)</span>
                  </div>

                  {/* Expertise */}
                  <div className="space-y-2">
                    <span className="font-bold text-slate-700 block">مجالات خبرتك</span>
                    <span className="inline-block px-3 py-1 bg-amber-100/60 text-amber-800 rounded-lg font-semibold">التدريس (سابق)</span>
                  </div>

                  {/* Preferance */}
                  <div className="space-y-2">
                    <span className="font-bold text-slate-700 block">تفضيلات العمل</span>
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-lg font-semibold">استشارات بدوام جزئي</span>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-xl p-3 flex justify-between items-center">
                  <span className="font-bold">معلومات الاتصال</span>
                  <button className="text-sky-600 font-bold">تعديل</button>
                </div>
              </div>
            </div>
          </div>

          {/* Screen 2: Applications Tracker diaa (1000093384) */}
          <div className="app-phone-mockup shrink-0 snap-center bg-white">
            <div className="h-full flex flex-col">
              <div className="h-8 bg-slate-100"></div>
              <div className="p-4 flex-1 overflow-y-auto space-y-4 text-right text-xs">
                {/* Status Bar */}
                <div className="bg-sky-600 text-white p-3 rounded-xl font-bold flex justify-between">
                  <span>نجح diaa!</span>
                </div>

                {/* Grid stats */}
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

                {/* Submissions List */}
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
                    <span className="bg-emerald-50 text-emerald-500 px-2 py-0.5 rounded text-[10px]">مقبول</span>
                    <div className="text-left">
                      <p className="font-bold">Application #V5Yk8g25</p>
                      <span className="text-slate-400 text-[10px]">1/27/2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screen 3: diaa profile verification (1000093386) */}
          <div className="app-phone-mockup shrink-0 snap-center bg-white">
            <div className="h-full flex flex-col">
              <div className="h-8 bg-slate-100"></div>
              <div className="p-4 flex-1 overflow-y-auto space-y-4 text-right text-xs">
                {/* Profile Fields */}
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
                    <p className="text-slate-600 leading-relaxed font-semibold">طالب جامعي تخصص تسويق ماستر 1 مقيم في إقامة جامعية بولاية تلمسان لدي خبرة في البيع.</p>
                  </div>
                </div>

                {/* Verification card */}
                <div className="bg-white border border-slate-100 rounded-2xl p-4 space-y-3">
                  <h4 className="font-black text-slate-800 text-sm">التحقق من الطالب</h4>
                  <p className="text-slate-500 leading-relaxed text-[11px]">التحقق اختياري. الطلاب المتحققون يحصلون على ثقة أعلى وظهور أفضل.</p>
                  <button className="w-full py-2 bg-sky-600 text-white font-bold rounded-xl text-xs">تحقق من حالة طالبك</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <SectionHeading 
            title="آراء وقصص نجاح مستخدمينا" 
            subtitle="شاهد كيف ساعد تطبيق JobConnect أصحاب العمل على تسريع إنتاجيتهم والطلبة على بدء مسيراتهم." 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { name: "أيوب س.", role: "طالب ماستر (تلمسان)", comment: "التطبيق مذهل ومطابق تماماً لاحتياجنا كطلاب. تمكنت من تدريس مجموعة أطفال لعامين بالتوافق مع وقت فراغي ودون التأثير على أدائي الجامعي." },
              { name: "عبد القادر م.", role: "أستاذ متقاعد (وهران)", comment: "شعرت بفراغ كبير بعد التقاعد، والآن من خلال المنصة أقدم استشارات في التسيير والموارد البشرية لشركات ناشئة بمرونة تامة وأنا جالس في منزلي." },
              { name: "شركة ريادة ديجيتال", role: "أصحاب عمل (الجزائر)", comment: "كنا نبحث لأسابيع عن منسق مشاريع مؤقت، ومن خلال التطبيق وجدنا طالباً متميزاً ومتحمساً قام بالعمل على أكمل وجه وبتكلفة جد منطقية." }
            ].map((test, idx) => (
              <div key={idx} className="reveal bg-slate-50 p-8 rounded-3xl border border-slate-100 text-right flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-500 mb-4 justify-start">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                    "{test.comment}"
                  </p>
                </div>
                <div className="border-t border-slate-200/50 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 font-bold flex items-center justify-center text-sm">
                    {test.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{test.name}</h4>
                    <span className="text-xs text-slate-400">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <SectionHeading 
            title="الأسئلة الشائعة" 
            subtitle="كل ما ترغب في معرفته حول آليات التطبيق وشروط الانضمام لأسرة JobConnect" 
          />

          <div className="mt-12 reveal">
            <FaqItem 
              question="كيف يمكنني التسجيل؟" 
              answer="يمكنك التسجيل بخطوات غاية في السهولة عبر تحميل التطبيق من متجر Google Play، ثم النقر على زر 'إنشاء حساب جديد' واختيار ما إذا كنت تبحث عن عمل (كطالب أو متقاعد) أو ترغب في التوظيف (كصاحب عمل) مع ملء حقول الاسم والهاتف." 
            />
            <FaqItem 
              question="هل التطبيق مجاني؟" 
              answer="نعم، تطبيق JobConnect مجاني تماماً بالكامل لجميع الطلاب الباحثين عن فرص عمل ولجميع المتقاعدين الراغبين في استغلال خبراتهم. لا نتقاضى أي اشتراكات من الأفراد." 
            />
            <FaqItem 
              question="كيف أقدم على وظيفة؟" 
              answer="بمجرد إكمال ملفك التعريفي وصورة هويتك أو بطاقتك الطلابية (لزيادة نسبة قبولك)، يمكنك تصفح الوظائف المعروضة في مدينتك والنقر على زر 'تقديم'. سيتم تنبيه صاحب العمل مباشرة لمراجعة سيرتك والرد عليك." 
            />
            <FaqItem 
              question="كيف أنشر وظيفة؟" 
              answer="إذا كنت صاحب عمل أو شركة، يمكنك الانتقال للقائمة الجانبية واختيار 'إعلان وظيفة جديدة' وتحديد الميزانية المتوقعة والمؤهلات المطلوبة وساعات العمل ليقوم النظام آلياً بترشيح أنسب الطلاب والمتقاعدين في منطقتك." 
            />
          </div>
        </div>
      </section>

      {/* --- DOWNLOAD SECTION (STRONG CTA) --- */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6 reveal">ابدأ رحلتك المهنية اليوم</h2>
          <p className="text-lg md:text-xl text-sky-100 mb-10 max-w-2xl mx-auto reveal leading-relaxed">
            انضم للآلاف من أبناء المجتمع وباشر في توظيف كفاءات مرنة موثوقة أو ابدأ في جني دخل يتوافق تماماً مع ظروفك المعيشية.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 reveal">
            {/* Google Play Button */}
            <a href="#" className="flex items-center gap-3 bg-slate-950 text-white px-7 py-3.5 rounded-2xl font-bold hover:bg-black transition-colors w-full sm:w-auto justify-center shadow-lg">
              <Play className="w-6 h-6 fill-current text-white" />
              <div className="text-right flex flex-col leading-tight">
                <span className="text-[10px] text-slate-400 font-medium">حمله الآن من</span>
                <span className="text-base font-bold font-mono">Google Play</span>
              </div>
            </a>

            {/* APK Download Button */}
            <a href="#" className="flex items-center gap-3 bg-white text-sky-950 px-7 py-3.5 rounded-2xl font-bold hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center shadow-lg">
              <Download className="w-6 h-6 text-sky-600" />
              <div className="text-right flex flex-col leading-tight">
                <span className="text-[10px] text-slate-500 font-medium">تحميل مباشر</span>
                <span className="text-base font-bold font-mono">APK Download</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* --- PREMIUM FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <JobConnectLogo className="w-12 h-12" />
                <span className="text-2xl font-black text-white">JobConnect</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                المنصة الجزائرية الرائدة والأولى المخصصة لربط المتقاعدين والطلاب الجامعيين بأصحاب العمل لتوفير وظائف مرنة تساهم في نمو الاقتصاد ونقل الخبرات.
              </p>
              
              {/* Contact Email Highlighted */}
              <div className="flex items-center gap-2 text-sm text-sky-400 font-bold pt-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:JobConnect@hotmail.com" className="hover:underline">JobConnect@hotmail.com</a>
              </div>
            </div>

            {/* Links column 1 */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base">حول المنصة</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#problem" className="hover:text-white transition-colors">المشكلة والحل</a></li>
                <li><a href="#users" className="hover:text-white transition-colors">فئات المستخدمين</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">مزايا التطبيق</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              </ul>
            </div>

            {/* Links column 2 */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base">القوانين والخصوصية</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية والأمان</a></li>
                <li><a href="#" className="hover:text-white transition-colors">شروط وأحكام الاستخدام</a></li>
                <li><a href="#" className="hover:text-white transition-colors">إرشادات التحقق للطلاب</a></li>
                <li><a href="mailto:JobConnect@hotmail.com" className="hover:text-white transition-colors">الدعم الفني</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom segment */}
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-slate-500 font-medium">© {new Date().getFullYear()} JobConnect. جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> الجزائر</span>
              <span>•</span>
              <a href="mailto:JobConnect@hotmail.com" className="hover:text-white">تواصل معنا المباشر</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}