const Resume = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px',
        lineHeight: '1.6',
      }}
    >
      <header style={{ textAlign: 'center', borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ margin: '0', fontSize: '2em' }}>Gajin KIM</h1>
        <p style={{ margin: '5px 0' }}>Daehak-ro, Yuseong-gu, Daejeon, Korea</p>
        <p style={{ margin: '5px 0' }}>+82-10-3967-0374</p>
        <p style={{ margin: '5px 0' }}>kimgajin0714@gmail.com</p>
        <p style={{ margin: '5px 0' }}>
          <a style={{ color: '#0073e6', textDecoration: 'none' }} href="https://github.com/kimgajin">
            https://github.com/kimgajin
          </a>
        </p>
      </header>
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#0073e6', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>OBJECTIVE</h2>
        <p>Cyber Security position in Seoul.</p>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#0073e6', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>SUMMARY</h2>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Junior student, Computer Science and Engineering, Chungnam National University</li>
          <li>Proficient with Java, C, C++, Linux, Matlab</li>
        </ul>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#0073e6', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>EDUCATION</h2>
        <p>Chungnam National University, Computer Science and Engineering</p>
        <p>Mar 2022 – Feb 2026 (expected)</p>
        <p>Courses taken included:</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Computer Programming</li>
          <li>Algorithm</li>
          <li>System Programming</li>
          <li>Object-Oriented Design</li>
          <li>Computer Architecture</li>
        </ul>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#0073e6', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>EXPERIENCE</h2>
        <div>
          <h3 style={{ marginTop: '10px', color: '#555' }}>Students at Information Security Specialization College, Mar 2024 - Present</h3>
          <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
            <li>Conducted overseas training and internship programs during summer and winter vacations with universities and companies.</li>
            <li>Participated in the Information Security curriculum and related industry organizations in Korea.</li>
            <li>Attended special lectures and seminars by industry experts.</li>
            <li>Engaged in Information Security related contests and conferences.</li>
            <li>Completed term projects in class utilizing C, C++, and Java.</li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginTop: '10px', color: '#555' }}>Participation in Coding Study Group, Mogakco, November – December 2023</h3>
          <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
            <li>Collaborated with study group members to solve difficult coding test problems.</li>
            <li>Studied C, Java, and C++ languages by solving coding test problems and assignments.</li>
          </ul>
        </div>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#0073e6', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>ACTIVITIES</h2>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Participated in AI/SW Creative Contest (November 2023)</li>
          <li>Participated in AI/SW Junior Creative Contest (November 2022)</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
