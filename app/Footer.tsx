import Link from 'next/link'

export default function Footer() {  
  return (  
    <footer className="border-t border-gray-100 bg-white py-12 mt-20">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">  
          <div className="text-sm text-gray-500">  
            © {new Date().getFullYear()} NexVoyage Collective. All rights reserved.  
          </div>  
          <div className="flex space-x-6 text-sm font-medium text-gray-600">  
            <Link href="/privacy" className="hover:text-black transition-colors">  
              Privacy Policy  
            </Link>  
            <Link href="/terms" className="hover:text-black transition-colors">  
              Terms of Service  
            </Link>  
          </div>  
        </div>  
      </div>  
    </footer>  
  )  
}  
