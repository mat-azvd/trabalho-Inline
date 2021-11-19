import React, { useState } from "react";
import ListaFilasPrincipal from "../components/ListaFilasprincipal/ListaFilasPrincipal"
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
            <ListaFilasPrincipal />

            
        </>
    );
};

export default ListaDeFilasAdm;

