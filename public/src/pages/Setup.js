import React, { useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import SetupScreen from "../components/SetupScreen/SetupScreen"
import Sidebar from "../components/Sidebar/Sidebar"

const Setup = () => {
    const [isOpen, setIsOpen] = useState(false)
    const token = window.localStorage.getItem("token");

    if (!token) {
        window.location.href = "/login";
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <SetupScreen />
        </>
    )
}

export default Setup
