import { useEffect, useState } from 'react'
import loaderVideo from '../assets/loader.mp4'

const SEEN_KEY = 'sho-school-loader-seen'

function shouldShow() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return !sessionStorage.getItem(SEEN_KEY)
  } catch {
    return true
  }
}

// 初回アクセス時のみ表示するロード演出。クリック/タップ/Escでスキップできる。
function Loader() {
  const [visible, setVisible] = useState(shouldShow)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!visible) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  const finish = () => {
    if (leaving) return
    try {
      sessionStorage.setItem(SEEN_KEY, '1')
    } catch {
      // 保存できない環境では毎回表示される
    }
    setLeaving(true)
  }

  useEffect(() => {
    if (!visible) return
    const onKey = (e) => e.key === 'Escape' && finish()
    window.addEventListener('keydown', onKey)
    // 動画が再生できない環境でも詰まらないよう、上限を設ける
    const timer = setTimeout(finish, 7000)
    return () => {
      window.removeEventListener('keydown', onKey)
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, leaving])

  if (!visible) return null

  return (
    <div
      className={`loader${leaving ? ' loader-leaving' : ''}`}
      role="presentation"
      onClick={finish}
      onTransitionEnd={() => leaving && setVisible(false)}
    >
      <video
        className="loader-video"
        src={loaderVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={finish}
        onError={finish}
      />
      <button type="button" className="loader-skip" onClick={finish}>
        スキップ
      </button>
    </div>
  )
}

export default Loader
