import React from "react";
import Setup from "../../pages/Setup";

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

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/manage" onClick={toggle}>
                        Gerenciar Filas
                    </SidebarLink>
                    <SidebarLink to="/row" onClick={toggle}>
                        Filas
                    </SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>
                        Performance
                    </SidebarLink>
                    <SidebarLink href="/setup-screen" onClick={Setup}>
                        Configurações
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signout">Sair</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
