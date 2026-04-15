import React from 'react'
import { ArrowRight } from 'lucide-react'

const NextButton = ({ onClick, disabled }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={`group relative flex items-center gap-3 rounded-xl px-10 py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed ${
        disabled
          ? 'bg-white/5 text-slate-500'
          : 'bg-cyan-500 text-[#020617] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]'
      }`}
    >
      Next
      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
    </button>
  )
}

export default NextButton
