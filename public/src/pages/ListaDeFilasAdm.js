import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";
import ListaFilasPrincipal from "../components/ListaFilasPrincipal/ListaFilasPrincipal"
import Sidebar from "../components/Sidebar/Sidebar";
import { useHistory } from "react-router-dom";
import userService from '../services/user';

const ListaDeFilasAdm = () => {
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
        }

        setIsPermitted(Boolean(user.lojaId))
    }

    function hasPermisison () {
        if (isPermitted) {
            return <ListaFilasPrincipal />
        }

        return <div>Carregando...</div>
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            {hasPermisison()}
        </>
    );
};

export default ListaDeFilasAdm;
