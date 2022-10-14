import React from "react";
import '../styles/Home.css';
import Typewriter from "typewriter-effect"

function Contact(){

    return(
        <div>
            <div className="header">
                <div className="text-home">
                <h1>We help startups launch thier <br /> products </h1>
                <h2>remove one word from your life that is <span>tomorrow</span>
                <br /> whatever you have to do, do it on the spot and  <br /> with <span>consistency!</span>
                </h2>
                </div>

                <div className="footer">
   <Typewriter
            
            onInit={(typewriter)=> {

            typewriter
            
            .typeString("About - Stack Exchange")
                
            .pauseFor(-500)
            .deleteAll()
            .typeString(" Stack Overflow and the Stack Exchange network help people find the answers they need, when they need them. Comprising 173 Q&A communities, including Stack Overflow, over 100 million people visit every month to ask questions, learn, and share technical knowledge. Our products and tools empowe people to find what they need to develop technology at work or at home. ")
            .start();
            }}
            />


            </div>

</div>             
        </div>
    )
}

export default Contact;