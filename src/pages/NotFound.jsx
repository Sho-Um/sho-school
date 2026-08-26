import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

function NotFound() {
  return (
    <>
      <Seo title="ページが見つかりません" path="/404" />
      <section className="section not-found">
        <div className="container">
          <div className="section-label">404</div>
          <h1 className="section-title">ページが見つかりませんでした</h1>
          <p className="not-found-desc">
            お探しのページは移動または削除された可能性があります。トップページから改めてご覧ください。
          </p>
          <Link to="/" className="btn btn-primary">
            トップページへ戻る
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
