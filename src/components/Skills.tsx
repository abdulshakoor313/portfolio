import React from "react";

const Skills: React.FC = () => {
  const card =
    "bg-[#0f1f24] border border-gray-700 rounded-2xl p-5 shadow-md hover:shadow-green-900/20 transition duration-300 hover:-translate-y-1";

  const title = "text-white font-semibold mb-2 text-base";

  const text = "text-sm text-gray-300 leading-relaxed";

  return (
    <div className="flex justify-center py-10 px-4 text-white bg-[#071013]">
      <div className="w-full max-w-5xl space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Technical Skills
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Technologies and tools I use to build modern web applications
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">

          <div className={card}>
            <h2 className={title}>Frontend</h2>
            <p className={text}>
              HTML, CSS, JavaScript, React.js, Next.js, Bootstrap
            </p>
          </div>

          <div className={card}>
            <h2 className={title}>UI/UX</h2>
            <p className={text}>
              Responsive Design, Accessibility, Interaction Design
            </p>
          </div>

          <div className={card}>
            <h2 className={title}>Backend</h2>
            <p className={text}>
              PHP, MySQL, REST APIs
            </p>
          </div>

          <div className={card}>
            <h2 className={title}>Tools</h2>
            <p className={text}>
              VS Code, Postman, cPanel, Git, Debugging Tools
            </p>
          </div>

          <div className={card}>
            <h2 className={title}>Optimization</h2>
            <p className={text}>
              Performance tuning, code optimization, clean architecture
            </p>
          </div>

          <div className={card}>
            <h2 className={title}>Office & Data</h2>
            <p className={text}>
              Excel, Google Sheets, Automation, Data handling
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;