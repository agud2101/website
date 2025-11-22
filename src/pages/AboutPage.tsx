import { Target, Shield, Star, TrendingUp, Users, Award, Clock } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const brandPillars = [
    { icon: Shield, title: 'Reliability', description: 'Dependable professionals, every time' },
    { icon: Star, title: 'Fairness', description: 'Transparent pricing, no hidden fees' },
    { icon: TrendingUp, title: 'Opportunity', description: 'Creating jobs for skilled workers' },
    { icon: Users, title: 'Community First', description: 'Supporting local tradespeople' },
    { icon: Award, title: 'Professionalism', description: 'High standards, quality results' },
    { icon: Clock, title: 'Scalability', description: 'Growing with your needs' },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About FixNaro</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Connecting Twin Cities communities with reliable, skilled subcontractors
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                FixNaro exists to connect communities with reliable, skilled subcontractors through a fast, transparent, and affordable service platform. Our mission is to make blue-collar work accessible, efficient, and fair — delivering dependable results for clients while creating consistent opportunities for hardworking tradespeople.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Brand Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values that drive everything we do at FixNaro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {brandPillars.slice(0, 4).map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
            {brandPillars.slice(4).map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  FixNaro was created to solve a simple problem: connecting people in the Twin Cities with trustworthy, skilled subcontractors quickly and affordably.
                </p>
                <p>
                  We understand that blue-collar workers are the backbone of our communities. That's why we built a platform that treats them fairly, pays them well, and gives them steady work opportunities.
                </p>
                <p>
                  At the same time, we make it easy for homeowners and businesses to get quality work done without the hassle of searching, vetting, and coordinating multiple contractors.
                </p>
                <p>
                  FixNaro is more than a service platform — it's a community built on trust, fairness, and professionalism.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Why Choose FixNaro?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Vetted and verified professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Transparent, fair pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Fast response and reliable service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Supporting local workers and communities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Serving the Twin Cities
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Proudly providing reliable subcontractor services throughout Minneapolis, St. Paul, and surrounding areas. Local workers serving local communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
            >
              Book Your Service
            </button>
            <button
              onClick={() => onNavigate('join')}
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all border-2 border-blue-700"
            >
              Join as Subcontractor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
