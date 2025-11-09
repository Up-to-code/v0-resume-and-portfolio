export default function Skills() {
  const skillCategories = [
    { label: "Frontend", skills: "Next.js, React.js, TypeScript, Tailwind CSS, React Native" },
    { label: "Backend", skills: "Node.js, Express.js, RESTful APIs, Prisma" },
    { label: "Databases", skills: "PostgreSQL, MongoDB" },
    { label: "State Management", skills: "Zustand, Context API, TanStack Query, React Hook Form, Zod" },
    { label: "Dev Tools & Deployment", skills: "Vercel, Render, DigitalOcean, Notify, Sentry, PostHog" },
    {
      label: "Other",
      skills: "SSR, SSG, SEO Optimization, Micro-Functional Architecture, Clean Code, SOLID Principles",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div dir="rtl">
        <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-border">المهارات التقنية</h2>

        <div className="grid gap-4">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-4 border border-border">
              <h3 className="text-base font-semibold text-primary mb-2">{category.label}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{category.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
