import React from "react";
import AppCarousel  from "../components/home/carousel";
import AppAbout  from "../components/home/about";
import AppFeatures  from "../components/home/features";
import AppWorks  from "../components/home/works";
import AppFaq from "../components/home/faq";
import AppPlans from "../components/home/plans";
import AppContact from "../components/home/contact";

function AppHome() {
    return (
        <div className="main">
            <AppCarousel />
            <AppAbout />
            <AppFeatures />
            <AppWorks />
            <AppFaq />
            <AppPlans />
            <AppContact />
        </div>
    )
}

export default AppHome;