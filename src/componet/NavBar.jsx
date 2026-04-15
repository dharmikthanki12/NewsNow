import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Business', path: '/business' },
  { label: 'Entertainment', path: '/entertainment' },
  { label: 'General', path: '/general' },
  { label: 'Health', path: '/health' },
  { label: 'Science', path: '/science' },
  { label: 'Sports', path: '/sports' },
  { label: 'Technology', path: '/technology' },
  { label: 'World', path: '/world' },
  { label: 'Nation', path: '/nation' },
]

const NavBar = () => {
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-900/75 shadow-xl shadow-slate-950/15 backdrop-blur-2xl'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8'>
        <NavLink to='/' className='inline-flex items-center gap-3 rounded-full bg-slate-950/85 px-4 py-3 text-white shadow-lg shadow-slate-950/25 ring-1 ring-white/10 transition duration-300 hover:bg-slate-900/95'>
          <span className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F8DE22] to-[#FFB400] text-slate-950 font-black shadow-sm'>N</span>
          <div className='text-left'>
            <p className='text-sm uppercase tracking-[0.32em] text-slate-100/90'>NewsNow</p>
            <p className='text-[10px] uppercase tracking-[0.28em] text-slate-300/70'>Daily briefs</p>
          </div>
        </NavLink>

        <nav className='flex-1'>
          <ul className='flex flex-wrap items-center justify-end gap-3 overflow-x-auto pb-1 pr-1 text-slate-100 sm:gap-4'>
            {navItems.map(item => (
              <li key={item.path} className='min-w-max'>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `group inline-flex items-center rounded-full px-3 py-2 text-sm font-medium text-slate-100 transition duration-200 ${
                      isActive ? 'bg-slate-800/90 text-white shadow-sm shadow-slate-950/10' : 'hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className='relative inline-flex items-center gap-1'>
                      {item.label}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#F8DE22] to-[#FFB400] transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'group-hover:scale-x-100'
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar