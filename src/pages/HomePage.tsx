import { ArrowRight, Shield, Users, Clock, Star, Sparkles, Truck, Hammer, Trash2, Award, TrendingUp, CheckCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Sparkles,
      title: 'Cleaning Services',
      description: 'Professional cleaning for homes and offices',
      color: 'bg-blue-100 text-blue-600',
      priceRange: '$120–$300+',
    },
    {
      icon: Trash2,
      title: 'Junk Removal',
      description: 'Fast and efficient junk removal services',
      color: 'bg-green-100 text-green-600',
      priceRange: '$120–$450',
    },
    {
      icon: Truck,
      title: 'Moving Services',
      description: 'Reliable moving help when you need it',
      color: 'bg-orange-100 text-orange-600',
      priceRange: '$50/hr per mover',
    },
    {
      icon: Hammer,
      title: 'Handyman Services',
      description: 'Expert repairs and maintenance work',
      color: 'bg-gray-100 text-gray-600',
      priceRange: '$75–$150/hr',
    },
  ];

  const brandPillars = [
    { icon: Shield, title: 'Reliability', description: 'Dependable professionals, every time' },
    { icon: Star, title: 'Fairness', description: 'Transparent pricing, no hidden fees' },
    { icon: TrendingUp, title: 'Opportunity', description: 'Creating jobs for skilled workers' },
    { icon: Users, title: 'Community First', description: 'Supporting local tradespeople' },
    { icon: Award, title: 'Professionalism', description: 'High standards, quality results' },
    { icon: Clock, title: 'Scalability', description: 'Growing with your needs' },
  ];

  const howItWorksSteps = [
    { number: '1', title: 'Request a Service', description: 'Tell us what you need done' },
    { number: '2', title: 'We Match You With a Vetted Pro', description: 'Quick matching with qualified experts' },
    { number: '3', title: 'Job Gets Done Quickly', description: 'Professional service, on time' },
    { number: '4', title: 'Pay Securely With No Hidden Fees', description: 'Transparent pricing you can trust' },
  ];

  const clientTestimonials = [
    {
      name: 'Sarah M.',
      location: 'Minneapolis',
      text: 'FixNaro sent me a cleaner the same day. Super easy process and amazing quality.',
      rating: 5,
    },
    {
      name: 'David R.',
      location: 'St. Paul',
      text: 'Their junk removal team cleaned my garage fast and professionally. Great experience.',
      rating: 5,
    },
    {
      name: 'Alicia T.',
      location: 'Bloomington',
      text: 'The handyman fixed everything perfectly on the first visit. Highly recommend.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Reliable Service. Fair Prices. Trusted Pros.
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Connecting Twin Cities communities with vetted, skilled subcontractors for cleaning, moving, junk removal, and handyman services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Book Your Service</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate('join')}
                  className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all border-2 border-blue-700"
                >
                  Join as Subcontractor
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.title}
                        className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow"
                      >
                        <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-gray-900 font-semibold text-sm">{service.title}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              FixNaro exists to connect communities with reliable, skilled subcontractors through a fast, transparent, and affordable service platform. Our mission is to make blue-collar work accessible, efficient, and fair — delivering dependable results for clients while creating consistent opportunities for hardworking tradespeople.
            </p>
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
              The values that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandPillars.slice(0, 4).map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all text-center">
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
                <div key={pillar.title} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all text-center">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How FixNaro Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting professional help is easy with our simple 4-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional solutions for all your home and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-blue-600 font-bold text-lg mb-4">{service.priceRange}</p>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-blue-600 font-medium hover:text-blue-700 flex items-center space-x-1"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center space-x-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from satisfied customers across the Twin Cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your service today or join our network of trusted professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Book Your Service</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate('join')}
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all border-2 border-blue-700"
            >
              Join as a Subcontractor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
