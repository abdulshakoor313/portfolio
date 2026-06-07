const Skills = () => {
  return (
    <div className="flex justify-center py-6 px-4 text-white">
      <div className="p-6 w-full max-w-4xl space-y-6">

        <h1 className="text-2xl font-semibold">
          Technical Skills
        </h1>

        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">

          <div>
            <h2 className="text-white font-semibold mb-1">Frontend</h2>
            <p>HTML, CSS, JavaScript, React.js, Next.js, Bootstrap</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">UI/UX</h2>
            <p>Responsive Design, Accessibility, Interaction Design</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">Backend</h2>
            <p>PHP, MySQL</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">Tools</h2>
            <p>VS Code, Postman, cPanel, REST API</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">Other Skills</h2>
            <p>Web Hosting, Debugging, Performance Optimization</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">Office & Data</h2>
            <p>Excel, Google Sheets, Automation, Data Analysis</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;