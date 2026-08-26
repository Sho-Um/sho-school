import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import { works } from '../data/works'

function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      // レイアウト確定後にスクロールさせる
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location])
}

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      name: 'Sho School',
      url: 'https://sho-school.jp',
      image: 'https://sho-school.jp/ogp.png',
      description:
        'マーケティング、Web制作、教育、AI活用を通じて、人と事業が前に進む流れをつくる個人ブランド。',
      areaServed: 'JP',
      address: {
        '@type': 'PostalAddress',
        addressRegion: '広島県',
        addressCountry: 'JP',
      },
      email: 'zillion.of.zest.stay.gold.sho1@gmail.com',
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      name: 'Sho School',
      url: 'https://sho-school.jp',
    },
  ],
}

function Home() {
  useScrollToHash()

  return (
    <>
      <Seo path="/" jsonLd={homeJsonLd} />
      <Hero />
      <Works />
      <About />
      <WhatIDo />
      <Process />
      <CurrentProjects />
      <Values />
      <Contact />
    </>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner container">
        <p className="hero-label">Marketing / Web / Education / AI</p>
        <h1 className="hero-title">Sho School</h1>
        <p className="hero-tagline">人・学び・事業の流れを整える</p>
        <p className="hero-desc">
          広島を拠点に、Web制作とマーケティングを一緒に設計します。<br />
          「作って終わり」ではなく、問い合わせや来店につながる流れまで考えます。
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            無料で相談する
          </a>
          <a href="#works" className="btn btn-outline">
            制作実績を見る
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about section section-alt">
      <div className="container">
        <div className="section-label">About</div>
        <h2 className="section-title">自己紹介</h2>
        <div className="about-body">
          <div className="about-text">
            <p>
              広島を拠点に、マーケティング・Web制作・家庭教師・AI活用を横断して活動しています。
            </p>
            <p>
              「この人、もっとできるはず」「このビジネス、もっと伝わるはず」
              ——そういう可能性を見つけて、具体的な形にしていくことが好きです。
            </p>
            <p>
              サイトは作って終わりではなく、問い合わせや来店につながって初めて意味があると考えています。デザインだけでなく、公開後の集客や運用まで見据えて設計します。
            </p>
            <p>
              行動経済学や進化心理学にも関心があり、なぜ人がそう動くのかを考えながら仕事をしています。
            </p>
          </div>
          <div className="about-meta">
            <ul className="about-list">
              <li>
                <span className="meta-label">拠点</span>広島
              </li>
              <li>
                <span className="meta-label">関心</span>マーケティング、Web、教育、AI
              </li>
              <li>
                <span className="meta-label">対応</span>企画・デザイン・コーディング・公開後の相談
              </li>
              <li>
                <span className="meta-label">探求</span>行動経済学・進化心理学
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: '◈',
    title: 'Web Production',
    subtitle: 'Web制作',
    desc: '店舗サイト、サービスサイト、採用サイトなどを制作します。デザインから公開・独自ドメイン接続まで、小規模チームでも動かしやすい形で納品します。',
    topic: 'Web制作の依頼',
  },
  {
    icon: '◎',
    title: 'Marketing Support',
    subtitle: 'マーケティング支援',
    desc: '広告、SNS、MEO、LP改善など、集客の流れを整えます。作ったサイトを「見られる・伝わる」状態にするところまで一緒に考えます。',
    topic: 'マーケティングの相談',
  },
  {
    icon: '◇',
    title: 'Education',
    subtitle: '学習支援',
    desc: '中学生向けの学習設計と伴走。AIを活用した自習の仕組みづくりにも取り組んでいます。「わかる」から「続く」へ。',
    topic: '学習支援・家庭教師',
  },
  {
    icon: '◉',
    title: 'AI Workflow',
    subtitle: 'AI業務活用',
    desc: 'ChatGPTやClaudeを使った業務効率化、文章作成、資料作成、リサーチ支援。日常業務に無理なく組み込む形を提案します。',
    topic: 'AI活用のサポート',
  },
]

