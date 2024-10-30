import React from "react";

export default function MyProjects(){
    return (
        <div>
            <div className="myProjs">
            <div className="projDiv">
                <h2 className="projTit"><a href="https://react-component-library-eta.vercel.app/">Reusable React Components</a></h2>
                <p className="siteUrl"><a href="https://react-component-library-eta.vercel.app/">https://react-component-library-eta.vercel.app/</a></p>
                <p>These are a collection of reusable Badges, Banners, Testimonials, and Pop-up Cards made
                    in React. Each with multiple variants and customizable props. </p>
                    <img src="../images/reactComponents.png" width={400}/>
            </div>
            <div className="projDiv">
                <h2 className="projTit"><a href="https://porkyporkensen-github-io.vercel.app/">Movie Search/Watchlist Maker</a></h2>
                <p className="siteUrl"><a href="https://porkyporkensen-github-io.vercel.app/">https://porkyporkensen-github-io.vercel.app/</a></p>
                <p>Built in React, this project uses the OMDB api to allow for users to search any movie or TV series
                    of their choosing. This will return an image of the poster, release info, a short plot summary, and 
                    its IMDB rating. From there you are able to save to a watchlist which is stored in LocalStorage. I also
                    included a page which returns a random movie or TV series for those who are feeling like watching something
                    new.</p>
                    <img src="../images/movieWL.png" width={400}/>
            </div>
            <div className="projDiv">
                <h2 className="projTit"><a href="https://pass-generator-green.vercel.app/">Password Generator</a></h2>
                <p className="siteUrl"><a href="https://pass-generator-green.vercel.app/">https://pass-generator-green.vercel.app/</a></p>
                <p>A simple app which lets users create randomly generated passwords for best security practices.
                    Allows lengths between 6-20 characters, as well gives the option to include
                    numbers, and/or special characters. Simply click on the password which is returned and it will copy
                    to your clipboard!
                </p>
                    <img src="../images/PassGen.png" width={400}/>
            </div>
            </div> 
            <h2>+ Many more to come...</h2>          
        </div>
    )
}