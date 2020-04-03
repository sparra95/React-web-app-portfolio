import React from "react"
import Navbar from "../Navbar/Navbar.js"
import Content from "../Main/Main.js"
import "./Body.css"

export default function Body() {
  return (
    <div className="Body">
      <Navbar />
			<Content />
    </div>
  )
}
