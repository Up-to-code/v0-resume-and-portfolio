export default function Experience() {
  const experiencePoints = [
    "تطوير مواقع وتطبيقات ويب احترافية باستخدام Next.js وReact.js وTypeScript",
    "بناء أنظمة خلفية قوية باستخدام Express.js وNode.js مع تكامل RESTful APIs",
    "تصميم وتطوير واجهات مستخدم عصرية باستخدام Tailwind CSS وReact Native",
    "إدارة قواعد البيانات وتحسين الأداء والاستعلامات باستخدام PostgreSQL وMongoDB",
    "تطوير لوحات تحكم (Dashboards) لإدارة المحتوى وتحليل البيانات",
    "تحسين الأداء وتجربة المستخدم لتحقيق سرعة تحميل عالية وسلاسة في الاستخدام",
    "نشر المشاريع على خوادم سحابية مثل Vercel, Render, DigitalOcean",
    "التعاون مع فرق التصميم لتحويل نماذج Figma إلى تطبيقات عملية متكاملة",
  ]

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
      <div dir="rtl">
        <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-border">الخبرات العملية</h2>

        <div className="p-6 border border-border">
          <h3 className="text-xl font-bold mb-4">مطور Full-Stack – عمل حر</h3>

          <ul className="space-y-3">
            {experiencePoints.map((point, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="text-primary font-bold flex-shrink-0 mt-0.5">•</span>
                <span className="text-sm text-foreground/70 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
