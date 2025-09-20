import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react'

export default function CTA() {
  const benefits = [
    { icon: Clock, text: 'Free 30-minute consultation' },
    { icon: Users, text: 'Dedicated project manager' },
    { icon: CheckCircle, text: 'Money-back guarantee' }
  ]

  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to <span className="text-blue-200">Automate</span> Your Success?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses that have transformed their operations with our 
          professional n8n automation services. Start your journey today.
        </p>

        {/* Benefits */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="flex items-center space-x-2 text-blue-100">
                <IconComponent className="w-5 h-5" />
                <span>{benefit.text}</span>
              </div>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mb-8">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2">
            <span>View Pricing</span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="text-blue-200 text-sm">
          <p className="mb-2">✓ No setup fees • ✓ 30-day money-back guarantee • ✓ Cancel anytime</p>
          <p>Trusted by 150+ companies • 4.9/5 average rating • 99.9% uptime</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-4 w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  )
}