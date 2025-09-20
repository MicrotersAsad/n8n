export default function ProcessStep({ step, title, description, icon: IconComponent }) {
  return (
    <div className="text-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
          <IconComponent className="w-8 h-8" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
          {step}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  )
}