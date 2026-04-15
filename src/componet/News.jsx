import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import NextButton from './NextButton'
import PreviousButton from './PreviousButton'
import axios from 'axios'

const News = ({ pageSize, country, category, setProgress }) => {
  const [newsData, setNewsData] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(null)

  const api = import.meta.env.VITE_API_KEY
  const BASE_URL = "https://newsapi.org"

  const getNewsData = async () => {
    try {
      let url 
      setProgress(10)

      if (country === 'in') {
        if (category === 'general') {
          url = `${BASE_URL}/v2/top-headlines?q=india&apiKey=4c3e4bdae4534153965d6ecc331e9911&page=${page}&pageSize=${pageSize}`
        } else {
          url = `${BASE_URL}/v2/everything?q=india ${category}&sortBy=publishedAt&apiKey=4c3e4bdae4534153965d6ecc331e9911&page=${page}&pageSize=${pageSize}`
        }
      } else {
        url = `${BASE_URL}/v2/top-headlines?country=${country}&category=${category}&apiKey=4c3e4bdae4534153965d6ecc331e9911&page=${page}&pageSize=${pageSize}`
      }
        setProgress(60)
      const response = await axios.get(url)
      setNewsData(response.data.articles)
      setTotalResults(response.data.totalResults || 0)
      setProgress(100)

    } catch (error) {
      console.log(error)
      alert('API error')
    }
  }

  const handelPageNext = (() => {
    setPage(page + 1)
  })
  const handelPagePrev = (() => {
    setPage(page - 1)
  })

  useEffect(() => {
    getNewsData()
  }, [category, country, pageSize, page])

  const totalPages = totalResults ? Math.ceil(totalResults / pageSize) : null
  const canGoPrev = page > 1
  const canGoNext = totalPages ? page < totalPages : newsData.length === pageSize

  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='m-6 grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {newsData.map((item, index) => (
            <NewsCard
              key={index}
              author={item.author}
              content={item.content}
              description={item.description}
              publishedAt={item.publishedAt}
              sourceid={item.source?.id}
              sourcename={item.source?.name}
              title={item.title}
              url={item.url}
              urlToImage={item.urlToImage}
            />
          ))}
        </div>

        <div className='flex flex-wrap items-center justify-center gap-6 py-6'>
          <PreviousButton onClick={handelPagePrev} disabled={!canGoPrev} />

          <div className='inline-flex items-center rounded-full border border-white/10 bg-slate-900/60 px-5 py-2 text-sm font-medium tracking-wide text-slate-200 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.8)]'>
            <span className='text-cyan-300'>Page</span>
            <span className='mx-2 text-white'>
              {page}{totalPages ? ` / ${totalPages}` : ''}
            </span>
          </div>

          <NextButton onClick={handelPageNext} disabled={!canGoNext} />
        </div>
      </div>
    </>
  )
}

export default News