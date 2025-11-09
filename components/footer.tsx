export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8" dir="rtl">
        <div className="border-t border-foreground/20 pt-6">
          <p className="text-center text-sm">© 2025 أحمد منصور. جميع الحقوق محفوظة.</p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href="mailto:uptocodejs@gmail.com" className="text-slate-400 hover:text-white transition">
              البريد الإلكتروني
            </a>
            <a
              href="https://github.com/Up-to-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://my-website-v9.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              الموقع الشخصي
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
