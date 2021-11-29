import React, { useState, useEffect } from "react";
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
import userService from "../../services/user";
import CreateQueue from "../CreateQueue/CreateQueue";
import StoreRegister from "../StoreRegister/StoreRegister";

const Sidebar = ({ isOpen, toggle }) => {
  const history = useHistory();
  const [isPermitted, setIsPermitted] = useState(false);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    if (!token) {
      return setIsPermitted(false);
    }

    const user = await userService.getLoggedUser();

    setIsPermitted(Boolean(user.lojaId));
  }

  function hasPermisison() {
    if (isPermitted) {
      return (
        <>
          <SidebarLink href="/create-queue" onClick={CreateQueue}>
            Criar Fila
          </SidebarLink>
          <SidebarLink href="/queue-manager" onClick={ListaDeFilasAdm}>
            Gerenciar Filas
          </SidebarLink>
        </>
      );
    }

    if (!token) {
      return (
        <SidebarLink href="/store-register" onClick={StoreRegister}>
          Login
        </SidebarLink>
      )
    }
  }

  function exit() {
    localStorage.clear();
    history.push(`/`);
  }

  function isLogged() {
    const token = localStorage.getItem("token");

    if (token) {
      return (
        <SideBtnWrap>
          <SidebarRoute onClick={() => exit()}>Sair</SidebarRoute>
        </SideBtnWrap>
      );
    }
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {hasPermisison()}
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
