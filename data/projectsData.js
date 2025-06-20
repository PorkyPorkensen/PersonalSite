import moviePic from "../images/movieWL.png"
import reactPic from "../images/reactComponents.png"
import passPic from "../images/PassGen.png"
import etPic from "../images/easytask.png"
import lorPic from "../images/LOR.png"
import BBpic from "../images/BBpng.png"

const projects = [
  {
    title: "League of Random",
    link: "https://leagueofrandom-dusky.vercel.app/",
    description: `An app I built for my fellow League of Legends fans. This site will help those who are overwhelmed by the 100s of champions and items
    by selecting a random champion along with a random build. For those who know who they want to play, but not what to build,
    they have the option to choose their character, and then select how random they would like their build to be.`,
    image: lorPic,
  },
  {
    title: "BurgerBros",
    link: "https://burgerbros-site.vercel.app/",
    description: `This is a fictional restaurant I built using React, JS, Firebase, and EmailJS. It has a working cart, a catering form, and a full backend for managing items and users.`,
    image: BBpic,
  },
  {
    title: "EasyTask",
    link: "https://et-front-end.vercel.app/",
    description: `CLOSED TEMPORARILY // My first project using MongoDB/Mongoose and JWT. A task list app with full auth and CRUD functionality.`,
    image: etPic,
  },
  {
    title: "Reusable React Components",
    link: "https://react-component-library-eta.vercel.app/",
    description: `A library of reusable UI components made in React: badges, banners, testimonials, and pop-up cards.`,
    image: reactPic,
  },
  {
    title: "Movie Search/Watchlist Maker",
    link: "https://porkyporkensen-github-io.vercel.app/",
    description: `A React project using the OMDB API. Search movies/TV shows, view info, and save favorites to a watchlist with LocalStorage.`,
    image: moviePic,
  },
  {
    title: "Password Generator",
    link: "https://pass-generator-green.vercel.app/",
    description: `A simple app for generating secure random passwords (6–20 chars) with options for symbols/numbers. Click to copy.`,
    image: passPic,
  },
];

export default projects