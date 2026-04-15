import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LayoutGrid, Globe, Briefcase, Zap, Heart, FlaskConical, Trophy, Cpu, Flag } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/', icon: Globe },
  { label: 'Business', path: '/business', icon: Briefcase },
  { label: 'Entertainment', path: '/entertainment', icon: Zap },
  { label: 'General', path: '/general', icon: LayoutGrid },
  { label: 'Health', path: '/health', icon: Heart },
  { label: 'Science', path: '/science', icon: FlaskConical },
  { label: 'Sports', path: '/sports', icon: Trophy },
  { label: 'Technology', path: '/technology', icon: Cpu },
  { label: 'World', path: '/world', icon: Globe },
  { label: 'Nation', path: '/nation', icon: Flag },
]

const NavBar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#020617]/70 backdrop-blur-xl'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4'>
        <NavLink to='/' className='flex items-center gap-3 group'>
          <div className='relative'>
            <div className='absolute -inset-1 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 blur-sm transition group-hover:opacity-40' />
            <div className='relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-white/10 text-white font-black shadow-xl'>
              <span className='bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent'>N</span>
            </div>
          </div>
          <div className='hidden sm:block'>
            <p className='text-lg font-bold tracking-tight text-white'>News<span className='text-cyan-400'>Now</span></p>
            <p className='text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium'>Elite News Feed</p>
          </div>
        </NavLink>

        <nav className='relative hidden lg:block'>
          <ul className='flex items-center gap-1 overflow-x-auto pb-1'>
            {navItems.slice(0, 9).map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className='relative z-10'>{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId='nav-underline'
                          className='absolute inset-0 z-0 bg-white/5 rounded-lg border border-white/10'
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-4'>
          <button className='p-2 text-slate-400 hover:text-white transition-colors lg:hidden'>
            <LayoutGrid size={24} />
          </button>
          <div className='h-8 w-[1px] bg-white/10 hidden sm:block' />
          <div className='hidden sm:flex items-center gap-2 text-xs font-medium text-slate-400'>
            <span className='h-2 w-2 rounded-full bg-emerald-500 animate-pulse' />
            Live Updates
          </div>
        </div>
      </div>
      
      {/* Mobile nav indicator - just for aesthetics in this view */}
      <div className='lg:hidden overflow-x-auto no-scrollbar'>
        <ul className='flex items-center gap-4 px-6 py-2 border-t border-white/5'>
            {navItems.map(item => (
              <li key={item.path} className='min-w-max'>
                <NavLink to={item.path} className={({isActive}) => `text-xs font-medium uppercase tracking-wider ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                  {item.label}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </header>
  )
}

export default NavBar