import React from "react";
import moviePic from "../images/movieWL.png"
import reactPic from "../images/reactComponents.png"
import passPic from "../images/PassGen.png"
import etPic from "../images/easytask.png"
import lorPic from "../images/LOR.png"


export default function MyProjects(){
    return (
        <div>
            <div className="myProjs">
            <div className="projDiv">
                <h2 className="projTit"><a href="https://leagueofrandom-dusky.vercel.app/">League of Random</a></h2>
                <p className="siteUrl"><a href="https://leagueofrandom-dusky.vercel.app/">https://leagueofrandom-dusky.vercel.app/</a></p>
                <p>An app I built for my fellow League of Legends fans. This site will help those who are overwhelmed by the 100s of champions and items
                    by selecting a random champion along with a random build. For those who know who they want to play, but not what to build,
                    they have the option to choose their character, and then select how random they would like their build to be. 
                </p>
                   <a href="https://leagueofrandom-dusky.vercel.app/" target="_blank" rel="noopener noreferrer"> <img src={lorPic} width={400}/></a>
            </div>
            <div className="projDiv">
                <h2 className="projTit"><a href="https://et-front-end.vercel.app/">EasyTask</a></h2>
                <p className="siteUrl"><a href="https://et-front-end.vercel.app/">https://et-front-end.vercel.app/</a></p>
                <p>This was my first project using MongoDB / Mongoose as well as my first time venturing into JSON Web Tokens. It is a simple to-do list app, in which you are able to create an account,
                    add and delete tasks, as well as mark them as complete. </p>
                    <a href="https://et-front-end.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={etPic} width={400}/></a>
            </div>
            <div className="projDiv">
                <h2 className="projTit"><a href="https://react-component-library-eta.vercel.app/">Reusable React Components</a></h2>
                <p className="siteUrl"><a href="https://react-component-library-eta.vercel.app/">https://react-component-library-eta.vercel.app/</a></p>
                <p>These are a collection of reusable Badges, Banners, Testimonials, and Pop-up Cards made
                    in React. Each with multiple variants and customizable props. </p>
                   <a href="https://react-component-library-eta.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={reactPic} width={400}/></a>
            </div>
            <div className="projDiv">
                <h2 className="projTit"><a href="https://porkyporkensen-github-io.vercel.app/">Movie Search/Watchlist Maker</a></h2>
                <p className="siteUrl"><a href="https://porkyporkensen-github-io.vercel.app/">https://porkyporkensen-github-io.vercel.app/</a></p>
                <p>Built in React, this project uses the OMDB api to allow for users to search any movie or TV series
                    of their choosing. This will return an image of the poster, release info, a short plot summary, and 
                    its IMDB rating. From there you are able to save to a watchlist which is stored in LocalStorage. I also
                    included a page which returns a random movie or TV series for those who are feeling like watching something
                    new.</p>
                    <a href="https://porkyporkensen-github-io.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={moviePic} width={400}/></a>
            </div>
            <div className="projDiv">
                <h2 className="projTit"><a href="https://pass-generator-green.vercel.app/">Password Generator</a></h2>
                <p className="siteUrl"><a href="https://pass-generator-green.vercel.app/">https://pass-generator-green.vercel.app/</a></p>
                <p>A simple app which lets users create randomly generated passwords for best security practices.
                    Allows lengths between 6-20 characters, as well gives the option to include
                    numbers, and/or special characters. Simply click on the password which is returned and it will copy
                    to your clipboard!
                </p>
                    <a href="https://pass-generator-green.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={passPic} width={400}/></a>
            </div>
            </div> 
            <h2>+ Many more to come...</h2>          
        </div>
    )
}