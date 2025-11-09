export default function Projects() {
  const projects = [
    {
      title: "بود ذكي للعقارات (AI Property Bot)",
      description: "نظام ذكاء اصطناعي لاقتراح العقارات وفق معايير المستخدم",
      features: [
        "إنشاء ملفات PDF تلقائية تحتوي على تفاصيل العقارات وصور وروابط تواصل",
        "معالجة ذكية للبيانات والاستعلامات",
      ],
      tech: "Express.js, TypeScript, Node.js, MongoDB/PostgreSQL, PDFKit, Puppeteer",
    },
    {
      title: "الموقع العقاري المتكامل",
      description: "منصة عقارية متكاملة مع لوحة تحكم شاملة",
      features: ["تحسين تجربة المستخدم باستخدام SSR وSSG", "نظام بحث متقدم وتصفية العقارات", "لوحة تحكم إدارية شاملة"],
      tech: "Next.js, React.js, TypeScript, Tailwind CSS, PostgreSQL, JWT, NextAuth",
    },
    {
      title: "تطبيق إدارة المشاريع",
      description: "منصة متكاملة لإدارة المشاريع والفريق",
      features: ["نظام تتبع المهام والمشاريع في الوقت الفعلي", "إدارة الموارد والفريق"],
      tech: "Next.js, React.js, TypeScript, Tailwind CSS, PostgreSQL",
    },
    {
      title: "تطبيق التجارة الإلكترونية",
      description: "منصة تجارة إلكترونية متقدمة",
      features: ["نظام دفع متكامل", "إدارة المخزون والمنتجات"],
      tech: "Next.js, React.js, Express.js, MongoDB, Stripe",
    },
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <div dir="rtl">
        <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-border">المشاريع البارزة</h2>

        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="p-6 border border-border">
              <div className="mb-4">
                <span className="text-sm font-semibold text-primary">{idx + 1}</span>
                <h3 className="text-lg font-bold mb-1 mt-1">{project.title}</h3>
                <p className="text-sm text-foreground/70">{project.description}</p>
              </div>

              <ul className="space-y-2 mb-4">
                {project.features.map((feature, fidx) => (
                  <li key={fidx} className="text-sm text-foreground/70 flex gap-2">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-border">
                <p className="text-xs text-foreground/60">
                  <strong>التقنيات:</strong> {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
