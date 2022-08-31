import React, { useEffect, useState } from 'react'
import Item from './Item'
import { getArticles, Article, Tag } from '../../services/articles_api'
import { useData } from '../context/DataContext'

const Grid = () => {
  const { clientWidth } = useData()
  const [articles, setArticles] = useState<Article[]>([])
  const [tags, setTags] = useState<Tag[]>([])
  useEffect(() => {
    getArticles().then(({ articles, tags }) => {
      setArticles(articles)
      setTags(tags)
    })
  }, [])

  return (
    <div className="relative">
      <h2 className="text-3xl underline mb-2">Acumulado Grilla</h2>
      <div className="flex gap-2 text-blue-500 flex-wrap">
        {tags.map((tag, index) => (
          <div key={index} className='flex gap-2'>
            <a href={`/tema/${tag.slug}`}>{tag.text}</a>
            {index !== tags.length - 1 && <span>•</span>}
          </div>
        ))}
      </div>
      <div className="grid w-full gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3 place-content-center">
        {articles.map((article, index) => (
          <div key={article._id}>
            <Item
              title={article.headlines.basic}
              img={article.promo_items.basic.url}
              date={article.display_date}
            />
            {clientWidth < 768 && (index + 1) % 3 === 0 && (
              <div className="mt-3 w-3/4 h-[250px] bg-blue-300 mx-auto" />
            )}
          </div>
        ))}
      </div>
      <div
        className="z-10 absolute w-full h-[700px] bottom-0"
        style={{
          background:
            'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
        }}
      />
    </div>
  )
}

export default Grid
