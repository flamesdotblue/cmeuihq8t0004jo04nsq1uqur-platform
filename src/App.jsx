import Header from './components/Header.jsx'
import Greeting from './components/Greeting.jsx'
import FeatureCards from './components/FeatureCards.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
      <Header />
      <main className="px-6 md:px-8 max-w-6xl mx-auto">
        <Greeting />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  )
}
