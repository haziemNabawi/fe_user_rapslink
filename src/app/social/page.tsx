import Link from 'next/link'

export default function SocialMedia() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/haziemmn'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@haziemmnbw'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/HaziemNabawi'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 pt-8">
          <Link 
            href="/" 
            className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
          >
            ← Kembali
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Social Media
          </h1>
        </div>
        
        <div className="space-y-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <span className="text-lg font-medium text-gray-800">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}