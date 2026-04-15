import React from 'react'
import { ArrowLeft } from 'lucide-react'

const PreviousButton = ({ onClick, disabled }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={`group relative flex items-center gap-3 rounded-xl px-10 py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed ${
        disabled
          ? 'bg-white/5 text-slate-500'
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}
    >
      <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
      Previous
    </button>
  )
}

export default PreviousButton
