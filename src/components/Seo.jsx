import { useEffect } from 'react'

const SITE_NAME = 'Sho School'
const SITE_URL = 'https://sho-school.jp'
const DEFAULT_TITLE = 'Sho School | 流れをつくるマーケティングとWeb制作'
const DEFAULT_DESCRIPTION =
  'Sho Schoolは、マーケティング、Web制作、教育、AI活用を通じて、人と事業が前に進む流れをつくる個人ブランドです。広島を拠点に活動しています。'
const DEFAULT_IMAGE = `${SITE_URL}/ogp.png`

function setMetaByName(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(data) {
  let script = document.getElementById('jsonld-page')
  if (data) {
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'jsonld-page'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(data)
  } else if (script) {
    script.remove()
  }
}

/**
 * ページ単位でtitle/description/OGP/canonical/構造化データを差し替える。
 * SSRなしのSPAのため、SNS等の非JS実行クローラーにはindex.htmlの
 * デフォルト値がフォールバックとして使われる。
 */
function Seo({ title, description = DEFAULT_DESCRIPTION, path = '/', image, jsonLd }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
    const url = `${SITE_URL}${path}`
    const ogImage = image || DEFAULT_IMAGE

    document.title = fullTitle
    setMetaByName('description', description)
    setMetaByProperty('og:title', title || SITE_NAME)
    setMetaByProperty('og:description', description)
    setMetaByProperty('og:image', ogImage)
    setMetaByProperty('og:url', url)
    setMetaByName('twitter:title', title || SITE_NAME)
    setMetaByName('twitter:description', description)
    setMetaByName('twitter:image', ogImage)
    setCanonical(url)
    setJsonLd(jsonLd)

    return () => {
      // 次ページ遷移時に前ページの構造化データを残さない
      setJsonLd(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, JSON.stringify(jsonLd)])

  return null
}

export default Seo
