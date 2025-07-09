import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-lg shadow-md p-8">

          <div className="w-24 h-24 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
            MHN
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Halo, Saya M. Haziem Nabawi
          </h1>
          
          <p className="text-gray-600 mb-6">
            Seorang Web Developer Newbie yang belum bisa apa apa
          </p>
          
          <Link 
            href="/social" 
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Lihat Social Media Saya
          </Link>
        </div>
      </div>
    </div>
  )
}