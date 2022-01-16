import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import './ProfilDetail.css'

const ProfilDetail = () => {
    const {id} = useParams()
    const list = useSelector(state => state.InstagramReduce.Profils)
    
    const person=list.find(elt => elt.id.toString() === id)
    let UrlImg = [
        {
          src: "https://static.remove.bg/remove-bg-web/126e8851f6e88bf644890fafdf1b0d82aff0629e/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
          title: "image1",
        },
        {
          src: "https://www.inpixio.com/remove-background/images/main-before.jpg",
          title: "image2",
        },
        {
          src: "https://www.slazzer.com/static/images/remove_image_background.jpg",
          title: "image3",
        },
        {
          src:
            "https://techager.com/wp-content/uploads/2021/06/How-to-100-Remove-Background-from-Image-online.jpg",
          title: "image4",
        },
            {
              src: "https://tse2.mm.bing.net/th?id=OIP.lnc1n2ikYO0-wdSXwasPWAHaLH&pid=Api&P=0&w=107&h=160" ,
              title: "image3",
            },
            {
              src:
                "https://tse4.mm.bing.net/th?id=OIP.-Y4Vm4ocH1OmaUPjWj7vxAHaHa&pid=Api&P=0&w=176&h=176",
              title: "image4",
            },
            {
              src:
              "https://tse4.mm.bing.net/th?id=OIP.hCwviTSfwXRNOzUzTUY8PAHaFj&pid=Api&P=0&w=217&h=162",
              title: "image5",
            },
            {
              src:
              "https://static1.purepeople.com/articles/8/36/57/68/@/5273693-la-reine-rania-et-le-roi-abdullah-ii-de-624x600-3.jpg",
              title: "image5",
            }
      ];
    return (
         <div>
            <Container>
                <Row className="rowProfil">
                    <Col className='picture'>
                        
                            <img src={person.src} className="rounded-circle" alt="" width="150px" height="150px" />
                        
                    </Col>
                    <Col>
                        <div className="text-profil">
                            <div className="ProfilName">
                                <div style={{ display: 'flex' }}>
                                    <p style={{fontSize:"28px"}}>{person.UserName}</p>
                                    <Link to={`/edit/${person.id}`}>
                                    <Button variant="light"  style={{ paddingTop: "5px", paddingRight: "8px", height: "30px", width: "112px", border:"1px solid #DBDBDB" }}>
                                        <div style={{ fontSize: "14px", color:"black" }}> Modifier profil</div>
                                    </Button></Link> 
                                    
                                    <Button variant="light" style={{ paddingTop: "5px", paddingRight: "8px", height: "30px", width: "75px", border:"1px solid #DBDBDB" }}>
                                        <div style={{  height: "28px", width:"24px"}}><BsFillPersonCheckFill/></div>
                                        </Button>
                                </div>
                            </div>
                            <p style={{fontSize:"16px"}}>{person.Bio}</p>
                            <p>{person.Pseudo}</p>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='listimage'>
            {UrlImg.map(item => 
            <div >
           <Col>
           <img src={item.src} alt="" width="250px" height="200px"/></Col>
        </div>)}
            </div>
           
             </div>
      
    )
}

export default ProfilDetail
