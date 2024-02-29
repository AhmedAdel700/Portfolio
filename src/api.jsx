export async function loginUser(creds) {
  const res = await fetch("https://formspree.io/f/mnqejapp", {
    method: "post",
    body: JSON.stringify(creds),
  });
  if (!res.ok) {
    throw {
      message: "Failed To Send",
      statusText: res.statusText,
      status: res.status,
    };
  }
}

export const dataOfProjects = [
  {
    id: 1,
    title: "Vanlife",
    description: "Vanlife App Is About Renting Vans For Any Kind Of Trips.",
    tech: "React.js | React Router | Bootstrap | CSS(3) | Postman | Mirage js | Vite js",
    image: "./images/Vanlife.png",
    github: "https://github.com/AhmedAdel700/Vanlife",
    link: "https://main--the-vanlife-project.netlify.app/",
    catagory: ["react", "bootstrap", "figma", "all"],
  },
  {
    id: 2,
    title: "Kasper",
    description: "",
    tech: "HTML(5) | CSS(3) | Javascript ",
    image: "./images/Kasper.jpg",
    github: "https://github.com/AhmedAdel700/Kasper",
    link: "https://ahmedadel700.github.io/Kasper/",
    catagory: ["HCJ", "all"],
  },
  {
    id: 3,
    title: "Bondi",
    description: "",
    tech: "HTML(5) | CSS(3) | Javascript | Bootstrap",
    image: "./images/bondi.png",
    github: "https://github.com/AhmedAdel700/Bondi",
    link: "https://ahmedadel700.github.io/Bondi",
    catagory: ["HCJ", "bootstrap", "all"],
  },
  {
    id: 4,
    title: "Dashboard",
    description: "",
    tech: "HTML(5) | CSS(3) | Javascript ",
    image: "./images/Dashboard.png",
    github: "https://github.com/AhmedAdel700/Dashboard",
    link: "https://ahmedadel700.github.io/Dashboard/",
    catagory: ["HCJ", "all"],
  },
  {
    id: 5,
    title: "Leon",
    description: "",
    tech: "HTML(5) | CSS(3) | Javascript ",
    image: "./images/leon.png",
    github: "https://github.com/AhmedAdel700/Leon",
    link: "https://ahmedadel700.github.io/Leon/",
    catagory: ["HCJ", "all"],
  },
  {
    id: 6,
    title: "FS.",
    description: "",
    tech: "HTML(5) | CSS(3)",
    image: "./images/FS.png",
    github: "https://github.com/AhmedAdel700/FS",
    link: "https://ahmedadel700.github.io/FS/",
    catagory: ["HCJ", "all"],
  },
];
