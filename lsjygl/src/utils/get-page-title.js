import defaultSettings from '@/settings'

const title = defaultSettings.title 

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} `
  }
  return `${title}`
}
//更改网页title