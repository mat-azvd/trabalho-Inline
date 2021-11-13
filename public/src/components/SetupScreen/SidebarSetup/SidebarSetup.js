import React from "react";
import styled from "styled-components";

import AvatarImg from "../../../assets/005.jpeg";
import {
    RiLockPasswordLine,
    RiImageAddLine,
    RiUserSettingsLine,
} from "react-icons/ri";
import ChangeName from "./ChangeName";

const SidebarSetup = () => {
    return (
        <Container>
            <ProfileContainer>
                <Avatar src={AvatarImg} />
                <NameStore>Geek Nerd Anime´s</NameStore>
                <NameUser>Helena Paiva Oliveira</NameUser>
            </ProfileContainer>
            <LinksContainer>
                <Links>
                    <Link>
                        <RiUserSettingsLine />
                        <a href={ChangeName}>Alterar Nome</a>
                    </Link>
                    <Link>
                        <RiLockPasswordLine />
                        <h3>Alterar senha</h3>
                    </Link>
                    <Link>
                        <RiImageAddLine />
                        <h3>Alterar foto</h3>
                    </Link>
                </Links>
                <ContactContainer>
                    <span>Algum problema?</span>
                    <a href="/contact"> Contate-nos</a>
                </ContactContainer>
            </LinksContainer>
        </Container>
    );
};

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background: rgb(4, 4, 41);
  background: linear-gradient(
    90deg,
    rgba(4, 4, 41, 1) 3%,
    rgba(12, 19, 61, 1) 82%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const NameStore = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.5rem 0 0;
`;

const NameUser = styled.h1`
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  margin: 0.3rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: #fff;
  height: 50%;
  width: 90%;
  border-radius: 2rem;
`;

const Links = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled.div`
  margin-left: 20%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #233f78;
  cursor: pointer;

  h3 {
    font-weight: 400;
  }

  sgv {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 70%;
  background-color: #233f78;
  color: #fff;
  height: 25%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-weight: 300;

  a {
    color: #c4c4c4;
    text-decoration: none;
    font-weight: 500;
  }
`;

export default SidebarSetup;
