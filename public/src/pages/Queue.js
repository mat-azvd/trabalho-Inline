import React, { useState } from "react";

import CreateQueue from "../components/CreateQueue/CreateQueue";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Queue = () => {
    const [isOpen, setIsOpen] = useState(false);
    const token = window.localStorage.getItem("token");

    if (!token) {
        window.location.href = "/login";
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <CreateQueue />
        </>
    );
};

export default Queue;
