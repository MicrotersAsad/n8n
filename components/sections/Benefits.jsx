import { Clock, DollarSign, Users, TrendingUp, Shield, Zap } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automate repetitive tasks and free up 40+ hours per week for strategic work.',
      stat: '40+ hours',
      statLabel: 'saved weekly'
    },
    {
      icon: DollarSign,
      title: 'Reduce Costs',
      description: 'Cut operational expenses by eliminating manual processes and reducing errors.',
      stat: '60%',
      statLabel: 'cost reduction'
    },
    {
      icon: TrendingUp,
      title: 'Scale Efficiently',
      description: 'Handle increased workload without proportional increase in resources.',
      stat: '3x',
      statLabel: 'faster scaling'
    },
    {
      icon: Shield,
      title: 'Improve Accuracy',
      description: 'Eliminate human errors with consistent, reliable automated processes.',
      stat: '95%',
      statLabel: 'error reduction'
    },
    {
      icon: Users,
      title: 'Enhance Productivity',
      description: 'Enable your team to focus on high-value activities that drive growth.',
      stat: '2x',
      statLabel: 'productivity boost'
    },
    {
      icon: Zap,
      title: 'Faster Execution',
      description: 'Complete tasks in minutes that previously took hours or days.',
      stat: '10x',
      statLabel: 'faster execution'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Automation</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the transformative benefits of implementing smart automation 
            in your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="card p-8 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {benefit.description}
                </p>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-gray-500">
                    {benefit.statLabel}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience these benefits for your business?
          </p>
          <button className="btn-primary">
            Start Your Automation Journey
          </button>
        </div>
      </div>
    </section>
  )
}