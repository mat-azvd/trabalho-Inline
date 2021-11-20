import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import BodyUserQ from "../components/BodyUserQ/BodyUserQ";
import Sidebar from "../components/Sidebar/Sidebar";

const BodyUser = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <BodyUserQ />
        </>
    );
};

export default BodyUser;
