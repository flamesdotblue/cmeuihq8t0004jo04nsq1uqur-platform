import { motion } from 'framer-motion'

export default function Greeting() {
  return (
    <section className="relative mx-auto mt-14 grid max-w-4xl gap-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl font-extrabold tracking-tight sm:text-5xl"
      >
        <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          Hello, World!
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="mx-auto max-w-2xl text-balance text-slate-600 dark:text-slate-300"
      >
        A tiny starter built with Vite, React, and Tailwind CSS. Clean structure, crisp UI, and a touch of motion.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className="mt-2 flex items-center justify-center gap-3"
      >
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95 active:opacity-90 dark:bg-white dark:text-slate-900"
        >
          Tailwind Docs
        </a>
        <a
          href="https://github.com/vitejs/vite"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 active:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
        >
          View Vite
        </a>
      </motion.div>
    </section>
  )
}
