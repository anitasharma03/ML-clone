import React from "react";
import './locations.css';

function LocationComponent(){
 return(
        <div className="elements-main-wrapper">
            <div className="heading-container">
                <h1 className="heading-title"> Our Locations</h1>
            </div>    
            <div className="element-main-widget-container">                              
                <div className="element-widget-container">

                    <div className="image-box-wrapper">
                        <figure className="image-box-img">
                            <img src="https://www.mobilelive.ca/wp-content/uploads/2022/08/Greater-Toronto.jpg" className="main-image-img" alt="Greater Toronto"/>
                        </figure>
                        <div className="image-box-content">
                            <h2 className="image-box-title">Toronto</h2>
                            <p className="image-box-description"> 207 Queens Quay W,<br/> Unit 320, Toronto,<br/> ON M5J 1A7 </p>
                        </div>
                    </div>
                </div>
                <div className="element-widget-container">

                    <div className="image-box-wrapper">
                        <figure className="image-box-img">
                            <img src="https://www.mobilelive.ca/wp-content/uploads/2022/03/montreal.jpg" className="main-image-img" alt="Montreal"/>
                        </figure>
                        <div className="image-box-content">
                            <h2 className="image-box-title">Montreal</h2>
                            <p className="image-box-description"> 3 Place Ville Marie, Suite <br/> 400/4140E Montreal,<br/> QC H3B 2E3</p>
                        </div>
                    </div>
                </div>
                <div className="element-widget-container">

                    <div className="image-box-wrapper">
                        <figure className="image-box-img">
                            <img src="https://www.mobilelive.ca/wp-content/uploads/2022/10/Rich-office-new.jpg" className="main-image-img" alt="Richmond Hill"/>
                        </figure>
                        <div className="image-box-content">
                            <h2 className="image-box-title">Richmond Hill</h2>
                            <p className="image-box-description"> 1550 16th Ave., Building B, <br/> Unit 1-2, Richmond Hill, <br/> ON L4B 3K9</p>
                        </div>
                    </div>
                </div>
                <div className="element-widget-container">

                    <div className="image-box-wrapper">
                        <figure className="image-box-img">
                            <img src="https://www.mobilelive.ca/wp-content/uploads/2022/03/Lahore.jpg" className="main-image-img" alt="Lahore"/>
                        </figure>
                        <div className="image-box-content">
                            <h2 className="image-box-title">Lahore</h2>
                            <p className="image-box-description"> 3rd &amp; 4th Floor, CP-96, Defence Raya, DHA Phase 6, Lahore<br/> 54000</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
     
    );

}

export default LocationComponent;