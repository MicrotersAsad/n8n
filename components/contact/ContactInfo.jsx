export default function ContactInfo({ icon: IconComponent, title, description, contact, action }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
        <IconComponent className="w-8 h-8" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>
      
      {action !== '#' ? (
        <a 
          href={action}
          className="text-blue-600 hover:text-blue-700 font-medium whitespace-pre-line"
        >
          {contact}
        </a>
      ) : (
        <div className="text-gray-900 font-medium whitespace-pre-line">
          {contact}
        </div>
      )}
    </div>
  )
}