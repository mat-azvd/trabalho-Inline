import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import BodyLogin from "../components/BodyLogin/BodyLogin";
import Sidebar from "../components/Sidebar/Sidebar";
import auth from '../services/auth'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    async function onSubmit(cpf, senha) {
        const token = await auth.login(cpf, senha);

        console.log(token)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            here
            <BodyLogin onSubmit={onSubmit}/>
        </>
    );
};

export default Home;
