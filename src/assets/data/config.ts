import smartGalleryImg from "../smartgallery.jpg";

/**
 * @summary This file contains the data displayed ACM website.
 */


// Text displayed under "ACM AT FSU"
export const heroSectionData = {
    subcopy: "We're the largest student-run technology club at Florida State dedicated to bridging the gap between the classroom and your career, providing students with the environment and resources necessary to transition from learners to professionals.",
}

// Pillar card data
export const pillarsData = [
    {
        number: "01",
        title: "Network",
        bgColor: "garnet",
        body: "Network with companies and recruiters at our events with a wide range of companies.",
        clickText: "LinkedIn",
        link: "",
    },
    {
        number: "02",
        title: "Compete",
        bgColor: "gold",
        body: "Every semester, you can join us for our collegiate programming competitions, which are open to all majors and pizza is included!",
        clickText: "Sign Up",
        link: "",
    },
    {
        number: "03",
        title: "Learn",
        bgColor: "ink",
        body: "Attend workshops to explore the latest tech and industry topics or learn how to be successful in the professional world.",
        clickText: "Instagram",
        link: "",
    },
    {
        number: "04",
        title: "Improve",
        bgColor: "cream",
        body: "Prepare for technical interviews with our weekly practice sessions where we go over a variety of coding problems and solutions.",
        clickText: "Discord",
        link: "",
    },
]

export const projectData = [
  {
    slug: "SmartGallery",
    name: "SmartGallery",
    description: "A serverless image recognition and management app built to mirror a professional production environment. Users upload images that are auto-tagged by AI, for browsing, filtering, and search. ",
    tags: ["REACT", "Python", "AWS"],
    imgPath: smartGalleryImg,
    link: "https://github.com/FSU-CloudClub/CloudClub-Spring26-ImageManagementWebApp",
  },
  {
    slug: "ACM Website",
    name: "ACM Website",
    description: "Official ACM chapter website rebuilt by a 15-member team with an open-source workflow.",
    tags: ["REACT", "TAILWIND CSS"],
    imgPath: "",
    link: "",
  },
];

export const sponsors = ['I2x Solutions', 'AWS', 'Raymond James'];

export const joinLink = ""
export const contactLink = ""