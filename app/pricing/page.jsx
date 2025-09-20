import PricingCard from '@/components/pricing/PricingCard'
import { Check, X } from 'lucide-react'

export const metadata = {
  title: 'Pricing - AutoFlow Pro',
  description: 'Transparent pricing for n8n automation services. Choose the plan that fits your business needs.',
}

const pricingPlans = [
  {
    name: 'Starter',
    price: '$500',
    period: 'one-time',
    description: 'Perfect for small businesses getting started with automation',
    features: [
      'Up to 3 simple workflows',
      'Basic integrations (5 apps)',
      'Email support',
      '30-day warranty',
      'Documentation included'
    ],
    notIncluded: [
      'Complex logic workflows',
      'Priority support',
      'Custom integrations',
      'Ongoing maintenance'
    ],
    popular: false,
    buttonText: 'Get Started',
    buttonStyle: 'btn-secondary'
  },
  {
    name: 'Professional',
    price: '$1,500',
    period: 'one-time',
    description: 'Ideal for growing businesses with complex automation needs',
    features: [
      'Up to 10 complex workflows',
      'Advanced integrations (15 apps)',
      'Priority email & chat support',
      '90-day warranty',
      'Custom documentation',
      'Basic training session',
      'Performance optimization'
    ],
    notIncluded: [
      'Unlimited workflows',
      'Phone support',
      'Ongoing maintenance'
    ],
    popular: true,
    buttonText: 'Most Popular',
    buttonStyle: 'btn-primary'
  },
  {
    name: 'Enterprise',
    price: '$5,000',
    period: 'one-time',
    description: 'Comprehensive solution for large organizations',
    features: [
      'Unlimited workflows',
      'All integrations available',
      'Dedicated support manager',
      '1-year warranty',
      'Comprehensive documentation',
      'Team training program',
      'Performance monitoring',
      'Custom development',
      'Migration assistance'
    ],
    notIncluded: [],
    popular: false,
    buttonText: 'Contact Sales',
    buttonStyle: 'btn-secondary'
  }
]

const addOnServices = [
  {
    name: 'Ongoing Maintenance',
    price: '$200',
    period: '/month',
    description: 'Keep your automations running smoothly with regular maintenance and updates.'
  },
  {
    name: 'Priority Support',
    price: '$100',
    period: '/month',
    description: '24/7 priority support with guaranteed response times.'
  },
  {
    name: 'Additional Training',
    price: '$150',
    period: '/hour',
    description: 'Extended training sessions for your team members.'
  },
  {
    name: 'Custom Integration',
    price: '$300',
    period: 'per integration',
    description: 'Connect to specialized tools or custom APIs.'
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, <span className="text-blue-600">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the automation package that fits your business needs. 
            No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 gradient-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Add-on Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your automation package with additional services 
              tailored to your specific requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <div key={index} className="card p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <div className="text-2xl font-bold text-blue-600 mb-3">
                  {service.price}
                  <span className="text-sm text-gray-500">{service.period}</span>
                </div>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's included in the warranty?
              </h3>
              <p className="text-gray-600">
                Our warranty covers bug fixes, minor adjustments, and technical support 
                for the specified period. Major feature additions are not included.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I upgrade my plan later?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade your plan at any time. We'll credit your previous 
                investment toward the higher-tier package.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer custom pricing for large projects?
              </h3>
              <p className="text-gray-600">
                Absolutely! For enterprise clients with unique requirements, 
                we provide custom quotes based on project scope and complexity.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, bank transfers, and can accommodate 
                net payment terms for enterprise clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation to discuss your automation needs 
            and get a custom quote for your project.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </div>
  )
}