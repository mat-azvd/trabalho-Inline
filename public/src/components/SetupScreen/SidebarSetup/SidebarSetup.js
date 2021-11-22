import React, { useEffect, useState } from "react"
import styled from "styled-components"

import AvatarImg from "../../../assets/avatar.jpg"
import {
  RiUserSettingsLine,
} from "react-icons/ri"
import ChangeName from "./ChangeName"
import userService from '../../../services/user'


const SidebarSetup = () => {
  const [nameUser, setNameUser] = useState("")
  const [nameStore, setNameStore] = useState("")



  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    const user = await userService.getLoggedUser()
    setNameUser(user.nome)
    setNameStore((user.loja || {}).nome || '-')
  }

  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImg} />
        <NameStore>{nameStore || '-'}</NameStore>
        <NameUser>{nameUser || '-'}</NameUser>
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiUserSettingsLine />
            <a href={ChangeName}>Perfil</a>
          </Link>
        </Links>
        <ContactContainer>
          <span>Algum problema?</span>
          <a href="/contact"> Contate-nos</a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 30%;
  height: 100% !important;
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
  @media screen and (max-width: 800px) {
    display: none;
  }
`

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`

const NameStore = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.5rem 0 0;
`

const NameUser = styled.h1`
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  margin: 0.3rem 0 0.5rem 0;
`

const LinksContainer = styled.div`
  background-color: #fff;
  height: 50%;
  width: 90%;
  border-radius: 1rem;
`

const Links = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 60%;
`

const Link = styled.div`
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #233f78;
  cursor: pointer;
  border-bottom: 1px solid #233f78;

  h3 {
    font-weight: 400;
  }

  sgv {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`

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
`

export default SidebarSetup
