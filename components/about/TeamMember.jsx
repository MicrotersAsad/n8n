export default function TeamMember({ name, role, image, bio, expertise }) {
  return (
    <div className="card p-6 text-center">
      <img 
        src={image} 
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {name}
      </h3>
      
      <p className="text-blue-600 font-medium mb-4">
        {role}
      </p>
      
      <p className="text-gray-600 text-sm mb-4">
        {bio}
      </p>
      
      <div className="flex flex-wrap gap-2 justify-center">
        {expertise.map((skill, index) => (
          <span 
            key={index}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}