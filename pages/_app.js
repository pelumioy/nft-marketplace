import '../styles/globals.css'
import Link from "next/link"

function MyApp({ Component, pageProps }) {
  return (
    <div className='px-5'>
      <nav className='border-b flex pt-2 items-center justify-between'>
        <p className='text-3xl font-bold text-gray-900 mb-2'>Metastore</p>
        <div className='flex space-x-6'>
          <Link href="/">
            <a className='text-red-600 font-semibold hover:text-red-500 py-2 px-4 rounded-lg hover:bg-gray-50'>
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className='text-red-600 font-semibold hover:text-red-500 py-2 px-4 rounded-lg hover:bg-gray-50'>
              Create NFT
            </a>
          </Link>
          <Link href="/my-assets">
            <a className='text-red-600 font-semibold hover:text-red-500 py-2 px-4 rounded-lg hover:bg-gray-50'>
              My NFTs
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className='text-red-600 font-semibold hover:text-red-500 py-2 px-4 rounded-lg hover:bg-gray-50'>
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
  
}

export default MyApp
