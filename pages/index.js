import React, {useState} from 'react';
import Menu from '../comps/Menu';
import Content from '../comps/Content'

export default function Home() {
const [contentColor, setContentColor] = useState(false)
const [contentImage, setContentImage] = useState(false)
const [contentText, setContentText] = useState("Welcome to my application!")
const HandleMenu = (str) => {
  // Capture what happens in the menu and change the page state
if (str === "bg"){
  setContentColor("lightcoral")
} else if (str === "img") {
  setContentImage('url(/bgimage.png)')
} else if (str === "help"){
setContentText("The calvary is coming!")
}

}
  return <div className = "home">

<div className = "content">
<Content bgimage = {contentImage} bgcolor = {contentColor}>
  <h1>{contentText}</h1>
  <div>Hey there!</div>
</Content>
</div>
<div className = "menu">
  <Menu onMenuSelect = {HandleMenu}></Menu>
</div>
  </div>
}
