import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import BodySign from "../components/BodySign/BodySign";
import Sidebar from "../components/Sidebar/Sidebar";

const BodySignn = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <BodySign />
        </>
    );
};

export default BodySignn;
