import React from "react";
import Setup from "../../pages/Setup";
import ListaDeFilasAdm from "../../pages/ListaDeFilasAdm";

import {
    Icon,
    CloseIcon,
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
} from "./SidebarElements";
import { useHistory } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
    const history = useHistory();

    function exit() {
        localStorage.clear();
        history.push(`/`);
    }

    function isLogged() {
        const token = localStorage.getItem('token');

        if (token) {
            return (
                <SideBtnWrap>
                    <SidebarRoute onClick={() => exit()}>Sair</SidebarRoute>
                </SideBtnWrap>
            )
        }
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink href="/queue-manager" onClick={ListaDeFilasAdm}>
                        Gerenciar Filas
                    </SidebarLink>
                    <SidebarLink href="/setup-screen" onClick={Setup}>
                        Configurações
                    </SidebarLink>
                </SidebarMenu>

                {isLogged()}
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
