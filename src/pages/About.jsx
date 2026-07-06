function About() {
  return (
    <section id="about-page" className="page-section">
      <section id="about">
        <h1 className="section-title">About me</h1>

        <div className="about-wrapper">
          <div className="about-photo">
            <img
              src="/vasilisa.jpeg"
              alt="Portrait of Vasilisa Latahurskaya"
              loading="lazy"
              width="210"
              height="210"
              />
          </div>

          <div className="about-text">
            <p>Hello, my name is Vasilisa Latahurskaya. I am currently studying Data Science and Digital Business at the University of Europe for Applied Sciences.</p>
            <p>I am actively looking for an internship in my field where I can apply my knowledge and gain practical experience. I am particularly interested in programming and data-related work, and I enjoy working with code to solve problems and analyze data.</p>
            <p>In addition to my studies, I have gained some practical experience working with data and supporting business processes, which helped me develop a structured and analytical way of thinking.</p>
            <p>I am motivated to learn, grow, and contribute to a team while developing my technical and professional skills.</p>
          </div>
        </div>

        <table className="info-table">
          <tbody>
            <tr>
              <td className="details-cell">
                <h2>Details</h2>
                <p><strong>Date of birth:</strong> <span>05.09.2006</span></p>
                <p><strong>Residence permit:</strong> <span>studium (16b)</span></p>
                <p><strong>Address:</strong> <span>Am Felde 58, 22765 Hamburg</span></p>
                <p><strong>Phone:</strong> <span>+49 176 80891143</span></p>
                <p><strong>Email:</strong> <span>vasilisa05092006@gmail.com</span></p>
              </td>

              <td className="languages-cell">
                <h2>Languages</h2>
                <p><strong>German:</strong> <span>B1</span></p>
                <p><strong>English:</strong> <span>B2</span></p>
                <p><strong>Polish:</strong> <span>A2</span></p>
                <p><strong>Belarusian:</strong> <span>B1</span></p>
                <p><strong>Russian:</strong> <span>Mother tongue</span></p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="experience">
        <h2 className="section-title">Experience</h2>

        <div className="job">
          <p className="date">01/2025 - Present</p>
          <p><strong>Junior Sales Manager</strong>AXXO Im- and Export GmbH</p>
          <ul>
            <li>Client communication and follow-on, presales research, business proposals preparations.</li>
            <li>Development of sales and marketing materials, including various product and services decks.</li>
            <li>Business/Admin operations.</li>
            <li>Automating workflows via AI Assistants for task management and communication in the workplace.</li>
            <li>Launched company website optimization.</li>
          </ul>
        </div>

        <div className="job">
          <p className="date">01/2024 - 12/2024</p>
          <p><strong>Data Enrichment Trainee</strong>E-engineers</p>
          <ul>
            <li>Cleansing and enrichment of various business data sets for further processing.</li>
            <li>Data collection and extraction, merging, enrichment, sorting/filtering, and gaps analysis.</li>
          </ul>
        </div>
      </section>

      <section id="education">
        <h2 className="section-title">Education</h2>

        <div className="education-item">
          <p className="date">09/2024 - Present</p>
          <p><strong>Data Science and Digital Business</strong><br />University of Europe for Applied Sciences</p>
        </div>

        <h3>Certificates</h3>
        <p className="certificate">2024 - IELTS 6.0</p>
        <p className="certificate">2021 - Polish, A2 certification / School of Polish Language</p>
      </section>

      <section id="skills">
        <h2 className="section-title">Skills</h2>

        <table className="skills-table">
          <tbody>
            <tr>
              <td className="soft-skills">
                <p><strong>Business Skills</strong></p>
                <ul>
                  <li>Business communication</li>
                  <li>Stakeholder management</li>
                  <li>Project management</li>
                  <li>AI forwardness</li>
                  <li>Teamwork</li>
                  <li>Data-driven approach</li>
                </ul>
              </td>

              <td className="tech-skills">
                <p><strong>Technical Skills</strong></p>
                <ul>
                  <li>Python</li>
                  <li>Jupyter</li>
                  <li>HTML</li>
                  <li>Excel</li>
                  <li>R</li>
                  <li>Tableau</li>
                  <li>SQL</li>
                  <li>CRM Tools</li>
                  <li>BI</li>
                  <li>ML Foundations</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  )
}

export default About