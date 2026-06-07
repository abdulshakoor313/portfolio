import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

interface LogoItem {
  name: string;
  src: string;
  link?: string;
}

const logos: LogoItem[] = [
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "PHP",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "MySQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind",
    src: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "VS Code",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    src: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    name: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Upwork",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Upwork_Logo.svg",
    link: "https://www.upwork.com",
  },
  {
    name: "Fiverr",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Fiverr_Logo_2020.svg",
    link: "https://www.fiverr.com",
  },
  {
    name: "Freelancer",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Freelancer_Logo.svg",
    link: "https://www.freelancer.com",
  },
];

const SkillsSlider: React.FC = () => {
  return (
    <div className="bg-[#071013] py-10">
      <h2 className="text-white text-2xl font-bold text-center mb-6">
        My Tech Stack & Platforms
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {logos.map((item, index) => {
          const content = (
            <img
              src={item.src}
              alt={item.name}
              title={item.name}
              className="w-24 h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          );

          return (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SkillsSlider;