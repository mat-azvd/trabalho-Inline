import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import StoreRegister from "../components/StoreRegister/StoreRegister";
import Sidebar from "../components/Sidebar/Sidebar";

const Store = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <StoreRegister />
        </>
    );
};

export default Store;
