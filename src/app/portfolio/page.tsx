import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">Showcase of selected product management projects and case studies will appear here soon.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
} 