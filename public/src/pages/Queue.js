import React, { useState, useEffect } from "react";

import CreateQueue from "../components/CreateQueue/CreateQueue";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useHistory } from "react-router-dom";
import userService from '../services/user';

const Queue = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPermitted, setIsPermitted] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        const token = window.localStorage.getItem("token");

        if (!token) {
            history.push('/login')
        }

        const user = await userService.getLoggedUser();

        if (!user.lojaId) {
            alert('Você não tem permissão para acessar essa página')
            history.push('/')
        }

        setIsPermitted(Boolean(user.lojaId))
    }

    function hasPermisison () {
        if (isPermitted) {
            return <CreateQueue />
        }

        return <div>Carregando...</div>
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            {hasPermisison()}
        </>
    );
};

export default Queue;
