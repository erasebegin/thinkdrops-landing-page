import { getCollection, type CollectionEntry } from 'astro:content'

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Thinkdrops',
  description: 'Welcome to the home of Thinkdrops software development',
  author: {
    name: 'Thinkdrops',
    email: 'team@thinkdrops.co.uk',
    summary: ''
  },
  org: {
    name: 'Thinkdrops',
    email: 'team@thinkdrops.co.uk',
    summary: 'Welcome to the home of Thinkdrops software development'
  },
  location: 'Borth, Wales, UK',
  latlng: [52.481851, -4.052959] as [number, number],
  repository: 'https://github.com/erasebegin/thinkdrops-landing-page',
  buildTime: new Date()
}

export { default as Logo } from './assets/svg/drop.svg'
export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as FeaturedImage } from './assets/thinkdrops/drop1.jpg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' }
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true
  })
  return posts.sort((a, b) =>
    a.data.pubDate && b.data.pubDate ? +b.data.pubDate - +a.data.pubDate : 0
  )
}
