import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">Sho School</span>
        <Link to="/#contact" className="footer-contact-link">
          お問い合わせ
        </Link>
        <span className="footer-copy">© {year} Sho School. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
