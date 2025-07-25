import moviePic from "../images/movieWL.png"
import reactPic from "../images/reactComponents.png"
import passPic from "../images/PassGen.png"
import etPic from "../images/easytask.png"
import lorPic from "../images/LOR.png"
import BBpic from "../images/BBpng.png"
import cqPic from '../images/cq.png'
import dentPic from '../images/dent.png'
import mcPic from '../images/mc.png'
import SSPic from '../images/SS.png'
import ttPic from '../images/tt.png'

const projects = [
    {
    title: "TCG Tracker",
    link: "https://www.tcgtracker.ca/",
    description: `TCG Tracker is a web app for tracking the value of Pokémon TCG cards. On the homepage you can search for both previous (via scraping) and active (via their browse API) listings on eBay. From there you can add cards to your "portfolio" where a total estimated value is calculated based on the average current market price of each card. This App was built using React, JavaScript, Axios, Express, Firebase, PokemonTCG API, eBay's Browse API, and Cheerio for scraping.`,
    image: ttPic,
  }, 
  {
    title: "SOLScanner",
    link: "https://sl-frontend-psi.vercel.app/",
    description: `SolScanner is a React-based web app that lets users track the real-time value of any Solana wallet. It fetches token balances, enriches them with metadata from the SPL Token Registry and CoinGecko, filters out dust tokens, and displays portfolio value alongside a responsive pie chart. Built with React, JavaScript, Axios, @solana/web3.js, @solana/spl-token-registry, CoinGecko API, and Recharts.`,
    image: SSPic,
  }, 
  {
    title: "MoreCoin",
    link: "https://more-coin.vercel.app/",
    description: `Another fictional business. This one takes place in the Web3 space. Introducing the landing page for MoreCoin, my fictional memecoin equipped with AI written documentation, whipped up in a few hours, just like most memecoins!`,
    image: mcPic,
  },  
  {
    title: "Barrie Dental",
    link: "https://dent-site.vercel.app/",
    description: `Similarly to BurgerBros this is another fictional business, this time a dentistry. This one is frontend only however, and was moreso to test my design skills. This was my first time using LottieFiles and Haikei for animations and backgrounds respectively.`,
    image: dentPic,
  },
  {
    title: "Crossing Quizzes",
    link: "https://ac-quiz.vercel.app/",
    description: `Using the Nookipedia API I made this Animal Crossing quiz where users will be asked questions about a random Villager's personality, star sign and more. Users
    are given 4 attempts daily and must score 2/3 answers correct in order to continue. Outside of that, nothing too crazy with this one!`,
    image: cqPic,
  },
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