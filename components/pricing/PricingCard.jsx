import { Check, X } from 'lucide-react'

export default function PricingCard({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  notIncluded = [], 
  popular = false, 
  buttonText, 
  buttonStyle 
}) {
  return (
    <div className={`card p-8 relative ${popular ? 'ring-2 ring-blue-600 scale-105' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 ml-1">{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
        
        {notIncluded.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3 opacity-50">
            <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <span className="text-gray-400">{feature}</span>
          </div>
        ))}
      </div>
      
      <button className={`${buttonStyle} w-full`}>
        {buttonText}
      </button>
    </div>
  )
}