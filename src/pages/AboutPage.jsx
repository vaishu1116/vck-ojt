import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const AboutPage = () => {
    return(
        <div class="full">
            <Header/>
            <div  class="container">

                {/*<div class="chatboot-container">
                    <div class="window-open">
                        <div class="chat=header">
                            <span role="img" aria-label="Chatbot icon">🤖</span>
                            <h2>Educational Chatbot</h2>
                            <button class="button-open">X</button>
                        </div>
                        <img alt="Chat icon" src="https://vck.codewonders.in/images/operator.png" class="img"/>
                    <
                        <div class="chat-closed"></div>
                    </div>
                </div>
                <div class="chatboot">
                <div class="chatbot-window open">
                    <div class="chatbot-header">
                        <span role="img" aria-label="Chatbot icon">🤖</span>
                        <h2>Educational Chatbot</h2>
                        <button class="chatbot-close-button">❌</button>
                    </div>
                    <div class="chatbot-messages">
                        <div class="message-row bot">
                            <div class="avatar bot-avatar">🤖</div>
                            <p class="bot-message">Hello! Welcome to our Educational Organization. How can I assist you today?</p>
                        </div>
                    </div>
                    <div class="chat-input-area">
                        <input placeholder="Type your message..." class="message-input" type="text" value=""></input>
                        <button class="send-button">Send</button>
                    </div>
                </div>
                </div>
                    */}
            <h1 id="main">About Vivekanand College</h1>
            <p>Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college has consistently strived to uphold the highest standards of academic rigor and ethical values.</p>
             <p>Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.</p>
            <h2>Our Mission</h2>
            <ul>
                 <li>To provide high-quality, accessible education across various disciplines.</li>
                 <li>To foster research, innovation, and creativity among students and faculty.</li>
                 <li>To cultivate a diverse and inclusive learning environment.</li>
                 <li>To instill strong ethical values and leadership qualities.</li>
            </ul>
            <h2>Our Values</h2>
            <p>Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p>

            <h2>Our History</h2>
            <p>[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
            </div>
        <Footer />
        </div>
    )
}
export default AboutPage