export type Article = {
  _id: string
  display_date: string
  headlines: {
    basic: string
  }
  promo_items: {
    basic: {
      url: string
    }
  }
  subtype: string
  taxonomy: {
    tags: Tag[]
  }
  website_url: string
}

export type Tag = {
  slug: string
  text: string
  count: number
}

const fetchArticles = async (): Promise<{ articles: Article[] }> => {
  const res = await fetch('https://api-test-ln.herokuapp.com/articles')
  const data = await res.json()
  return data
}

export const getArticles = async () => {
  const articles = await fetchArticles().then(({ articles }) =>
    articles
      .filter((article) => article.subtype === '7')
      .slice(0, 30)
      .map((article) => {
        const date = new Date(article.display_date)
        return {
          ...article,
          display_date: date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }
      })
  )
  const tags = articles.reduce<Record<string, Tag>>((map, article) => {
    article.taxonomy.tags.map((tag) => {
      if (!map[tag.slug]) {
        map[tag.slug] = {
          ...tag,
          count: 1
        }
      } else {
        map[tag.slug].count++
      }
    })
    return map
  }, {})

  const sortedTags = Object.values(tags)
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)
  return {
    articles,
    tags: sortedTags
  }
}
