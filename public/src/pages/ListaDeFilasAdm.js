import React, { /*Component,*/ useState } from "react";

import Principal from "../components/principal/Principal"

import Navbar from "../components/Navbar/Navbar";
//import SectionMain from "../components/SectionMain/SectionMain";
//import Sidebar from "../components/Sidebar/Sidebar";

const ListaDeFilasAdm = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            
            <Navbar toggle={toggle} />

            <Principal />

            
        </>
    );
};

export default ListaDeFilasAdm;


//<Sidebar isOpen={isOpen} toggle={toggle} />

//<SectionMain />