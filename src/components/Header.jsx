export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/50">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 shadow-sm" />
          <span className="font-semibold tracking-tight">Hello World</span>
        </div>
        <nav className="text-sm text-slate-600 dark:text-slate-300">
          <a
            href="https://vitejs.dev/"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Vite
          </a>
          <span className="mx-3 opacity-40">•</span>
          <a
            href="https://react.dev/"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            React
          </a>
        </nav>
      </div>
    </header>
  )
}
