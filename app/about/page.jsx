import TeamMember from '@/components/about/TeamMember'
import { Award, Users, Clock, Target } from 'lucide-react'

export const metadata = {
  title: 'About Us - AutoFlow Pro',
  description: 'Learn about AutoFlow Pro, our mission to transform businesses through automation, and meet our expert team.',
}

const stats = [
  { number: '500+', label: 'Workflows Created', icon: Target },
  { number: '150+', label: 'Happy Clients', icon: Users },
  { number: '3+', label: 'Years Experience', icon: Clock },
  { number: '99%', label: 'Success Rate', icon: Award }
]

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Former operations director with 10+ years of experience in business process optimization and automation.',
    expertise: ['Business Strategy', 'Process Optimization', 'Team Leadership']
  },
  {
    name: 'Michael Chen',
    role: 'Lead Automation Engineer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Expert n8n developer with extensive experience in complex workflow design and system integrations.',
    expertise: ['N8N Development', 'API Integrations', 'Database Design']
  },
  {
    name: 'Emily Rodriguez',
    role: 'Customer Success Manager',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Dedicated to ensuring client success through training, support, and ongoing relationship management.',
    expertise: ['Client Relations', 'Training', 'Project Management']
  },
  {
    name: 'David Kim',
    role: 'Technical Consultant',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Systems architect specializing in enterprise-level automation solutions and cloud infrastructure.',
    expertise: ['System Architecture', 'Cloud Solutions', 'Security']
  }
]

const values = [
  {
    title: 'Innovation',
    description: 'We stay at the forefront of automation technology to deliver cutting-edge solutions.',
    icon: Target
  },
  {
    title: 'Reliability',
    description: 'Our clients trust us to deliver robust, dependable automation solutions that work.',
    icon: Award
  },
  {
    title: 'Partnership',
    description: 'We work closely with our clients as partners in their digital transformation journey.',
    icon: Users
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering exceptional quality in every project we undertake.',
    icon: Clock
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">AutoFlow Pro</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're passionate about helping businesses unlock their potential through 
            intelligent automation and streamlined processes.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At AutoFlow Pro, we believe that every business deserves to operate at peak 
                efficiency. Our mission is to democratize automation by making powerful 
                n8n workflows accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We've helped hundreds of companies transform their operations, reduce manual 
                work, and focus on what matters most - growing their business and serving 
                their customers better.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Process Automation
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  System Integration
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Workflow Optimization
                </span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that reflect our commitment to client success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              The experts behind your automation success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help transform your business with 
            powerful automation solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  )
}