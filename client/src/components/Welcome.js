import React from 'react';
import './Welcome/Welcome.css';
import about from './pictures/aboutcover1.png';
import about1 from './newpictures/about1.jpg';

import companylogo from './pictures/lcvpng.png';

function Welcome() {
    return (
        <div className="welcome">
            <img src={about1} className="welcome" alt=""></img>
        </div>
    )
}

export default Welcome;
