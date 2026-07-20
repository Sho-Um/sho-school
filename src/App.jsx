import './App.css'

function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Works />
        <CurrentProjects />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="header-inner container">
        <a href="#hero" className="logo">Sho School</a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#works">Works</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner container">
        <p className="hero-label">Marketing / Education / Web / AI</p>
        <h1 className="hero-title">Sho School</h1>
        <p className="hero-tagline">人・学び・事業の流れを整える</p>
        <p className="hero-desc">
          広島を拠点に、学びと事業づくりを支援しています。<br />
          個人・小規模チームの可能性を、具体的な形にします。
        </p>
        <div className="hero-cta">
          <a href="#services" className="btn btn-primary">できることを見る</a>
          <a href="#contact" className="btn btn-outline">相談する</a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about section">
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
              行動経済学や進化心理学にも関心があり、なぜ人がそう動くのかを考えながら仕事をしています。
            </p>
            <p>
              休日はカフェ巡り、読書、散歩。静かに考え、ゆっくり動く。
            </p>
          </div>
          <div className="about-meta">
            <ul className="about-list">
              <li><span className="meta-label">拠点</span>広島</li>
              <li><span className="meta-label">関心</span>マーケティング、Web、教育、AI</li>
              <li><span className="meta-label">趣味</span>カフェ巡り・読書・散歩</li>
              <li><span className="meta-label">探求</span>行動経済学・進化心理学</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: '◎',
    title: 'Marketing Support',
    subtitle: 'マーケティング支援',
    desc: '広告、SNS、MEO、LP改善など、集客の流れを整えます。数字を読みながら、施策を継続できる仕組みを一緒につくります。',
  },
  {
    icon: '◈',
    title: 'Web Production',
    subtitle: 'Web制作',
    desc: '店舗サイト、サービスサイト、採用サイトなどを制作します。デザインから公開まで、小規模チームでも動かしやすい形で納品します。',
  },
  {
    icon: '◇',
    title: 'Education',
    subtitle: '学習支援',
    desc: '中学生向けの学習設計と伴走。AIを活用した自習の仕組みづくりにも取り組んでいます。「わかる」から「続く」へ。',
  },
  {
    icon: '◉',
    title: 'AI Workflow',
    subtitle: 'AI業務活用',
    desc: 'ChatGPTやClaudeを使った業務効率化、文章作成、資料作成、リサーチ支援。日常業務に無理なく組み込む形を提案します。',
  },
]

function WhatIDo() {
  return (
    <section id="services" className="services section section-alt">
      <div className="container">
        <div className="section-label">What I Do</div>
        <h2 className="section-title">できること</h2>
        <div className="cards">
          {services.map((s) => (
            <div key={s.title} className="card">
              <div className="card-icon">{s.icon}</div>
              <div className="card-en">{s.title}</div>
              <h3 className="card-title">{s.subtitle}</h3>
              <p className="card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const works = [
  {
    tag: 'Web制作',
    title: '鉄板旅人',
    desc: '広島牡蠣とお好み焼きを楽しめる鉄板料理店のサイト。メニューやお店の世界観を、清潔感のあるデザインで伝えています。',
    url: 'https://teppan-tabito.jp/',
    domain: 'teppan-tabito.jp',
  },
  {
    tag: 'Web制作',
    title: 'ASPIRE',
    desc: '水色の光に包まれる、透明感のあるエンターテインメント空間のブランドサイト。世界観を崩さないビジュアル設計を意識しました。',
    url: 'https://aspire-official.vercel.app/',
    domain: 'aspire-official.vercel.app',
  },
]

function Works() {
  return (
    <section id="works" className="works section">
      <div className="container">
        <div className="section-label">Works</div>
        <h2 className="section-title">制作実績</h2>
        <div className="work-list">
          {works.map((w) => (
            <a
              key={w.title}
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-item"
            >
              <span className="project-tag">{w.tag}</span>
              <h3 className="work-name">{w.title}</h3>
              <p className="work-desc">{w.desc}</p>
              <span className="work-link">
                {w.domain}
                <span className="work-arrow" aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    tag: 'Web制作',
    title: '飲食店サイト制作',
    desc: '地域の飲食店向けに、清潔感のある店舗サイトを制作中。メニュー・アクセス・予約導線を整理しています。',
  },
  {
    tag: 'Web制作',
    title: 'アイドル / オーディション関連サイト',
    desc: 'エンタメ系のサービスサイト制作。ブランドの世界観を崩さないデザインと、モバイルファーストな設計が課題。',
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
    <section id="projects" className="projects section section-alt">
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
    <section id="values" className="values section">
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
  { label: 'Web制作の依頼' },
  { label: 'マーケティングの相談' },
  { label: '学習支援・家庭教師' },
  { label: 'AI活用のサポート' },
  { label: 'まずは話だけ聞きたい' },
]

function Contact() {
  return (
    <section id="contact" className="contact section section-alt">
      <div className="container">
        <div className="section-label">Contact</div>
        <h2 className="section-title">お問い合わせ</h2>
        <p className="contact-desc">
          正式な依頼でなくても、「こういうことで困っている」という段階でも大丈夫です。<br />
          メールでご連絡いただければ、24時間以内にお返しします。
        </p>

        <div className="contact-topics">
          {contactTopics.map((t) => (
            <span key={t.label} className="contact-topic">{t.label}</span>
          ))}
        </div>

        <a href="mailto:zillion.of.zest.stay.gold.sho1@gmail.com" className="btn btn-primary contact-btn">
          メールで相談する
        </a>
        <p className="contact-mail">zillion.of.zest.stay.gold.sho1@gmail.com</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">Sho School</span>
        <span className="footer-copy">© 2025 Sho School. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default App
