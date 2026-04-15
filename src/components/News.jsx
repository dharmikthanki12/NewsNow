import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import NextButton from './NextButton'
import PreviousButton from './PreviousButton'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'

const News = ({ pageSize, country, category, setProgress }) => {
  const [newsData, setNewsData] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(true)

  const api = import.meta.env.VITE_API_KEY
  const BASE_URL = "https://newsapi.org"

  const getNewsData = async () => {
    try {
      setLoading(true)
      setProgress(10)

      if (!api) {
        throw new Error('Missing News API key. Set VITE_API_KEY in .env')
      }

      let apiUrl
      if (country === 'in') {
        if (category === 'general') {
          apiUrl = `${BASE_URL}/v2/top-headlines?q=india&apiKey=${api}&page=${page}&pageSize=${pageSize}`
        } else {
          apiUrl = `${BASE_URL}/v2/everything?q=india ${category}&sortBy=publishedAt&apiKey=${api}&page=${page}&pageSize=${pageSize}`
        }
      } else {
        apiUrl = `${BASE_URL}/v2/top-headlines?country=${country}&category=${category}&apiKey=${api}&page=${page}&pageSize=${pageSize}`
      }

      setProgress(40)
      
      // Dynamic Proxy: Use localhost:5000 for dev, and relative /api/news for production
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      const proxyBase = isLocal ? 'http://localhost:5000' : ''
      const url = `${proxyBase}/api/news?url=${encodeURIComponent(apiUrl)}`
      
      const response = await axios.get(url)
      
      setProgress(70)
      setNewsData(response.data.articles || [])
      setTotalResults(response.data.totalResults || 0)
      setLoading(false)
      setProgress(100)

    } catch (error) {
      console.error(error)
      setLoading(false)
      setProgress(100)
    }
  }

  useEffect(() => {
    getNewsData()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [category, country, pageSize, page])

  const totalPages = Math.ceil(totalResults / pageSize)
  const canGoPrev = page > 1
  const canGoNext = page < totalPages || newsData.length === pageSize

  return (
    <div className='flex flex-col items-center max-w-7xl mx-auto'>
      <header className='w-full mb-12 text-center'>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className='text-4xl md:text-5xl font-black text-white mb-4 tracking-tight'
        >
          {category.charAt(0).toUpperCase() + category.slice(1)} <span className='text-cyan-400'>Briefings</span>
        </motion.h2>
        <p className='text-slate-400 max-w-lg mx-auto'>
          Curated intelligence from global sources, updated in real-time.
        </p>
      </header>

      <div className='grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        <AnimatePresence mode='wait'>
          {!loading && newsData.map((item, index) => (
            <NewsCard
              key={`${item.url}-${index}`}
              author={item.author}
              content={item.content}
              description={item.description}
              publishedAt={item.publishedAt}
              sourcename={item.source?.name}
              title={item.title}
              url={item.url}
              urlToImage={item.urlToImage}
            />
          ))}
        </AnimatePresence>
      </div>

      {newsData.length > 0 && (
        <div className='flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 py-8 border-t border-white/5 w-full'>
          <PreviousButton onClick={() => setPage(p => p - 1)} disabled={!canGoPrev || loading} />

          <div className='flex items-center gap-2'>
            {[...Array(Math.min(5, totalPages || 1))].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`h-10 w-10 rounded-xl font-bold transition-all duration-300 ${
                    page === pageNum 
                    ? 'bg-cyan-500 text-[#020617] shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  {pageNum}
                </button>
              )
            })}
          </div>

          <NextButton onClick={() => setPage(p => p + 1)} disabled={!canGoNext || loading} />
        </div>
      )}
      
      {newsData.length === 0 && !loading && (
        <div className='py-20 text-center'>
          <p className='text-slate-500 text-lg'>No intelligence found for this sector.</p>
        </div>
      )}
    </div>
  )
}

export default News