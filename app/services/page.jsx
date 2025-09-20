import ServiceCard from '@/components/services/ServiceCard'
import ProcessStep from '@/components/services/ProcessStep'
import { Zap, Users, Clock, Shield, Workflow, Bot, Database, Globe } from 'lucide-react'

export const metadata = {
  title: 'Our Services - AutoFlow Pro',
  description: 'Comprehensive n8n automation services including workflow design, integration, maintenance, and consulting.',
}

const services = [
  {
    icon: Workflow,
    title: 'Custom Workflow Design',
    description: 'Tailored automation workflows designed specifically for your business processes and requirements.',
    features: ['Process Analysis', 'Custom Logic Design', 'Error Handling', 'Performance Optimization'],
    price: 'From $500'
  },
  {
    icon: Database,
    title: 'System Integration',
    description: 'Connect your existing tools and platforms with seamless data flow and synchronization.',
    features: ['API Integrations', 'Database Connections', 'Third-party Services', 'Real-time Sync'],
    price: 'From $300'
  },
  {
    icon: Bot,
    title: 'Automation Consulting',
    description: 'Expert guidance on automation strategy, tool selection, and process optimization.',
    features: ['Strategy Planning', 'Tool Evaluation', 'ROI Analysis', 'Implementation Roadmap'],
    price: 'From $150/hour'
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Ongoing support, monitoring, and maintenance to ensure your automations run smoothly.',
    features: ['24/7 Monitoring', 'Bug Fixes', 'Updates & Upgrades', 'Performance Tuning'],
    price: 'From $200/month'
  },
  {
    icon: Globe,
    title: 'Cloud Migration',
    description: 'Migrate your existing automations to cloud platforms for better scalability and reliability.',
    features: ['Cloud Setup', 'Data Migration', 'Security Configuration', 'Performance Testing'],
    price: 'From $800'
  },
  {
    icon: Users,
    title: 'Team Training',
    description: 'Comprehensive training programs to help your team master n8n automation tools.',
    features: ['Hands-on Workshops', 'Best Practices', 'Custom Curriculum', 'Ongoing Support'],
    price: 'From $1200'
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Analysis',
    description: 'We analyze your current processes and identify automation opportunities.',
    icon: Zap
  },
  {
    step: 2,
    title: 'Strategy & Planning',
    description: 'Develop a comprehensive automation strategy tailored to your business goals.',
    icon: Users
  },
  {
    step: 3,
    title: 'Design & Development',
    description: 'Create and build custom workflows using n8n and other automation tools.',
    icon: Workflow
  },
  {
    step: 4,
    title: 'Testing & Deployment',
    description: 'Thoroughly test and deploy your automations with proper monitoring.',
    icon: Shield
  },
  {
    step: 5,
    title: 'Training & Support',
    description: 'Train your team and provide ongoing support to ensure success.',
    icon: Clock
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Automation</span> Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive n8n automation solutions designed to transform your business processes 
            and drive efficiency across your organization.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From custom workflow design to ongoing support, we provide end-to-end 
              automation services tailored to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful automation implementation 
              and maximum return on investment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our automation services can transform your operations 
            and drive growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}