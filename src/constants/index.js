import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    csharp,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    svelte,
    php,
    c,
    cplus,
    sql,
    azure,
    net,
    artbyte,
    solftech,
    ibm,
    raycaster,
    itschool,
    techzone,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full-Stack",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Svelte",
      icon: svelte,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: ".Net",
      icon: net,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "SQL",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "SOLF Tech IT Solutions",
      icon: solftech,
      iconBg: "#383E56",
      date: "Aug 2023 - Present",
      points: [
        "As a seasoned full-stack web developer , I navigated diverse projects encompassing the .NET framework, SQL, Svelte, Azure, Aurelia, and TypeScript.",
        "Working alongside a global team, I collaborated extensively to devise and implement optimal solutions for Emerson multinational corporation.",
        "My role extended beyond conventional web development, allowing me to immerse myself in the intricacies of full-stack development. I adeptly leveraged technologies like .NET framework and Azure to architect robust backend solutions while ensuring seamless integrations with front-end frameworks such as Aurelia and Svelte.",
        "The dynamic nature of working within an international team sharpened my communication and problem-solving skills, fostering an environment where diverse perspectives converged to deliver innovative solutions.",
      ],
    },
    {
      title: "Web Development Trainee",
      company_name: "IBM",
      icon: ibm,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Aug 2023",
      points: [
        "The program's focal point was the creation of a captivating strategy game, necessitating a proficient grasp of essential languages such as HTML, CSS, JavaScript, and PHP.",
        "Notably, I gained practical experience in employing SQL for the efficient management of in-game data.",
        "This training not only refined my technical prowess, but also fostered teamwork, project management expertise, and inventive troubleshooting abilities.",
        "The apex of the program was the successful development of an engaging strategy game, showcasing a harmonious integration of diverse technologies.",
      ],
    },
    {
      title: "Java Spring Boot Trainee",
      company_name: "IBM",
      icon: ibm,
      iconBg: "#383E56",
      date: "Mar 2022 - Apr 2022",
      points: [
        "Focused on backend development with Java 11, Spring Boot, and MongoDB for a small web application.",
        "Utilized Maven for dependency management and Git for version control.",
        "Tested backend services using Postman, ensuring functionality and reliability.",
        "Developed frontend components using Angular and TypeScript.",
      ],
    },
    {
      title: "Volunteer",
      company_name: "Artbyte",
      icon: artbyte,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Present",
      points: [
        "Contributed to diverse projects within the Artbyte Robotics Club, including website creation with a team.",
        "Led the implementation of Arduino and Electronics for a SmartCity project, developing a small smart prototype with smart parking, LCD screen, traffic lights, LEDs, and windmills.",
        "Currently engaged in a project focusing on NFC communication to create automated jewelry for streamlined living experiences.",
        "Demonstrated dedication to the club's mission by actively participating in projects aligning with scientific interests.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Raycaster Game",
      description:
      "Developed a dynamic, fun, and complex Raycaster game utilizing the raycaster technique using OpenGL for the interface.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "OpenGL",
          color: "green-text-gradient",
        },
      ],
      image: raycaster,
      source_code_link: "https://github.com/evamontejano/Raycaster-Game",
    },
    {
      name: "Management system app",
      description:
      "Designed and implemented a management system app tailored for an IT school. Features include managing trainees, courses, teachers, and student taxes.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
      ],
      image: itschool,
      source_code_link: "https://github.com/evamontejano/IT-School",
    },
    {
      name: "Site for IT products",
      description:
      "Crafted a comprehensive website for IT products, showcasing product presentations, customer reviews, and a contact form for inquiries.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: techzone,
      source_code_link: "https://github.com/evamontejano/TechZone",
    },
  ];
  
  export { services, technologies, experiences, projects };