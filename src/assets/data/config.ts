/**
 * @summary This file contains the data displayed ACM website.
 */


export const joinLink = "https://nolecentral.dsa.fsu.edu/organization/acm"
export const contactLink = "mailto:contact@fsu.acm.org"
export const linkedInLink = "https://www.linkedin.com/company/acm-at-fsu/"
export const contestLink = "https://contest.cs.fsu.edu"
export const discordLink = "https://discord.com/invite/GUTEDnXp"
export const instaLink = "https://www.instagram.com/fsuacm/"


// Floating island nav links, in page order
export const navLinks = [
    { label: "Home", id: "home" },
    { label: "Initiatives", id: "initiatives" },
    { label: "Leadership", id: "leadership" },
    { label: "Projects", id: "projects" },
    { label: "Sponsors", id: "sponsors" },
    { label: "Join", id: "join" },
]
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
        link: linkedInLink,
    },
    {
        number: "02",
        title: "Compete",
        bgColor: "gold",
        body: "Every semester, you can join us for our collegiate programming competitions, which are open to all majors and pizza is included!",
        clickText: "Sign Up",
        link: contestLink,
    },
    {
        number: "03",
        title: "Learn",
        bgColor: "ink",
        body: "Attend workshops to explore the latest tech and industry topics or learn how to be successful in the professional world.",
        clickText: "Instagram",
        link: instaLink,
    },
    {
        number: "04",
        title: "Improve",
        bgColor: "cream",
        body: "Prepare for technical interviews with our weekly practice sessions where we go over a variety of coding problems and solutions.",
        clickText: "Discord",
        link: discordLink,
    },
] as const;

import smartGalleryImg from "../projects/smartgallery.jpg";
import acmWebsiteImg from "../projects/acmSite.jpg"
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
    imgPath: acmWebsiteImg,
    link: "",
  },
];

export const sponsors = ['I2x Solutions', 'AWS', 'Raymond James'];


import type { GroupKey } from "../../components/LeadershipTree";

export interface Leader {
  group: GroupKey;
  name: string;
  role: string;
  major: string;
  year: string;
  email: string;
  github: string;
  linkedin: string;
  photo: string; // path/URL to a headshot; leave "" to show the placeholder
}

