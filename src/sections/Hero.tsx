const signalLines = Array.from({ length: 18 }, (_, index) => index)
const signalParticles = Array.from({ length: 4 }, (_, index) => index)

export function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-grid" />
        <div className="signal-field signal-field-left">
          {signalLines.slice(0, 9).map((line) => (
            <span className="signal-line" key={`left-${line}`} />
          ))}
          {signalParticles.map((particle) => (
            <span className="signal-particle" key={`left-particle-${particle}`} />
          ))}
        </div>
        <div className="signal-field signal-field-right">
          {signalLines.slice(9).map((line) => (
            <span className="signal-line" key={`right-${line}`} />
          ))}
          {signalParticles.map((particle) => (
            <span className="signal-particle" key={`right-particle-${particle}`} />
          ))}
        </div>
        <div className="solution-core">
          <span className="core-ring core-ring-outer" />
          <span className="core-ring core-ring-inner" />
          <span className="core-dot" />
        </div>
      </div>

      <div className="hero-content container">
        <p className="eyebrow hero-eyebrow"><span /> Mags.Ai / Digital business solutions</p>
        <h1 className="hero-title" id="hero-title">Turn business problems into <em>digital solutions.</em></h1>
        <p className="hero-copy hero-supporting-copy">
          I help businesses replace manual processes, scattered information, and repetitive work with practical websites, applications, automation, and AI-powered solutions.
        </p>
        <div className="hero-actions hero-action-group">
          <a className="button button-primary" href="#contact">
            Discuss Your Business Problem <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-secondary" href="#products">
            Explore My Work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="hero-footer container" aria-hidden="true">
        <span>Business problem</span>
        <span className="footer-line" />
        <span>One clear direction</span>
      </div>
    </section>
  )
}