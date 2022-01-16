import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsFillPersonCheckFill } from 'react-icons/bs'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './Compte.css'

const Compte = () => {
    const {id} = useParams()
    const profils = useSelector(state => state.InstagramReduce.Profils)
    const person= profils.find(elt => elt.id.toString() === id) 
   
    return (
        <div>
      {/* <h1>{user.Email}</h1>  */}
      <Container style={{marginTop:"50px"}}>
                <Row className="rowProfil">
                    <Col className='picture'>
                        
                            <img src={person.src} className="rounded-circle" alt="" width="150px" height="150px" />
                        
                    </Col>
                    <Col>
                        <div className="text-profil">
                            <div className="ProfilName">
                                <div style={{ display: 'flex' }}>
                                    <p style={{fontSize:"28px"}}>{person.UserName}</p>  
                                    <Button variant="light"  style={{ paddingTop: "5px", paddingRight: "8px", height: "30px", width: "112px", border:"1px solid #DBDBDB" }}>
                                        <div style={{ fontSize: "14px", color:"black" }}> Contacter</div>
                                    </Button>                                
                                    <Button variant="light" style={{ paddingTop: "5px", paddingRight: "8px", height: "30px", width: "75px", border:"1px solid #DBDBDB"}}>
                                        <div style={{  height: "28px", width:"24px", marginLeft:"15px"}}><BsFillPersonCheckFill/></div>
                                        </Button>
                                </div>
                            </div>
                            <p style={{fontWeight: "bold"}}>{person.Pseudo}</p>
                            <p style={{fontSize:"16px"}}>{person.Bio}</p>
                            <p>{person.Email}</p>
                           
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <div className='listimage'>
            {UrlImg.map(item => 
            <div >
           <Col>
           <img src={item.src} alt="" width="250px" height="200px"/></Col>
        </div>)} */}
            {/* </div> */}
           
               
        
        </div>
    )
}

export default Compte
