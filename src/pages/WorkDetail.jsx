import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import NotFound from './NotFound'
import { getRelatedWorks, getWorkBySlug } from '../data/works'

const detailFields = [
  { key: 'industry', label: '業種' },
  { key: 'client', label: 'クライアント' },
  { key: 'duration', label: '制作期間' },
]

function WorkDetail() {
  const { slug } = useParams()
  const work = getWorkBySlug(slug)

  if (!work) {
    return <NotFound />
  }

  const related = getRelatedWorks(work)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: work.title,
    about: work.industry,
    description: work.summary,
    url: `https://sho-school.jp/works/${work.slug}`,
    image: work.image?.src,
    creator: {
      '@type': 'Person',
      name: 'Sho',
    },
    ...(work.client ? { sourceOrganization: work.client } : {}),
  }

  return (
    <>
      <Seo
        title={`${work.title} 制作実績`}
        description={work.summary}
        path={`/works/${work.slug}`}
        jsonLd={jsonLd}
      />

      <article className="work-detail section">
        <div className="container work-detail-inner">
          <nav className="breadcrumb" aria-label="パンくずリスト">
            <Link to="/#works">Works</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{work.title}</span>
          </nav>

          <span className="project-tag">{work.tag}</span>
          <h1 className="work-detail-title">{work.title}</h1>
          <p className="work-detail-summary">{work.summary}</p>

          {work.image && (
            <div className="work-detail-image">
              <img
                src={work.image.src}
                alt={work.image.alt}
                loading="eager"
                width={work.image.width}
                height={work.image.height}
              />
            </div>
          )}

          <div className="work-detail-meta">
            {detailFields.map(
              (f) =>
                work[f.key] && (
                  <div key={f.key} className="work-detail-meta-item">
                    <span className="meta-label">{f.label}</span>
                    <span>{work[f.key]}</span>
                  </div>
                ),
            )}
          </div>

          <div className="work-detail-body">
            {work.challenge && (
              <section className="work-detail-block">
                <h2>課題</h2>
                <p>{work.challenge}</p>
              </section>
            )}

            {work.goal && (
              <section className="work-detail-block">
                <h2>制作目的</h2>
                <p>{work.goal}</p>
              </section>
            )}

            {work.role?.length > 0 && (
              <section className="work-detail-block">
                <h2>担当範囲</h2>
                <ul className="work-detail-tags">
                  {work.role.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </section>
            )}

            {work.work?.length > 0 && (
              <section className="work-detail-block">
                <h2>制作内容</h2>
                <ul className="work-detail-list">
                  {work.work.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </section>
            )}

            {work.stack?.length > 0 && (
              <section className="work-detail-block">
                <h2>使用技術</h2>
                <ul className="work-detail-tags">
                  {work.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </section>
            )}

            {work.designNote && (
              <section className="work-detail-block">
                <h2>デザインの意図</h2>
                <p>{work.designNote}</p>
              </section>
            )}

            {work.results?.items?.length > 0 && (
              <section className="work-detail-block">
                <h2>成果</h2>
                <ul className="work-detail-list">
                  {work.results.items.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                {work.results.type === 'qualitative' && (
                  <p className="work-detail-note">
                    ※ 数値の成果データがない案件のため、実際に確認できている定性的な成果のみ記載しています。
                  </p>
                )}
              </section>
            )}
          </div>

          {work.url && (
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary work-detail-cta"
            >
              {work.domain} を見る ↗
            </a>
          )}

          {related.length > 0 && (
            <section className="work-related">
              <h2 className="section-label">関連実績</h2>
              <div className="work-list work-list-compact">
                {related.map((r) => (
                  <Link key={r.slug} to={`/works/${r.slug}`} className="work-item">
                    <div className="work-thumb">
                      <img
                        src={r.image.src}
                        alt={r.image.alt}
                        loading="lazy"
                        width={r.image.width}
                        height={r.image.height}
                      />
                    </div>
                    <div className="work-body">
                      <span className="project-tag">{r.tag}</span>
                      <h3 className="work-name">{r.title}</h3>
                      <p className="work-desc">{r.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="work-detail-footer-cta">
            <p>似たようなサイトを作りたい方は、お気軽にご相談ください。</p>
            <Link to="/#contact" className="btn btn-outline">
              お問い合わせする
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

export default WorkDetail
