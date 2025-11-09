export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12" dir="rtl">
      <h2 className="text-3xl font-bold mb-4 text-center">دعنا نتواصل</h2>
      <p className="text-center text-foreground/70 mb-8 text-sm">
        هل لديك مشروع في ذهنك؟ دعنا نعمل معاً لتحقيقه. تواصل معي الآن!
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <a
          href="mailto:uptocodejs@gmail.com"
          className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition text-center font-semibold"
        >
          أرسل بريد إلكتروني
        </a>
        <a
          href="https://github.com/Up-to-code"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-border rounded-lg hover:bg-muted transition text-center font-semibold"
        >
          GitHub
        </a>
        <a
          href="tel:+201142102700"
          className="px-8 py-4 border border-border rounded-lg hover:bg-muted transition text-center font-semibold"
        >
          اتصل بي
        </a>
      </div>
    </section>
  )
}
