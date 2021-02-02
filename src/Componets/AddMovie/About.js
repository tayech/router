import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'
const About = () => {
    let history=useHistory();
    return (
        <div style={{marginTop:"50px"}}>
         <h2>this is my about</h2>
          <p>Films
         Qu'il soit effrayant, comique, dramatique, 
         romantique ou autre, le cinéma sait éveiller nos sens. 
         Et avec autant de titres disponibles,
         il y a tellement de choses à découvrir 
         ! Regardez Netflix gratuitement dès aujourd'hui</p> 
         <Button onClick={()=>history.push('/')}>GoToHome</Button> 
        </div>
    )
}

export default About
