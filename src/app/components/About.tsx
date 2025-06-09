const About = () => {
  const achievements = [
    {
      title: 'Led Carbin Africa to #1',
      description: 'Featured on Tech Cabal\'s "25 Startups to Watch in 2025"',
    },
    {
      title: '15% User Engagement Growth',
      description: 'Achieved at Switch Recycling through strategic product improvements',
    },
    {
      title: '20% Operational Efficiency',
      description: 'Improved operational efficiency through process optimization',
    },
    {
      title: 'Cross-functional Leadership',
      description: 'Successfully led multiple product teams across different domains',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Product Manager with 4 years of experience in driving product strategy, user engagement, and operational efficiency across startups and tech companies. Proven track record of delivering measurable results, including growth in user engagement and reduction in operational inefficiencies.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Skilled in product lifecycle management, UX research, agile methodologies, and cross-functional collaboration. Passionate about solving complex problems and building scalable, user-centric products that deliver exceptional business value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 