function WhatIDo() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-label">What I Do</div>
        <h2 className="section-title">できること</h2>
        <div className="cards">
          {services.map((s) => (
            <div key={s.title} className="card">
              <div className="card-icon" aria-hidden="true">
                {s.icon}
              </div>
              <div className="card-en">{s.title}</div>
              <h3 className="card-title">{s.subtitle}</h3>
              <p className="card-desc">{s.desc}</p>
              <Link to="/#contact" state={{ topic: s.topic }} className="card-link">
                この相談をする →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Works() {
  const featured = works.filter((w) => w.featured)

  return (
    <section id="works" className="works section">
      <div className="container">
        <div className="section-label">Works</div>
        <h2 className="section-title">制作実績</h2>
        <p className="section-lead">
          Web制作は「作ること」がゴールではなく、そのあとの反応や運用まで考えて設計しています。各実績では、依頼の背景や制作の意図もあわせて紹介しています。
        </p>
        <div className="work-list">
          {featured.map((w) => (
            <Link key={w.slug} to={`/works/${w.slug}`} className="work-item">
              <div className="work-thumb">
                <img
                  src={w.image.src}
                  alt={w.image.alt}
                  loading="lazy"
                  width={w.image.width}
                  height={w.image.height}
                />
              </div>
              <div className="work-body">
                <span className="project-tag">{w.tag}</span>
                <h3 className="work-name">{w.title}</h3>
                <p className="work-desc">{w.summary}</p>
                <span className="work-link">
                  ケーススタディを見る
                  <span className="work-arrow" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const processSteps = [
  {
    num: '01',
    title: 'お問い合わせ',
    desc: 'メールで、現状や「こういうことをしたい」という段階の要望をお聞かせください。',
  },
  {
    num: '02',
    title: 'ヒアリング・ご提案',
    desc: '目的・予算・スケジュールに応じて、必要な構成と進め方をご提案します。この時点では費用はかかりません。',
  },
  {
    num: '03',
    title: 'デザイン・制作',
    desc: 'ブランドの世界観に合わせてデザインし、実装から独自ドメイン接続まで一貫して担当します。',
  },
  {
    num: '04',
    title: '公開・運用サポート',
    desc: '公開後の初期対応や、集客・改善のご相談も引き続きサポートします。',
  },
]

function Process() {
  return (
    <section id="process" className="process section section-alt">
      <div className="container">
        <div className="section-label">Flow</div>
        <h2 className="section-title">ご依頼の流れ</h2>
        <div className="process-list">
          {processSteps.map((p) => (
            <div key={p.num} className="process-item">
              <div className="process-num">{p.num}</div>
              <div className="process-body">
                <h3 className="process-title">{p.title}</h3>
                <p className="process-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    tag: 'Web制作',
    title: 'エンタメ / アイドル系サイト制作',
    desc: '「HiDOL FACTORY」の公式サイトを制作・公開。エンタメ系ブランドの世界観を崩さないデザインと、モバイルファーストな設計を強みにしています。',
  },
  {
    tag: 'Web制作',
    title: '飲食店サイト制作',
    desc: '地域の飲食店向けに、清潔感のある店舗サイトを制作。メニュー・アクセス・予約導線を整理しています。',
  },
  {
    tag: '教育 × AI',
    title: 'AI学習ロードマップ作成',
    desc: '中学生が自分で学習計画を立てられるよう、AIを活用したロードマップ生成の仕組みを開発中。',
  },
  {
    tag: 'マーケティング',
    title: 'ローカルビジネス Web / MEO 支援',
    desc: '地域密着のビジネスが検索で見つかりやすくなるよう、サイト改善とGoogleマップ対策をまとめて支援。',
  },
]

function CurrentProjects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-label">Current Projects</div>
        <h2 className="section-title">最近の取り組み</h2>
        <div className="project-list">
          {projects.map((p) => (
            <div key={p.title} className="project-item">
              <span className="project-tag">{p.tag}</span>
              <h3 className="project-name">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const values = [
  {
    num: '01',
    title: '流れを作る',
    desc: '一回の施策より、続く仕組みを。マーケティングでも学習でも、止まらないサイクルをつくることを大切にしています。',
  },
  {
    num: '02',
    title: '楽しみながら続ける',
    desc: '義務感だけでは長続きしない。好奇心や手応えを感じながら動ける状態が、最も良いアウトプットを生むと思っています。',
  },
  {
    num: '03',
    title: '小さく試して、早く形にする',
    desc: '完璧を待つより、6割でも動かしてみる。フィードバックをもとに育てていくほうが、結果として良いものになります。',
  },
]

function Values() {
  return (
    <section id="values" className="values section section-alt">
      <div className="container">
        <div className="section-label">Values</div>
        <h2 className="section-title">大切にしていること</h2>
        <div className="values-list">
          {values.map((v) => (
            <div key={v.num} className="value-item">
              <div className="value-num">{v.num}</div>
              <div className="value-body">
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const contactTopics = [
  'Web制作の依頼',
  'マーケティングの相談',
  '学習支援・家庭教師',
  'AI活用のサポート',
  'まずは話だけ聞きたい',
]

function Contact() {
  const location = useLocation()
  const highlightedTopic = location.state?.topic

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-label">Contact</div>
        <h2 className="section-title">お問い合わせ</h2>
        <p className="contact-desc">
          正式な依頼でなくても、「こういうことで困っている」という段階でも大丈夫です。<br />
          メールでご連絡いただければ、24時間以内にお返しします。
        </p>

        <ul className="contact-topics">
          {contactTopics.map((t) => (
            <li
              key={t}
              className={`contact-topic${t === highlightedTopic ? ' is-active' : ''}`}
            >
              {t}
            </li>
          ))}
        </ul>

        <a
          href="mailto:zillion.of.zest.stay.gold.sho1@gmail.com"
          className="btn btn-primary contact-btn"
        >
          メールで相談する
        </a>
        <p className="contact-mail">zillion.of.zest.stay.gold.sho1@gmail.com</p>
      </div>
    </section>
  )
}

export default Home
