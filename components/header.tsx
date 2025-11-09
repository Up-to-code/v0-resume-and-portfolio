export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between" dir="rtl">
        <h1 className="text-2xl font-bold">أحمد منصور</h1>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="hover:text-primary transition">
            عني
          </a>
          <a href="#experience" className="hover:text-primary transition">
            الخبرة
          </a>
          <a href="#projects" className="hover:text-primary transition">
            المشاريع
          </a>
          <a href="#contact" className="hover:text-primary transition">
            اتصل
          </a>
        </nav>
      </div>
    </header>
  )
}
