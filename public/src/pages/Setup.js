import React, { useState } from "react"


import Navbar from "../components/Navbar/Navbar"
import SetupScreen from "../components/SetupScreen/SetupScreen"
import Sidebar from "../components/Sidebar/Sidebar"

const Queue = () => {
    const [isOpen, setIsOpen] = useState(false)

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

export default Queue
