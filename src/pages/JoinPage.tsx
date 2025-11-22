import { useState } from 'react';
import { CheckCircle, Briefcase, DollarSign, Calendar, Shield, TrendingUp, Users, Star } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { SubcontractorApplication } from '../types';

export default function JoinPage() {
  const [formData, setFormData] = useState<SubcontractorApplication>({
    full_name: '',
    email: '',
    phone: '',
    service_categories: [],
    years_experience: 0,
    has_insurance: false,
    has_license: false,
    availability: '',
    additional_info: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const serviceCategories = [
    'Cleaning Services',
    'Junk Removal',
    'Moving Services',
    'Handyman Services',
  ];

  const availabilityOptions = [
    'Full-time',
    'Part-time',
    'Weekends only',
    'Flexible',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceCategoryChange = (category: string) => {
    setFormData((prev) => {
      const isSelected = prev.service_categories.includes(category);
      const newCategories = isSelected
        ? prev.service_categories.filter((c) => c !== category)
        : [...prev.service_categories, category];
      return { ...prev, service_categories: newCategories };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.service_categories.length === 0) {
      setError('Please select at least one service category.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const { error: submitError } = await supabase
        .from('subcontractor_applications')
        .insert([formData]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        service_categories: [],
        years_experience: 0,
        has_insurance: false,
        has_license: false,
        availability: '',
        additional_info: '',
      });
    } catch (err) {
      setError('Failed to submit your application. Please try again.');
      console.error('Error submitting application:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Briefcase,
      title: 'Steady Work Flow',
      description: 'Consistent job opportunities without the hassle of finding clients',
    },
    {
      icon: DollarSign,
      title: 'Fair Pay Guarantee',
      description: 'Competitive rates and timely payment for every job',
    },
    {
      icon: TrendingUp,
      title: 'Fast Job Matching',
      description: 'Quick connections to jobs that match your skills',
    },
    {
      icon: Calendar,
      title: 'Simple Onboarding',
      description: 'Easy application process, start working quickly',
    },
    {
      icon: Shield,
      title: 'We Handle Marketing & Scheduling',
      description: 'Focus on the work, we bring you the customers',
    },
    {
      icon: Users,
      title: 'Perfect for Blue-Collar Pros',
      description: 'Designed for cleaners, movers, junk removal, and handymen',
    },
  ];

  const subcontractorTestimonials = [
    {
      name: 'Jamal K.',
      role: 'Cleaner',
      text: 'I get consistent work and the pay is fair. Best platform I\'ve used.',
      rating: 5,
    },
    {
      name: 'Mateo S.',
      role: 'Moving Helper',
      text: 'They bring the jobs, I just show up and work. I love it.',
      rating: 5,
    },
    {
      name: 'Luis H.',
      role: 'Handyman',
      text: 'FixNaro helps me stay busy without dealing with marketing or chasing clients.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Join Our Network of Pros</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Grow your business with steady work, fair pay, and reliable support in the Twin Cities area.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Subcontractor Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why hundreds of professionals choose to work with FixNaro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
              What Our Subcontractors Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from professionals working with FixNaro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {subcontractorTestimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSuccess ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-600">
                Thank you for your interest in joining FixNaro. Our team will review your application and contact you within 3-5 business days.
              </p>
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Apply Today
                </h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below to join our network of trusted subcontractors
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="years_experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <input
                      type="number"
                      id="years_experience"
                      name="years_experience"
                      value={formData.years_experience || ''}
                      onChange={handleChange}
                      required
                      min="0"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Service Categories * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceCategories.map((category) => (
                      <label
                        key={category}
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          formData.service_categories.includes(category)
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.service_categories.includes(category)}
                          onChange={() => handleServiceCategoryChange(category)}
                          className="w-5 h-5 text-blue-600"
                        />
                        <span className="font-medium text-gray-900">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    <option value="">Select your availability</option>
                    {availabilityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <label className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-300 cursor-pointer hover:border-gray-400">
                    <input
                      type="checkbox"
                      name="has_insurance"
                      checked={formData.has_insurance}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span className="font-medium text-gray-900">I have insurance</span>
                  </label>

                  <label className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-300 cursor-pointer hover:border-gray-400">
                    <input
                      type="checkbox"
                      name="has_license"
                      checked={formData.has_license}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span className="font-medium text-gray-900">I have required licenses</span>
                  </label>
                </div>

                <div className="mb-6">
                  <label htmlFor="additional_info" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additional_info"
                    name="additional_info"
                    value={formData.additional_info}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                    placeholder="Tell us more about your experience, certifications, or anything else you'd like us to know..."
                  />
                </div>

                {error && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
