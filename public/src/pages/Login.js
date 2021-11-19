import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import BodyLogin from "../components/BodyLogin/BodyLogin";
import Sidebar from "../components/Sidebar/Sidebar";
import authService from '../services/auth'
import { useHistory } from "react-router-dom";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    async function onSubmit(cpf, senha) {
        try {
            await authService.login(cpf, senha);

            history.push("/");
        } catch (error) {
            alert(error.message)
        }
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
