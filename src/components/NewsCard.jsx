import React from 'react'
import { motion } from 'framer-motion'
import { Clock, User, ExternalLink, Bookmark } from 'lucide-react'
import errorimg from '../assets/404.png'

const cleanText = (text) => {
  if (!text) return 'No description available for this briefing.'
  return text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

const NewsCard = ({ author, description, content, publishedAt, sourcename, title, url, urlToImage }) => {
  const cleanDescription = cleanText(description || content)
  const sourceLabel = sourcename || 'Flash'
  const authorLabel = author ? author : 'Unknown Author'
  
  const publishedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'Unknown Date'

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-[#0f172a]/40 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-cyan-500/30'
    >
      {/* Decorative Glow */}
      <div className='absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10' />

      <div className='relative aspect-[16/10] overflow-hidden'>
        <img
          src={urlToImage || errorimg}
          alt={title}
          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1'
          loading="lazy"
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60' />
        
        <div className='absolute left-4 top-4 flex items-center gap-2'>
          <div className='rounded-lg bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400 shadow-xl'>
            {sourceLabel}
          </div>
        </div>

        <button className='absolute right-4 top-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-colors'>
          <Bookmark size={16} />
        </button>
      </div>

      <div className='relative flex flex-1 flex-col p-6'>
        <div className='mb-4 flex flex-wrap items-center gap-4 text-[12px] font-semibold text-slate-300 uppercase tracking-widest'>
          <div className='flex items-center gap-2'>
            <Clock size={14} className="text-cyan-400" />
            {publishedDate}
          </div>
          <div className='h-3 w-[1px] bg-white/20 hidden sm:block' />
          <div className='flex items-center gap-2'>
            <User size={14} className="text-cyan-400" />
            <span className="line-clamp-1 max-w-[150px]">{authorLabel}</span>
          </div>
        </div>

        <h3 className='mb-3 text-xl font-bold leading-tight text-white group-hover:text-cyan-400 transition-colors line-clamp-2'>
          {title}
        </h3>

        <p className='mb-6 text-sm leading-relaxed text-slate-400 line-clamp-3'>
          {cleanDescription}
        </p>

        <div className='mt-auto pt-4 border-t border-white/5 flex items-center justify-between'>
          <button
            onClick={() => window.open(url, '_blank')}
            className='flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-cyan-400 transition-colors'
          >
            Full Story
            <ExternalLink size={14} />
          </button>
          
          <div className='flex -space-x-2'>
            {/* Mock social indicators */}
            <div className='h-6 w-6 rounded-full border-2 border-[#020617] bg-slate-800' />
            <div className='h-6 w-6 rounded-full border-2 border-[#020617] bg-slate-700' />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default NewsCard