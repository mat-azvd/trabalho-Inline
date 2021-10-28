import React from "react";
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
                    <SidebarLink to="create" onClick={toggle}>
                        Criar Filas
                    </SidebarLink>
                    <SidebarLink to="manage" onClick={toggle}>
                        Gerenciar Filas
                    </SidebarLink>
                    <SidebarLink to="row" onClick={toggle}>
                        Filas
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Sobre
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">LOGIN</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
