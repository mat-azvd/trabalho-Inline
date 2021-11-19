import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import BodyLogin from "../components/BodyLogin/BodyLogin";
import Sidebar from "../components/Sidebar/Sidebar";
import authService from '../services/auth'
import { useHistory } from "react-router-dom";
import Modal from "../components/ModalError/Modal";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    async function onSubmit(cpf, senha) {
        try {
            await authService.login(cpf, senha);
            const code = localStorage.getItem('code');

            if (code) {
                return history.push(`/queue/enter/${code}`);
            }

            history.push("/");
        } catch (error) {
            console.error("Erro ao realizar login: ", error);
            setShowModal(true);
        }

    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <BodyLogin onSubmit={onSubmit} />
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                headerText="Erro ao efetuar o login!"
                text="Verifique seu usuário e/ou senha."
                btnText="Entendido"
            />

        </>
    );
};

export default Home;
