import React from 'react'

function Skills() {
  return (
<>

<div className="flex justify-center bg-[#071013] text-white py-6 px-4">
  <div className="border border-gray-100 p-6 shadow-md w-full max-w-4xl space-y-6">
    
    {/* Section Title */}
    <h1 className="text-2xl font-semibold">Technical Skills</h1>

    {/* Skills List */}
    <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
      
      <div>
        <h2 className="text-base font-semibold text-white mb-1">Frontend</h2>
        <p>HTML, CSS, JavaScript, React.js, Next.js, Bootstrap</p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-white mb-1">UI/UX</h2>
        <p>Responsive Design, Accessibility, Interaction Design</p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-white mb-1">Backend</h2>
        <p>PHP, MySQL</p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-white mb-1">Tools & Platforms</h2>
        <p>VS Code, Postman, cPanel, REST API Development</p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-white mb-1">Other Skills</h2>
        <p>Web Hosting, Debugging, Performance Optimization</p>
      </div>

      <div>
        <h2 className="text-base font-semibold text-white mb-1">Office & Data</h2>
        <p>
          Excel & Google Sheets (advanced formulas, pivot tables, data linking),<br/>
          Data Analysis & Reporting (Amazon Seller Central),<br/>
          Automation & Macros, Data Entry & Formatting, Problem-Solving
        </p>
      </div>

    </div>
  </div>
</div>



</>
  )
}

export default Skills
