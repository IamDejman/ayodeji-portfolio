const experiences = [
  {
    company: 'Salesbook (Tellerpoint)',
    location: 'Remote',
    role: 'Product Manager',
    period: 'May 2024 – Present',
    description:
      "Salesbook equips your retail business with a fully integrated mobile point-of-sale device to streamline day-to-day front-office operations.",
    bullets: [
      "Led product strategy and product development lifecycle of the Collection's Mobile and Web App.",
      "Led product strategy, roadmap and development lifecycle of the Tellerpoint Mini.",
      "Developed comprehensive documentation that improved cross-team collaboration.",
      "Conducted extensive user interviews and data analysis that improved product features based on actionable feedback.",
      "Implemented agile practice to improve the team's productivity through weekly syncs and scrum rituals.",
    ],
  },
  {
    company: 'Devlabs Africa Limited',
    location: 'Remote',
    role: 'Product Manager',
    period: 'May 2024 – Present',
    description:
      "Led product development and strategy for three client companies through DevLabs Africa's product consultancy services:",
    bullets: [
      "Carbin Africa (Automotive Marketplace Platform): Drove product strategy and roadmap for Carbin Africa, achieving #1 on Tech Cabal's '25 Startups to Watch in 2025' by optimising dealer inventory management and increasing platform adoption.",
      "GPS (Delivery Service Platform): Delivered GPS's integrated delivery ecosystem through real-time tracking and automated dispatch features.",
      "Dotalinks (Restaurant Management Software): Led the development of an order and delivery management platform. Conducted stakeholder research to identify operational requirements and collaborated with the engineering team to deliver core features.",
    ],
  },
  {
    company: 'Switch Recycling',
    location: 'Lagos, Nigeria',
    role: 'Product Manager',
    period: 'Sep 2022 – May 2024',
    description:
      "Switch Recycling is a waste management company that operates in Nigeria. They collect waste with their mobile and web app, enabling financial technology solutions including wallets and bills.",
    bullets: [
      "Boosted user engagement by 15% through UX enhancements to the Request feature of the Switch Recycling Mobile applications and directly contributed to an increase in waste collection efficiency.",
      "Implemented agile practice through weekly syncs and scrum rituals.",
      "Partnered with cross-functional teams to deliver a waste management app through analysed user data and market trends.",
      "Created and delivered training materials that improved the adoption rate and reduced customer support queries.",
    ],
  },
  {
    company: 'Treford',
    location: 'Lagos, Nigeria',
    role: 'Associate Product Manager',
    period: 'May 2022 – Jul 2022',
    description: '',
    bullets: [
      "Pitched and developed BetaCare, an electronic health record product, selected as the top solution for its scalability and viability in reducing administrative overhead for healthcare providers.",
      "Developed a comprehensive product strategy for BetaCare, including user personas, business models, prototypes, success metrics, marketing strategy, and product roadmap.",
    ],
  },
  {
    company: 'Marketing Bunnies',
    location: 'Remote',
    role: 'Associate Content Developer',
    period: 'Mar 2019 – Jun 2019',
    description:
      "Marketing Bunnies is a company in Lucknow, India, offering various digital marketing services to businesses.",
    bullets: [
      "Collaborated effectively with cross-functional teams to deliver content aligned with user needs.",
      "Managed and produced high-quality written content that increased user retention simultaneously, delivering 100% on time and within budget.",
    ],
  },
  {
    company: 'Rhics Technology',
    location: 'Lagos, Nigeria',
    role: 'Graduate Intern',
    period: 'Feb 2019 – Apr 2019',
    description:
      "Rhics Technology is an international digital agency specialising in mobile & web application development, design & branding, and general IT consultancy.",
    bullets: [
      "Executed digital marketing campaigns across social media, web design, and branding.",
      "Managed projects independently with a high client satisfaction rate.",
    ],
  },
]

const Experience = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {exp.location}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    {exp.period}
                  </p>
                </div>
                {exp.description && (
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {exp.description}
                  </p>
                )}
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 