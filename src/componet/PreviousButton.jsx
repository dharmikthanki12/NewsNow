import React from 'react'

const PreviousButton = ({ onClick, disabled }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      title='Go to previous page'
      aria-label='Previous page'
      className={`group inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium tracking-wide text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${
        disabled
          ? 'bg-slate-800/40'
          : 'bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-700 shadow-[0_18px_50px_-28px_rgba(56,189,248,0.7)] hover:scale-105 hover:brightness-110 hover:shadow-lg hover:shadow-blue-400/40'
      }`}
    >
      <span className='inline-flex items-center gap-3'>
        <span className='inline-flex transition-transform duration-300 ease-in-out group-hover:-translate-x-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='h-5 w-5'
          >
            <path
              fillRule='evenodd'
              d='M12.707 2.293a1 1 0 00-1.414 0L5.586 8H16a1 1 0 110 2H5.586l5.707 5.707a1 1 0 001.414-1.414L8.414 10l4.293-4.293a1 1 0 000-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </span>
        <span>Previous</span>
      </span>
    </button>
  )
}

export default PreviousButton
