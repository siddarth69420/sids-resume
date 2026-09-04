const skills = ['Microsoft Excel', 'Event Management', 'Logistics & Coordination', 'Team Collaboration'];
const languages = ['English', 'Hindi', 'Kannada', 'Marathi', 'Marwadi', 'Gujarati'];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#top">SK<span>.</span></a>
        <div className="navlinks"><a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">B.COM FINANCE & INVESTMENT · CHRIST UNIVERSITY</div>
        <h1>Siddarth<br /><em>Khade.</em></h1>
        <div className="hero-bottom">
          <p>Building a foundation in finance, strategy and leadership — with a drive to turn ideas into measurable outcomes.</p>
          <div className="actions"><a className="button dark" href="#contact">Let&apos;s connect ↗</a><a className="button light" href="#about">Explore profile ↓</a></div>
        </div>
        <div className="status"><span className="dot" /> Available for internships · Starting within 3 months</div>
      </section>

      <div className="ticker"><span>FINANCE</span><b>✦</b><span>INVESTMENT BANKING</span><b>✦</b><span>STRATEGY</span><b>✦</b><span>LEADERSHIP</span></div>

      <section className="section about" id="about">
        <div className="label">01 / ABOUT</div>
        <div><h2>Curious about <em>markets.</em><br />Serious about growth.</h2><p className="lead">I&apos;m a B.Com Finance and Investment student at Christ University, focused on developing practical skills across financial analysis, markets, valuation and business strategy.</p><p>Alongside academics, I bring hands-on experience in event coordination and leadership through university committees, plus a creative edge shaped by fashion and competitive activities.</p></div>
      </section>

      <section className="section experience" id="experience">
        <div className="label">02 / EXPERIENCE & LEADERSHIP</div>
        <div className="cards">
          <article><span>01</span><h3>Logistics Club / Committee</h3><p>Contributed to logistics and coordination activities for university events, supporting planning and smooth execution.</p></article>
          <article><span>02</span><h3>Event Manager</h3><p>Assisted with organizing and coordinating events while working across teams to ensure effective execution.</p></article>
          <article><span>03</span><h3>Marketing Competition</h3><p>Reached the <strong>semi-finals</strong>, applying creativity, teamwork and commercial thinking in a competitive setting.</p></article>
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="label">03 / SKILLS</div>
        <div><h2>Tools I use.<br /><em>Strengths I bring.</em></h2><div className="skill-grid">{skills.map((s, i) => <div className="skill" key={s}><span>0{i + 1}</span>{s}</div>)}</div><h4>LANGUAGES</h4><div className="languages">{languages.map(l => <span key={l}>{l}</span>)}</div></div>
      </section>

      <section className="contact" id="contact"><div className="label">04 / CONTACT</div><h2>Let&apos;s build<br /><em>something.</em></h2><p>Open to finance and investment opportunities, internships and meaningful collaborations.</p><div className="contact-links"><a href="mailto:siddarthmehul@gmail.com">siddarthmehul@gmail.com ↗</a><a href="tel:+918073382873">+91 80733 82873 ↗</a></div></section>
      <footer><span>© 2026 SIDDARTH KHADE</span><span>CHRIST UNIVERSITY · BENGALURU</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}