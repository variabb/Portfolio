const translations = {
  en: {
    name: "Varvara Bondar",
    about: `I am a junior Front-End Developer with a solid understanding of HTML, CSS, and React etc. 
    I have hands-on experience working in teams and applying Agile methodologies such as Scrum and Kanban.
    I’m eager to keep learning, grow as a developer, and contribute to meaningful projects.
    <br><br>
    Most importantly, I can build the website you need — tailored exactly to your vision and requirements.`,

    tech: "Tech Stack",
    projects: "Projects",
    htmljs: "HTML + CSS + JS",
    react: "React",

    project1_title: "Image Search App",
    project1_desc: `This is a web application — an image search site that displays a gallery based on the entered query, using an API to fetch images.`,

    project2_title: "Dream4ce",
    project2_desc: `This is a landing page portfolio. It is built using modern JavaScript libraries to create interactive and engaging elements throughout the site.`,

    project3_title: "Movie Search App",
    project3_desc: `This is a React-based application where users can search for movies using an API. On the main page, you can see the currently trending movies. Each movie includes detailed info like description, cast, and reviews.`,

    project4_title: "Phonebook App",
    project4_desc: `A simple and user-friendly web application for managing your phone contacts. Users can register or log in to securely store, view, add, edit, and delete their contacts. Built with React and Redux.`,

    live: "Live Demo",
    github: "GitHub",
    footer: "© 2025 Varvara Bondar",
  },

  ua: {
    name: "Варвара Бондар",
    about: `Я junior Front-End розробниця з гарним розумінням HTML, CSS та React. 
    Маю практичний досвід роботи в команді та застосування Agile методологій, таких як Scrum і Kanban.
    Постійно навчаюся, розвиваюся як розробниця та прагну створювати корисні проєкти.
    <br><br>
    І найголовніше — я створю сайт саме таким, як ви його уявляєте.`,

    tech: "Технології",
    projects: "Проєкти",
    htmljs: "HTML + CSS + JS",
    react: "React",

    project1_title: "Застосунок пошуку зображень",
    project1_desc: `Це вебзастосунок — сайт для пошуку зображень, який показує галерею на основі введеного запиту, використовуючи API для отримання даних.`,

    project2_title: "Портфоліо",
    project2_desc: `Це лендінгова сторінка-портфоліо. Вона створена з використанням сучасних JavaScript бібліотек для інтерактивних та привабливих елементів на сайті.`,

    project3_title: "Застосунок пошуку фільмів",
    project3_desc: `React-застосунок, де користувач може шукати фільми за допомогою API. На головній сторінці відображаються популярні фільми, а кожна картка має опис, акторів і відгуки.`,

    project4_title: "Телефонна книга",
    project4_desc: `Зручний вебзастосунок для керування контактами. Користувачі можуть реєструватися, додавати, редагувати й видаляти свої номери. Побудовано з використанням React і Redux.`,

    live: "Жива сторінка",
    github: "GitHub",
    footer: "© 2025 Варвара Бондар",
  },
};

document
  .getElementById("en-btn")
  .addEventListener("click", () => switchLang("en"));
document
  .getElementById("ua-btn")
  .addEventListener("click", () => switchLang("ua"));

function switchLang(lang) {
  document.querySelector("h1").textContent = translations[lang].name;
  document.getElementById("about-text").innerHTML = translations[lang].about;
  document.querySelector(".tech-stack h2").textContent =
    translations[lang].tech;
  document.querySelector(".title-of-progects").textContent =
    translations[lang].projects;

  const h3s = document.querySelectorAll(".projects h3");
  h3s[0].textContent = translations[lang].htmljs;
  h3s[1].textContent = translations[lang].react;

  const projects = document.querySelectorAll(".project");
  const keys = ["project1", "project2", "project3", "project4"];

  projects.forEach((p, i) => {
    p.querySelector("h4").textContent = translations[lang][`${keys[i]}_title`];
    p.querySelector("p").textContent = translations[lang][`${keys[i]}_desc`];
    const links = p.querySelectorAll("a");
    links[0].textContent = translations[lang].live;
    links[1].textContent = translations[lang].github;
  });

  document.querySelector(".footer p").textContent = translations[lang].footer;
}
