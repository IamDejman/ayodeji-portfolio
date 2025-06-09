const Skills = () => {
  const skillCategories = [
    {
      category: 'Product Strategy',
      skills: [
        {
          name: 'Product Vision',
          level: 85,
          description:
            "Articulated the product vision for Dotalinks' order and delivery platform, aligning stakeholders and driving feature development",
        },
        {
          name: 'Product Planning',
          level: 90,
          description:
            'Planned and executed the product roadmap for Carbin Africa',
        },
        {
          name: 'Product Roadmapping',
          level: 90,
          description: 'Defined and communicated product roadmaps for multiple products',
        },
        {
          name: 'Product Roadmap',
          level: 85,
          description:
            'Prioritised initiatives in the product roadmap for Switch Recycling, leading to an increase in waste collection efficiency',
        },
        {
          name: 'Market Analysis',
          level: 85,
          description: 'Conducted market research and analysis for product positioning',
        },
        {
          name: 'Competitive Analysis',
          level: 85,
          description: 'Benchmarked competitors to inform product strategy',
        },
        {
          name: 'Business Strategy',
          level: 80,
          description: 'Developed business strategies to support product growth',
        },
      ],
    },
    {
      category: 'Product Development',
      skills: [
        {
          name: 'Prioritisation',
          level: 90,
          description:
            'Managed product backlog and sprint planning for Carbin Africa, delivering core marketplace features ahead of schedule',
        },
        {
          name: 'Agile Methodologies',
          level: 90,
          description: 'Implemented agile practices for efficient product delivery',
        },
        {
          name: 'User Research',
          level: 85,
          description: 'Conducted user interviews and usability testing',
        },
        {
          name: 'UX Design',
          level: 80,
          description: 'Designed user experiences for web and mobile apps',
        },
        {
          name: 'API Testing',
          level: 75,
          description: 'Tested and validated APIs for product integrations',
        },
      ],
    },
    {
      category: 'Data & Analytics',
      skills: [
        {
          name: 'Data Analysis',
          level: 85,
          description: 'Analyzed product data to inform decisions',
        },
        {
          name: 'Metrics & KPIs',
          level: 90,
          description: 'Defined and tracked key product metrics',
        },
        {
          name: 'A/B Testing',
          level: 80,
          description: 'Ran A/B tests to optimize features',
        },
        {
          name: 'User Analytics',
          level: 85,
          description: 'Monitored user analytics for engagement insights',
        },
      ],
    },
    {
      category: 'Leadership',
      skills: [
        {
          name: 'Team Management',
          level: 90,
          description: 'Managed and mentored cross-functional teams',
        },
        {
          name: 'Stakeholder Management',
          level: 85,
          description: 'Engaged stakeholders to align on product goals',
        },
        {
          name: 'Cross-functional Collaboration',
          level: 90,
          description: 'Collaborated across teams to deliver products',
        },
        {
          name: 'Project Management',
          level: 85,
          description: 'Oversaw project timelines and deliverables',
        },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span
                        className="text-gray-700 dark:text-gray-300 cursor-help"
                        title={skill.description}
                      >
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 