import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import SectionMain from "../components/SectionMain/SectionMain";
import BodyLogin from "../components/BodyLogin/BodyLogin";
import BodyUser from "../components/BodyUser/BodyUser"
import BodyUserQ from "../components/BodyUserQ/BodyUserQ"
import BodySign from "../components/BodySign/BodySign";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <BodyUserQ/>
        </>
    );
};

export default Home;
