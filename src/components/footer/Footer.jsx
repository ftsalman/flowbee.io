import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
       <footer className="print:hidden bg-flowbee-dark text-white pt-16 pb-8 border-t border-gray-800 mt-auto bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section - UPDATED TO LOGO IMAGE */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/images/logo.png" 
                alt="Flowbee.io Logo" 
                className="h-6 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Official Meta Business Tech Provider. Turn WhatsApp into a complete business growth platform. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-gray-400 hover:text-flowbee-yellow transition-colors text-sm">Features</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-flowbee-yellow transition-colors text-sm">Industries</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-flowbee-yellow transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/global-pricing" className="text-gray-400 hover:text-flowbee-yellow transition-colors text-sm font-bold">Global Pricing</Link></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/affiliate" className="text-gray-400 hover:text-flowbee-yellow transition-colors text-sm">Partner Programme</Link></li>
              <li>
                <a href="https://support.flowbee.io/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-flowbee-yellow transition-colors text-sm">
                  Support Center
                </a>
              </li>
              <li className="text-gray-400 text-xs">
                <p className="mb-1 text-white opacity-80 uppercase tracking-widest font-bold">Contact Us</p>
                <p>IN: +91 90378 37100</p> 
                <p>UAE: +971 50 195 9656</p> 
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link to="/whatsapp-guidelines" className="text-[#FFDD2D] hover:text-white transition-colors text-sm font-bold">WhatsApp Guidelines</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Flowbee.io. Task Force Technologies Est. & Sharaco Technologies Pvt Ltd. 
          </p>
        </div>
      </div>
    </footer>
  )
}
