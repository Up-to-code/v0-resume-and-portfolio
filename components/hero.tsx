export default function Hero() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16" dir="rtl">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">مطور Full-Stack</h2>
          <p className="text-base text-foreground/70 leading-relaxed mb-8">
            مرحباً! أنا أحمد منصور، مطور Full-Stack متخصص في بناء تطبيقات ويب حديثة وقابلة للتوسع. لدي خبرة في تطوير
            الواجهات الأمامية والخادم بكفاءة عالية.
          </p>
          <div className="flex gap-4">
            <a
              href="https://my-website-v9.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
            >
              عرض أعمالي
            </a>
            <a
              href="mailto:uptocodejs@gmail.com"
              className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition"
            >
              تواصل معي
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-background border border-border">
            <p className="text-xs text-foreground/60 mb-1">البريد الإلكتروني</p>
            <p className="text-base font-semibold">uptocodejs@gmail.com</p>
          </div>
          <div className="p-4 bg-background border border-border">
            <p className="text-xs text-foreground/60 mb-1">الهاتف</p>
            <p className="text-base font-semibold">+20 114 210 2700</p>
          </div>
          <div className="p-4 bg-background border border-border">
            <p className="text-xs text-foreground/60 mb-1">الموقع</p>
            <p className="text-base font-semibold">المنصورة، مصر</p>
          </div>
        </div>
      </div>
    </section>
  )
}
