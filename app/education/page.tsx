export default function Education() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Education & Experience</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium">B.Tech in Computer Science and Engineering (Information Security)</h3>
          <p>Vellore Institute of Technology (VIT), Vellore</p>
          <p>2024 - Present</p>
        </div>
        <div>
          <h3 className="text-xl font-medium">Higher Secondary Education</h3>
          <p>Rahul International, Thane</p>
          <p>2022 - 2024</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Internships & Projects</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium">Web Development Intern</h3>
          <p>TechSolutions Inc., Remote</p>
          <p>Summer 2024</p>
          <ul className="list-disc list-inside mt-2">
            <li>Assisted in developing responsive web applications using React and Node.js</li>
            <li>Collaborated with the design team to implement user-friendly interfaces</li>
            <li>Participated in code reviews and contributed to improving development processes</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium">Personal Project: Smart Home IoT System</h3>
          <p>2023 - 2024</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed a prototype IoT system for home automation using Raspberry Pi and Arduino</li>
            <li>Implemented features such as temperature control, lighting automation, and security monitoring</li>
            <li>Created a mobile app interface for remote control and monitoring</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

