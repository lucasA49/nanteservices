export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
          {updated && <p className="mt-3 text-sm text-slate-500">Dernière mise à jour : {updated}</p>}
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-10 px-4 text-slate-700 sm:px-6 lg:px-8">{children}</div>
      </section>
    </>
  )
}

export function LegalSection({ title, children }) {
  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed">{children}</div>
    </div>
  )
}
