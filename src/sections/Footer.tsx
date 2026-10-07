import { footerLegalLinks, footerNavigation, contactLinks } from '../data/contact'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark" href="#top">Mags<span>.Ai</span></a>
            <p>Turn Business Problems Into Digital Solutions.</p>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            <nav aria-label="Footer navigation">
              {footerNavigation.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
            </nav>
          </div>
          <div className="footer-column">
            <h2>Connect</h2>
            <nav aria-label="Social links">
              {contactLinks.map((link) => <a key={link.label} href={link.href}>{link.label}<small>{link.detail}</small></a>)}
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} Mags.Ai. Built with purpose.</span>
          <nav aria-label="Legal links">
            {footerLegalLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
          </nav>
        </div>
      </div>
    </footer>
  )
}