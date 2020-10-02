import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100%;
background-color: ${props => props.bgcolor ? props.bgcolor : "lightblue"};
background-image: ${props => props.image ? props.image : "none"};
min-width: 10px;
min-height:10px; 
`

const Content = ({children, bgcolor, bgimage,})=> {
return <Container bgcolor={bgcolor} image = {bgimage} >
{children}
</Container>
}
Content.defaultProps = {
bgcolor: "lightblue",
bgimage: "none",
children: "Default Children"
}




export default Content;
