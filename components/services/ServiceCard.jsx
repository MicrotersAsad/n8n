export default function ServiceCard({ icon: IconComponent, title, description, features, price }) {
  return (
    <div className="card p-8 h-full">
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-blue-600 font-semibold">{price}</div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
            <span className="text-gray-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="btn-primary w-full">
        Learn More
      </button>
    </div>
  )
}