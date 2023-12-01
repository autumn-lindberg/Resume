let home;
let experience;
let proficiencies;
let softSkills;
let portfolio;
let contact;
let offset = 35;

document.addEventListener("DOMContentLoaded", () => {
  // set distances
  home = document.getElementById("home");
  experience = document.getElementById("industry-experience");
  proficiencies = document.getElementById("proficiencies");
  softSkills = document.getElementById("soft-skills");
  portfolio = document.getElementById("portfolio");
  contact = document.getElementById("contact");
  home = home.offsetTop - offset;
  experience = experience.offsetTop - offset;
  proficiencies = proficiencies.offsetTop - offset;
  softSkills = softSkills.offsetTop - offset;
  portfolio = portfolio.offsetTop - offset;
  contact = contact.offsetTop - offset;
});

document.addEventListener("scroll", () => {
  const distFromTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  const homeLink = document.querySelector(".home-link");
  const experienceLink = document.querySelector(".experience-link");
  const proficienciesLink = document.querySelector(".proficiencies-link");
  const softSkillsLink = document.querySelector(".soft-skills-link");
  const portfolioLink = document.querySelector(".portfolio-link");
  const contactLink = document.querySelector(".contact-link");

  const homeIcon = document.querySelector(".bi-house-door-fill");
  const brainIcon = document.querySelector(".fa-brain");
  const gearIcon = document.querySelector(".bi-gear-wide-connected");
  const chatIcon = document.querySelector(".bi-chat-dots-fill");
  const brushIcon = document.querySelector(".bi-brush-fill");
  const envelopeIcon = document.querySelector(".bi-envelope-fill");

  if (distFromTop >= 0 && distFromTop <= experience) {
    if (!homeLink.className.includes("li-active")) {
      homeLink.className += " li-active";
    }
    if (!homeIcon.className.includes("bi-house-door-fill-active")) {
      homeIcon.className += " bi-house-door-fill-active";
    }
    // clear all classes
    experienceLink.className = "experience-link";
    proficienciesLink.className = "proficiencies-link";
    softSkillsLink.className = "soft-skills-link";
    portfolioLink.className = "portfolio-link";
    contactLink.className = "contact-link";
    brainIcon.className = "fas fa-brain h1";
    gearIcon.className = "bi-gear-wide-connected h1";
    chatIcon.className = "bi-chat-dots-fill h1";
    brushIcon.className = "bi-brush-fill h1";
    envelopeIcon.className = "bi-envelope-fill h1";
  } else if (distFromTop > experience && distFromTop <= proficiencies) {
    if (!experienceLink.className.includes("li-active")) {
      experienceLink.className += " li-active";
    }
    if (!brainIcon.className.includes("fa-bran-active")) {
      brainIcon.className += " fa-brain-active";
    }
    // clear all classes
    homeLink.className = "home-link";
    proficienciesLink.className = "proficiencies-link";
    softSkillsLink.className = "soft-skills-link";
    portfolioLink.className = "portfolio-link";
    contactLink.className = "contact-link";
    homeIcon.className = "bi-house-door-fill h1";
    gearIcon.className = "bi-gear-wide-connected h1";
    chatIcon.className = "bi-chat-dots-fill h1";
    brushIcon.className = "bi-brush-fill h1";
    envelopeIcon.className = "bi-envelope-fill h1";
  } else if (distFromTop > proficiencies && distFromTop <= softSkills) {
    if (!proficienciesLink.className.includes("li-active")) {
      proficienciesLink.className += " li-active";
    }
    if (!gearIcon.className.includes("bi-gear-wide-connected-active")) {
      gearIcon.className += " bi-gear-wide-connected-active";
    }
    // clear all classes
    homeLink.className = "home-link";
    experienceLink.className = "experience-link";
    softSkillsLink.className = "soft-skills-link";
    portfolioLink.className = "portfolio-link";
    contactLink.className = "contact-link";
    homeIcon.className = "bi-house-door-fill h1";
    brainIcon.className = "fas fa-brain h1";
    chatIcon.className = "bi-chat-dots-fill h1";
    brushIcon.className = "bi-brush-fill h1";
    envelopeIcon.className = "bi-envelope-fill h1";
  } else if (distFromTop > softSkills && distFromTop <= portfolio) {
    if (!softSkillsLink.className.includes("li-active")) {
      softSkillsLink.className += " li-active";
    }
    if (!chatIcon.className.includes("bi-chat-dots-fill-active")) {
      chatIcon.className += " bi-chat-dots-fill-active";
    }
    // clear all classes
    homeLink.className = "home-link";
    experienceLink.className = "experience-link";
    proficienciesLink.className = "proficiencies-link";
    portfolioLink.className = "portfolio-link";
    contactLink.className = "contact-link";
    homeIcon.className = "bi-house-door-fill h1";
    brainIcon.className = "fas fa-brain h1";
    gearIcon.className = "bi-gear-wide-connected h1";
    brushIcon.className = "bi-brush-fill h1";
    envelopeIcon.className = "bi-envelope-fill h1";
  } else if (distFromTop > portfolio && distFromTop <= contact) {
    if (!portfolioLink.className.includes("li-active")) {
      portfolioLink.className += " li-active";
    }
    if (!brushIcon.className.includes("bi-brush-fill-active")) {
      brushIcon.className += " bi-brush-fill-active";
    }
    // clear all classes
    homeLink.className = "home-link";
    experienceLink.className = "experience-link";
    proficienciesLink.className = "proficiencies-link";
    softSkillsLink.className = "soft-skills-link";
    contactLink.className = "contact-link";
    homeIcon.className = "bi-house-door-fill h1";
    brainIcon.className = "fas fa-brain h1";
    gearIcon.className = "bi-gear-wide-connected h1";
    chatIcon.className = "bi-chat-dots-fill h1";
    envelopeIcon.className = "bi-envelope-fill h1";
  } else {
    if (!contactLink.className.includes("li-active")) {
      contactLink.className += " li-active";
    }
    if (!envelopeIcon.className.includes("bi-envelope-fill-active")) {
      envelopeIcon.className += " bi-envelope-fill-active";
    }
    // clear all classes
    homeLink.className = "home-link";
    experienceLink.className = "experience-link";
    proficienciesLink.className = "proficiencies-link";
    softSkillsLink.className = "soft-skills-link";
    portfolioLink.className = "portfolio-link";
    homeIcon.className = "bi-house-door-fill h1";
    brainIcon.className = "fas fa-brain h1";
    gearIcon.className = "bi-gear-wide-connected h1";
    chatIcon.className = "bi-chat-dots-fill h1";
    brushIcon.className = "bi-brush-fill h1";
  }
});
