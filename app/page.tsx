const skills = ['Microsoft Excel', 'Event Management', 'Logistics & Coordination', 'Team Collaboration'];
const languages = ['English', 'Hindi', 'Kannada', 'Marathi', 'Marwadi', 'Gujarati'];

const posts = [
  {
    number: '01',
    category: 'MARKETING STRATEGIES',
    title: 'Marketing is not just promotion. It is positioning.',
    intro: 'A practical framework for building a brand people notice, remember and choose.',
    read: '5 MIN READ',
    paragraphs: [
      'Strong marketing starts before the first advertisement. It begins with understanding who the customer is, what problem they have and why your offer deserves attention. The clearest brands make that answer simple.',
      'A useful strategy has four parts: audience, positioning, message and distribution. First define a specific audience instead of trying to speak to everyone. Then identify the strongest reason that audience should choose you. Turn that reason into a consistent message and finally put it where the audience already spends attention.',
      'For students and new businesses, consistency often beats a huge budget. A clear Instagram presence, useful content, strong visual identity, partnerships and measurable calls to action can create momentum without expensive campaigns.',
      'The final step is measurement. Track reach, engagement, leads, conversion and retention rather than relying only on likes. Marketing becomes a business skill when creativity is connected to a measurable outcome.'
    ]
  },
  {
    number: '02',
    category: 'INVESTMENT BANKING',
    title: 'Investment banking: where finance meets decision-making.',
    intro: 'What the industry does, how deals work and what students should start learning early.',
    read: '6 MIN READ',
    paragraphs: [
      'Investment banking sits at the intersection of companies, capital and strategic decisions. Banks advise businesses on transactions such as mergers and acquisitions, raising equity or debt, and other major corporate-finance decisions.',
      'A typical M&A process can move through several stages: understanding the business, preparing valuation work, identifying potential buyers or targets, building financial materials, negotiating terms and supporting due diligence. The numbers matter, but so does the ability to communicate what those numbers mean.',
      'For students, the strongest starting point is financial fundamentals. Learn the three financial statements, Excel modelling, valuation concepts such as discounted cash flow and comparable companies, and the basic logic behind enterprise value and equity value.',
      'Technical knowledge is only one side of the skill set. Attention to detail, structured thinking, presentation skills, teamwork and the ability to work under deadlines are equally important. Building small valuation projects and following real transactions is a practical way to turn classroom concepts into evidence of ability.'
    ]
  },
  {
    number: '03',
    category: 'FASHION & MODELING',
    title: 'Building a modeling career starts with your personal brand.',
    intro: 'A modern approach to portfolio building, confidence, consistency and industry presence.',
    read: '5 MIN READ',
    paragraphs: [
      'Modeling is visual, but a sustainable career is built on much more than appearance. Professionalism, reliability, confidence, fitness, communication and the ability to take direction all shape how people remember you.',
      'Start with a focused portfolio. Clean digitals, a small set of strong editorial or commercial images and a simple profile are more useful than a large collection of repetitive photos. Your portfolio should make it easy for a casting team or brand to understand your look and strengths quickly.',
      'Personal branding matters because opportunities increasingly begin online. Keep your social presence consistent, share work that represents the kind of projects you want, credit collaborators and maintain a professional tone. Networking should be about relationships and reputation, not simply collecting contacts.',
      'Finally, treat every shoot, runway or audition as professional experience. Arrive prepared, communicate clearly, respect the team and learn from feedback. Fashion rewards creativity, but long-term opportunities are often built on trust and consistency.'
    ]
  }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#top">SK<span>.</span></a>
        <div className="navlinks"><a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#insights">Insights</a><a href="#contact">Contact</a></div>
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

      <section className="section insights" id="insights">
        <div className="label">03 / INSIGHTS</div>
        <div>
          <div className="insights-head"><h2>Ideas on <em>business.</em><br />Markets. Style.</h2><p>Three areas I&apos;m actively learning about — written from a student perspective and built around practical takeaways.</p></div>
          <div className="post-list">
            {posts.map((post) => (
              <article className="post" key={post.number}>
                <div className="post-meta"><span>{post.number}</span><span>{post.category}</span><span>{post.read}</span></div>
                <h3>{post.title}</h3>
                <p className="post-intro">{post.intro}</p>
                <div className="post-body">
                  {post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="label">04 / SKILLS</div>
        <div><h2>Tools I use.<br /><em>Strengths I bring.</em></h2><div className="skill-grid">{skills.map((s, i) => <div className="skill" key={s}><span>0{i + 1}</span>{s}</div>)}</div><h4>LANGUAGES</h4><div className="languages">{languages.map(l => <span key={l}>{l}</span>)}</div></div>
      </section>

      <section className="contact" id="contact"><div className="label">05 / CONTACT</div><h2>Let&apos;s build<br /><em>something.</em></h2><p>Open to finance and investment opportunities, internships and meaningful collaborations.</p><div className="contact-links"><a href="mailto:siddarthmehul@gmail.com">siddarthmehul@gmail.com ↗</a><a href="tel:+918073382873">+91 80733 82873 ↗</a></div></section>
      <footer><span>© 2026 SIDDARTH KHADE</span><span>CHRIST UNIVERSITY · BENGALURU</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
