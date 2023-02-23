import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechStar</h1>
                    <p>Solution to all your problem</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>We are your one and only solution to the tech problems
                        you face every day. We are leading tech company whose aim is to increase the problem solving
                        abality in children  </p>
                </div>

            </div>
            <div className="home3" id="about">
              <div>
                <h1>Who We Are?</h1>
                <p>
                Learn how to solve problems. Get the free tips for your problem .
                 ways to improve yourself. be better you. personal development.
                  Highlights: Providing Personalized Solutions, Chat Option Available.
                  If you have some particular problem and you are facing difficulties to solve it,
                   click on the link, so that you can choose the area you want to improve. 
                  We prepared different free video tips, to help you, depending on the problem.
                </p>
              </div>


            </div>
             <div className="home4" id="brands">
             <div>
                <h1> Brands</h1>
                <article>
                <div style={{
                    animationDelay:"0.1s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay:"0.4s",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay:"0.7s",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay:"1s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
                </article>
             </div>

             </div>
        </>
    )
}

export default Home