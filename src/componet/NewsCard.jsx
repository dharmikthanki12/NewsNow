import React from 'react'
import errorimg from '../assets/404.png'

const cleanText = (text) => {
  if (!text) return 'No description available.'
  return text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

const NewsCard = ({ author, description, content, publishedAt, sourcename, title, url, urlToImage }) => {
  const cleanDescription = cleanText(description || content)
  const sourceLabel = sourcename || 'Unknown'
  const authorLabel = author ? author : 'Unknown author'
  const publishedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'Unknown date'

  return (
    <article className='group relative flex min-h-[32rem] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 shadow-[0_28px_90px_-25px_rgba(15,23,42,0.85)] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_40px_120px_-20px_rgba(56,189,248,0.25)]'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(248,214,63,0.08),_transparent_28%)] opacity-90 pointer-events-none' />
      <div className='relative overflow-hidden rounded-t-[1.75rem]'>
        <img
          src={urlToImage || errorimg}
          alt={title}
          className='h-64 w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110 lg:h-72'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent' />
        <div className='absolute left-5 top-5 flex flex-wrap items-center gap-2'>
          <span className='rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-100 backdrop-blur-sm'>
            {sourceLabel}
          </span>
          <span className='rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-200'>
            Featured
          </span>
        </div>
        <div className='absolute inset-x-0 bottom-0 px-5 pb-4'>
          <p className='max-w-xl text-2xl font-semibold leading-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.55)] line-clamp-2'>
            {title}
          </p>
        </div>
      </div>

      <div className='relative flex flex-1 flex-col gap-5 px-5 py-6 sm:px-6'>
        <div className='space-y-4 flex-1'>
          <p className='text-sm leading-7 text-slate-300/90 tracking-wide sm:text-base'>
            {cleanDescription}
          </p>
        </div>

        <div className='mt-auto flex flex-col gap-4 border-t border-white/10 pt-5 text-slate-400 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex flex-wrap items-center gap-3'>
            <div className='inline-flex items-center gap-2 rounded-full bg-slate-900/75 px-3 py-2 text-sm text-slate-200 shadow-sm shadow-slate-950/10'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-4 w-4 text-cyan-300'>
                <path d='M10 2a6 6 0 016 6v4a6 6 0 11-12 0V8a6 6 0 016-6z' />
              </svg>
              {authorLabel}
            </div>
            <div className='inline-flex items-center gap-2 rounded-full bg-slate-900/75 px-3 py-2 text-sm text-slate-200 shadow-sm shadow-slate-950/10'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-4 w-4 text-amber-300'>
                <path d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm-4 9v4a2 2 0 002 2h12a2 2 0 002-2v-4H2zm9-3h1v-1a1 1 0 10-2 0v1h1z' />
              </svg>
              {publishedDate}
            </div>
          </div>

          <button
            type='button'
            onClick={() => window.open(url, '_blank')}
            className='inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold tracking-wide text-slate-950 transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]'
          >
            Read More
          </button>
        </div>
      </div>
    </article>
  )
}

export default NewsCard