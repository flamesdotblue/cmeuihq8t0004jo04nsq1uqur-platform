import { Zap, Sparkles, Palette } from 'lucide-react'

const features = [
  {
    title: 'Fast Dev',
    description: 'Instant HMR and an optimized build pipeline powered by Vite.',
    Icon: Zap,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Modern Stack',
    description: 'React 18, ES Modules, and first-class TypeScript support available.',
    Icon: Sparkles,
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Beautiful UI',
    description: 'Tailwind CSS out of the box with dark mode and elegant defaults.',
    Icon: Palette,
    gradient: 'from-fuchsia-500 to-pink-500',
  },
]

export default function FeatureCards() {
  return (
    <section className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
      {features.map(({ title, description, Icon, gradient }) => (
        <article
          key={title}
          className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
        >
          <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${gradient} opacity-20 blur-2xl`} />
          <div className="relative flex items-start gap-4">
            <div className={`rounded-lg bg-gradient-to-br ${gradient} p-2.5 text-white shadow`}> 
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{description}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
