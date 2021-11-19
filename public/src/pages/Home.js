import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import SectionMain from "../components/SectionMain/SectionMain";
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
            <SectionMain/>
        </>
    );
};

export default Home;