import Carter from "../headshots/carter.jpeg"
import Darya from "../headshots/darya.jpeg"
import Tyler from "../headshots/tyler.jpg"
import Miles from "../headshots/miles.png"
import Phuong from "../headshots/phuong.jpeg"
import William from "../headshots/william.jpg"
import Nikki from "../headshots/nikki.jpeg"
import Melissa from "../headshots/melissa.jpeg"
import Sebastian from "../headshots/sebastian.jpg"
import Alex from "../headshots/alex.png"
import Olivia from "../headshots/olivia.jpeg"
import Stephanie from "../headshots/stephanie.png"
import Brooke from "../headshots/brooke.png"
import Jenny from "../headshots/jenny.jpg"
import Mafaza from "../headshots/mafaza.jpg"
import Mike from "../headshots/mike.jpeg"
import Thomas from "../headshots/thomas.jpeg"
import Hailie from "../headshots/hailie.png"
import Jorge from "../headshots/jorge.jpeg"
import Jonah from "../headshots/jonah.png"
import Riyad from "../headshots/riyad.jpeg"
import Armani from "../headshots/armani.jpg"
import Amy from "../headshots/amy.jpeg"
export const Leaders: Leader[] = [
  { group: "exec", name: "Carter Rudolph", role: "President", major: "Computer Science & Math", year: "Junior", email: "", github: "https://github.com/CarterRudolph2005", linkedin: "https://www.linkedin.com/in/carter-rudolph/", photo: Carter },
  { group: "exec", name: "Darya Shaffer", role: "Vice President", major: "Computer Science", year: "Senior", email: "", github: "https://github.com/lldaryall", linkedin: "https://www.linkedin.com/in/darya-pylypenko-24288b207?trk=contact-info", photo: Darya },
  { group: "exec", name: "Tyler Sibley", role: "Treasurer", major: "Information Technology", year: "Senior", email: "", github: "https://github.com/tylersibley", linkedin: "https://www.linkedin.com/in/tylersibley/", photo: Tyler },
  { group: "exec", name: "Miles Goldberger", role: "Secretary", major: "Computer Science & Business", year: "Senior", email: "", github: "https://github.com/goldy4719", linkedin: "https://www.linkedin.com/in/milesgoldberger-900022222222235236893/", photo: Miles },
  { group: "exec", name: "Phuong Nguyen", role: "Historian", major: "Computer Science & Math", year: "Senior", email: "", github: "https://github.com/ptn23", linkedin: "https://www.linkedin.com/in/phuong-nguyen-45859b292", photo: Phuong },
  { group: "cloud", name: "William Brandon", role: "Cloud Captin", major: "Computer Science", year: "Senior", email: "", github: "https://github.com/TheFunnyPastry", linkedin: "https://www.linkedin.com/in/william-maxence-brandon-b2a888316/", photo: William },
  { group: "cloud", name: "Tyler Sibley", role: "Cloud Co-Captin", major: "Information Technology", year: "Senior", email: "", github: "https://github.com/tylersibley", linkedin: "https://www.linkedin.com/in/tylersibley/", photo: Tyler },
  { group: "cloud", name: "Nikki Zahedi", role: "Cloud Social Chair", major: "Computer Science", year: "Junior", email: "", github: "", linkedin: "https://www.linkedin.com/in/nikki-zahedi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", photo: Nikki },
  { group: "cloud", name: "Melissa Rodriguez", role: "Cloud Course Coordinator", major: "Computer Science", year: "Junior", email: "", github: "https://github.com/MelissaR-21/MelissaR-21", linkedin: "https://www.linkedin.com/in/melissa-rodriguez-7840b835a/", photo: Melissa },
  { group: "cloud", name: "Sebastian Davalos", role: "Project Chair", major: "Computer Science", year: "Senior", email: "", github: "https://github.com/chumboooo", linkedin: "www.linkedin.com/in/sebastian-davalos", photo: Sebastian },
  { group: "cloud", name: "Alexander Hsieh", role: "Project Chair", major: "Computer Science", year: "Senior", email: "", github: "https://github.com/alex-hsieh", linkedin: "https://www.linkedin.com/in/alexhsieht/", photo: Alex },
  { group: "wics", name: "Olivia Sinclair", role: "WiCS Chair", major: "Computer Science & Hospitality", year: "Sophomore", email: "", github: "", linkedin: "https://www.linkedin.com/in/oliviaxsinclair/", photo: Olivia },
  { group: "wics", name: "Stephanie Angueira", role: "WiCS Vice Chair", major: "Computer Science", year: "Junior", email: "", github: "", linkedin: "https://www.linkedin.com/in/stephanieangueira/", photo: Stephanie },
  { group: "wics", name: "Brooke Bowes", role: "WiCS Outreach Chair", major: "Computer Science", year: "Junior", email: "", github: "https://github.com/brookebowes", linkedin: "www.linkedin.com/in/brookebowes", photo: Brooke },
  { group: "wics", name: "Jenny Nguyen", role: "WiCS Social Chair", major: "Industrial Engineering", year: "Sophomore", email: "", github: "", linkedin: "https://www.linkedin.com/in/jenny-nguyen-6873a7370/", photo: Jenny },
  { group: "wics", name: "Mafaza Saddique", role: "WiCS Metorship Chair", major: "Computer Science", year: "Sophomore", email: "", github: "https://github.com/mafazasaddique", linkedin: "https://www.linkedin.com/in/mafaza-saddique-58b1143a1/", photo: Mafaza },
  { group: "ds", name: "Mikhail Sautkin", role: "DS Group Lead", major: "Computer Science & Math", year: "Junior", email: "", github: "https://github.com/msautkin", linkedin: "https://www.linkedin.com/in/mikhail-sautkin-a6061a35a?utm_source=share_via&utm_content=profile&utm_medium=member_ios", photo: Mike },
  { group: "chairs", name: "Thomas Hall", role: "Webmaster", major: "Computer Science", year: "Junior", email: "", github: "https://github.com/ThomasXiayu", linkedin: "www.linkedin.com/in/jude-thomas-xiayu", photo: Thomas },
  { group: "chairs", name: "Hailie Tucker", role: "Social Chair", major: "Computer Science", year: "Senior", email: "", github: "https://github.com/HailieT", linkedin: "https://www.linkedin.com/in/hailie-tucker-b56725300/", photo: Hailie },
  { group: "chairs", name: "Jorge Fraile", role: "Outreach Chair", major: "Computer Science", year: "Senior", email: "", github: "https://github.com/Jfraile05", linkedin: "https://www.linkedin.com/in/jorge-fraile/", photo: Jorge },
  { group: "chairs", name: "Jonah Stone", role: "Outreach Chair", major: "Computer Science", year: "Junior", email: "", github: "", linkedin: "https://www.linkedin.com/in/jonah-stone-921833386/", photo: Jonah },
  { group: "chairs", name: "Riyad Rzayev", role: "Technical Dev Chair", major: "Computer Engineering", year: "Sophomore", email: "", github: "https://github.com/riyadwritescode", linkedin: "https://www.linkedin.com/in/riyadrzayev/", photo: Riyad },
  { group: "chairs", name: "Armani Ruiz", role: "Contest Chair", major: "Computer Science", year: "Senior", email: "", github: "https://github.com/Armaaani27", linkedin: "https://www.linkedin.com/in/armani-ruiz/", photo: Armani },
  { group: "chairs", name: "Amy Chen", role: "Contest Chair", major: "Computer Science", year: "Sophomore", email: "", github: "", linkedin: "https://www.linkedin.com/in/amy-chen-b81b29382", photo: Amy },
];