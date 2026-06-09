import Exp from "../components/WorkHistory";
import Skills from "../components/Skills";
import Slide from "../components/SkillsSlider";

const Home = () => {
  return (
    <div className="bg-[#071013] text-white min-h-screen">

      {/* Hero Section */}
      <div className="flex justify-center py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 p-4 w-full max-w-5xl">

          <div>
            <h1 className="font-bold text-4xl">Abdul Shakoor</h1>

            <h2 className="text-lg sm:text-xl">
              Front-end | React  Developer
            </h2>

            <p className="text-justify p-4 text-sm sm:text-base">
              Detail-oriented web developer with strong skills in web development
              and UI/UX design. Passionate about leveraging AI to improve user experience.
              Seeking freelance or full-time opportunities web projects.
            </p>
          </div>

          {/* Icons */}
          <div className="w-full grid grid-cols-2 gap-1">
            <div className="p-4 flex items-center justify-center h-40">
              <img src="/images/html.png" alt="HTML" className="h-full object-contain" />
            </div>

            <div className="p-4 flex items-center justify-center h-40">
              <img src="/images/css3.png" alt="CSS" className="h-full object-contain" />
            </div>

            <div className="p-4 flex items-center justify-center h-40">
              <img src="/images/java-script.png" alt="JS" className="h-full object-contain" />
            </div>

            <div className="p-4 flex items-center justify-center h-40">
              <img src="/images/react.png" alt="React" className="h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <Skills />
      <Exp />
      <Slide />

    </div>
  );
};

export default Home;