export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/70 py-10 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 md:px-8 text-sm text-slate-500 dark:text-slate-400 flex flex-col items-center gap-2">
        <p>Built with Vite • React • Tailwind</p>
        <p className="opacity-80">© {new Date().getFullYear()} Hello World App</p>
      </div>
    </footer>
  )
}
