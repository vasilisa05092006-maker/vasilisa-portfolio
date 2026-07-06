import { Link } from 'react-router-dom'

function Home() {
  return (
    <section id="home" className="page-section hero-page">
      <div className="hero-content">
        <p className="hero-label">Personal Portfolio</p>

        <h1>Vasilisa Latahurskaya</h1>
        <h2>Data Science & Digital Business Student</h2>

        <p className="hero-description">
          I am interested in data analysis, programming, digital business,
          and building practical solutions with modern technologies.
        </p>

        <div className="hero-actions">
          <Link to="/about">Explore Portfolio</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>

      <div className="hero-highlights">
        <div className="highlight-card">
          <span>01</span>
          <p>Data Analysis</p>
        </div>

        <div className="highlight-card">
          <span>02</span>
          <p>Digital Business</p>
        </div>

        <div className="highlight-card">
          <span>03</span>
          <p>Web Technologies</p>
        </div>
      </div>
    </section>
  )
}

export default Home