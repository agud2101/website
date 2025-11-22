import { Sparkles, Trash2, Truck, Hammer, Check, DollarSign } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Sparkles,
      title: 'Cleaning Services',
      description: 'Professional cleaning solutions for residential and commercial properties. Our vetted cleaning professionals deliver spotless results every time.',
      color: 'bg-blue-600',
      priceRange: '$120–$300+',
      priceNote: 'Varies by space size and cleaning type',
      features: [
        'Deep cleaning and sanitization',
        'Regular maintenance cleaning',
        'Move-in/move-out cleaning',
        'Office and commercial cleaning',
        'Eco-friendly cleaning options',
        'Flexible scheduling',
      ],
    },
    {
      icon: Trash2,
      title: 'Junk Removal',
      description: 'Fast and efficient junk removal services for homes, offices, and construction sites. We handle everything from single items to full cleanouts.',
      color: 'bg-green-600',
      priceRange: '$120–$450',
      priceNote: 'Based on volume and disposal requirements',
      features: [
        'Residential junk removal',
        'Commercial cleanouts',
        'Construction debris removal',
        'Furniture and appliance disposal',
        'Estate cleanouts',
        'Same-day service available',
      ],
    },
    {
      icon: Truck,
      title: 'Moving Services',
      description: 'Reliable and professional moving assistance for local and long-distance moves. Our trusted movers handle your belongings with care.',
      color: 'bg-orange-600',
      priceRange: '$50/hr per mover',
      priceNote: 'Minimum 2 movers recommended',
      features: [
        'Local and long-distance moves',
        'Packing and unpacking services',
        'Loading and unloading',
        'Furniture assembly and disassembly',
        'Specialty item handling',
        'Insured and licensed movers',
      ],
    },
    {
      icon: Hammer,
      title: 'Handyman Services',
      description: 'Expert handyman services for repairs, installations, and maintenance. From minor fixes to major projects, we have you covered.',
      color: 'bg-gray-600',
      priceRange: '$75–$150/hr',
      priceNote: 'Depends on job complexity and experience level',
      features: [
        'General repairs and maintenance',
        'Furniture assembly',
        'TV mounting and installation',
        'Drywall repair and painting',
        'Fixture installation',
        'Light carpentry work',
      ],
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional services delivered by vetted, experienced subcontractors in the Twin Cities area. Quality you can trust, every time.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                      <div className="flex items-center mb-2">
                        <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                        <h3 className="font-semibold text-gray-900">Pricing</h3>
                      </div>
                      <p className="text-2xl font-bold text-blue-600 mb-1">
                        {service.priceRange}
                      </p>
                      <p className="text-sm text-gray-600">{service.priceNote}</p>
                    </div>

                    <button
                      onClick={() => onNavigate('contact')}
                      className={`${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all`}
                    >
                      Get a Free Quote
                    </button>
                  </div>

                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        What's Included
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-3">
                            <div className={`${service.color} rounded-full p-1 mt-0.5`}>
                              <Check className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            All Services. One Platform.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Why work with multiple contractors when you can find all the services you need in one place? Get started with FixNaro today.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
          >
            Get a Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
