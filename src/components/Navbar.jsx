import logo from '../assets/logo.png'
import { navItems } from '../constants'
import { Menu, X, MessageCircle } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const phone = "351936099589";

  const toggleNavebar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
    
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-[#f1efe7]/10 border-b border-[#323a2f]">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
              <img className='h-10 w-10 mr-2 rounded-full' src={logo} alt="" />
              <span className="text-xl font-bold tracking-tight">Elias Gardens</span>
          </div>
          <ul className='hidden lg:flex space-x-12'>
              {navItems.map((item, index) => (
                  <li key={index}>
                      <a href={item.href}>{item.label}</a>
                  </li>
              ))}
          </ul>
          <button className="hidden lg:flex rounded-full border bg-[#323a2f] p-2 w-fit shadow-md hover:shadow-lg hover:bg-[#252c22] transform transition duration-200 hover:-translate-y-0.5">
            <a
              href={`https://wa.me/${phone}`}
              target="_blank" rel="noopener noreferrer"
              className='text-[#f1efe7] flex flex-row items-center justify-center gap-2'
            >
              <MessageCircle className='w-4 h-4'/>
              <span>Pedir Orçamento</span>
            </a>
          </button>
          <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavebar}>
                  {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 mt-3 border-t border-[#323a2f] backdrop-blur-lg bg-[#f1efe7]/90 w-full px-12 py-4 flex flex-col justify-center items-center lg:hidden">
            <ul className='flex flex-col items-center gap-4 text-[#323a2f]'>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className='hover:text-[#8fa332]'>{item.label}</a>
                </li>
              ))}
            </ul>
            <button className="mt-4 rounded-full border bg-[#323a2f] p-2 w-fit shadow-md hover:shadow-lg hover:bg-[#252c22] transform transition duration-200 hover:-translate-y-0.5">
              <a
                href={`https://wa.me/${phone}`}
                target="_blank" rel="noopener noreferrer"
                className='text-[#f1efe7] flex flex-row items-center justify-center gap-2'
              >
                <MessageCircle className='w-4 h-4'/>
                <span>Pedir Orçamento</span>
              </a>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
