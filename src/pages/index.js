import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div>
        <div> Hello world!</div >
        <Link to='/contact/'>Contact</Link>
        <Header headerText='Hi, Im Dom' />
    </div>
)


