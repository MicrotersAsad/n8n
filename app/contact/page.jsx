import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - AutoFlow Pro',
  description: 'Get in touch with AutoFlow Pro for your n8n automation needs. Free consultation available.',
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond within 24 hours',
    contact: 'hello@autoflowpro.com',
    action: 'mailto:hello@autoflowpro.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our automation experts',
    contact: '+1 (555) 123-4567',
    action: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Meet us at our office for in-person consultation',
    contact: '123 Business Ave, Suite 100\nSan Francisco, CA 94105',
    action: '#'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'We\'re available during these hours',
    contact: 'Mon-Fri: 9:00 AM - 6:00 PM PST\nSat: 10:00 AM - 2:00 PM PST',
    action: '#'
  }
]

const faqs = [
  {
    question: 'How long does it take to implement automation?',
    answer: 'Implementation time varies based on complexity. Simple workflows can be completed in 1-2 weeks, while complex enterprise solutions may take 4-8 weeks.'
  },
  {
    question: 'Do you provide training for our team?',
    answer: 'Yes! We offer comprehensive training programs to ensure your team can effectively use and maintain the automation workflows we create.'
  },
  {
    question: 'What if we need changes after implementation?',
    answer: 'All our packages include a warranty period with free adjustments. After that, we offer ongoing maintenance and support plans.'
  },
  {
    question: 'Can you integrate with our existing tools?',
    answer: 'Absolutely! We specialize in connecting various tools and platforms. We can integrate with most popular business applications and custom APIs.'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your business with automation? Let's start the conversation. 
            We offer free consultations to discuss your needs.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <ContactInfo key={index} {...method} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 gradient-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent matters, please call us directly.
              </p>
              <ContactForm />
            </div>

            {/* Map/Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose AutoFlow Pro?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Free Consultation</h3>
                    <p className="text-gray-600">
                      We start every project with a comprehensive consultation to understand 
                      your unique needs and challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">
                      Our certified n8n experts have years of experience in automation 
                      and business process optimization.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">
                      We don't just build and leave. We provide comprehensive support 
                      and maintenance to ensure your success.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">
                      Our clients typically see 40-60% reduction in manual work and 
                      significant improvements in accuracy and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Success?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of businesses that have transformed their operations 
            with our automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}