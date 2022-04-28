import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import './Widgets.css';


function Widgets() {
    const newsArticle = (heading, subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord/>

            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>

        </div>
    );


    return (
        <div className="widgets">
            <div>
            <div className="widgets__header">
                <h2>LCV News</h2>
                <Info/>
            </div>
            
            {newsArticle("Coronavirus: SA updates", "Top news - 7 readers")}
            {newsArticle("Upcoming Projects: LCV Steel Service Center", "Top news - 15 readers")}
            {newsArticle("Night Shift: LCV upcoming", "Top news - 16 readers")}
            {newsArticle("Laser Cutting: LCV upcoming", "Top news - 17 readers")}
            {newsArticle("Bending: LCV news", "Top news - 7 readers")}
            {newsArticle("Upcoming Events: Latest", "Top news - 14 readers")}
            {newsArticle("Public Holidays: LCV", "Top news - 18 readers")}

            </div>

            {/* <div className="">
                <p>Recent</p>
                <p>Recent</p>
                <p>Recent</p>
                <p>Recent</p>
                
            </div> */}
            
        </div>

        
        
    );
}

export default Widgets;
