import React, { useState } from "react";
import Principal from "../components/principal/Principal"
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";



const ListaDeFilasAdm = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Principal />

            
        </>
    );
};

export default ListaDeFilasAdm;

