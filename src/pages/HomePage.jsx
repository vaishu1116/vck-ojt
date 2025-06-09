import React from "react";
import Header from "../components/Header/Header";
import './Home.css'
const HomePage = () => {
    return (
        <div class="full">
            <Header />
            <div class="container">
                <div>
                   
                        
                    <div class="head">
                        <h1>Wellcome to Vivekanand College!</h1>
                            <p class="ready">Your journey to excellence starts here.</p>
                            <a class="btn" href="/addmission" data-discover="true">Apply Now</a>
                      
                    </div>
                    

                    <p>*Vivekanand College* is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                    <h2>Why choose Vivekanand College?</h2>

                    <ul>
                        <li>Legacy of Excellence: Decades of commitment to quality education.</li>
                        <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
                        <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
                        <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
                        <li>Strong Placements: Excellent career opportunities with leading companies.</li>
                    </ul>
                    <img src="\images\students-studying-DbLGuwF_.jpeg" class="img" />
                    <img src="\images\campus-life-Crkero7B.jpg" class="img2" />
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                    <p class="ready">Ready to explore our courses?</p>
                    <a class="btn2" href="/cources" data-discover="true">Explore Courses</a>
                      
                </div>
            </div>
        </div>
    )
}
export default HomePage