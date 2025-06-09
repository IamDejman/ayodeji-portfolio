const Education = () => {
  const education = [
    {
      institution: 'Lagos State University',
      degree: 'Bachelor of Laws',
      period: '2015 - 2019',
      description: 'Focused on commercial and technology law',
    },
  ]

  const certifications = [
    {
      name: 'Product Academy Series 2023',
      institution: 'McKinsey Academy',
      period: 'Aug 2023',
    },
    {
      name: 'Product Led Growth Micro-Certification (PLGC)',
      institution: 'Product School',
      period: 'Aug 2022',
    },
    {
      name: 'Product Management Certification',
      institution: 'Treford',
      period: 'Jul 2022',
    },
    {
      name: 'Technical Product Management Certification',
      institution: 'LinkedIn Learning',
      period: 'Jul 2022',
    },
    {
      name: 'Product Management: Building a Product Roadmap Certification',
      institution: 'LinkedIn Learning',
      period: 'Jul 2022',
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {edu.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    {cert.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {cert.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education 