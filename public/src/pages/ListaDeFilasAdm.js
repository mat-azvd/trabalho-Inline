import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import ListaFilasPrincipal from "../components/ListaFilasPrincipal/ListaFilasPrincipal"
import Sidebar from "../components/Sidebar/Sidebar";

const ListaDeFilasAdm = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ListaFilasPrincipal/>
        </>
    );
};

export default ListaDeFilasAdm;
