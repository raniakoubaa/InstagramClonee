import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Profil from '../Profil/Profil'
import Stories from '../Stories/Stories'
import './Home.css'

const Home = () => {
    const profil = useSelector(state => state.InstagramReduce.Profils)
    
    return (
        <div  className='HomeProfil'>

            <div className='d-flex'>
            
                <div className='item-Card'>
                <Stories profil={profil}/>
                <Profil profil={profil}/>
                </div>
                <div className='item-profil'>
                    <div className='d-flex'>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        className="rounded-circle"
                        style={{ width: "66px" }}
                        alt="Avatar"
                    />
                    <div>
                        <p>Name</p>
                        <p style={{color:"#A2A2A2"}}> User name</p>
                        </div>
                     <Button variant="link" style={{paddingLeft: "50px"}}>Basculer </Button>
                </div>
                <div className='d-flex mt-3 mb-3'><p> Suggestions pour vous </p>
                <Button variant="link" style={{color:"Balck", paddingLeft: "40px"}}>Voir tout</Button>
                </div> 
                <div className='d-flex'>
                    <img
                        src="https://i.pinimg.com/originals/d5/73/07/d57307abf3521a8d8b14b0040fdcfdb7.jpg"
                        className="rounded-circle"
                        style={{ width: "45px" , height: "45px"}}
                        alt="Avatar"
                    />
                    <div>
                        <p>Name</p>
                        <p style={{color:"#A2A2A2"}}> User name</p>
                        </div>
                     <Button variant="link" style={{paddingLeft: "70px"}}>S'abonner </Button>
                </div>
                <div className='d-flex' >
                    <img
                        src="https://www.reviversoft.com/blog/wp-content/uploads/2019/10/Photos-App.jpg"
                        className="rounded-circle"
                        style={{width: "45px" , height: "45px" }}
                        alt="Avatar"
                    />
                    <div>
                        <p>Name</p>
                        <p style={{color:"#A2A2A2"}}> User name</p>
                        </div>
                     <Button variant="link" style={{paddingLeft: "70px"}}>S'abonner </Button>
                </div>
                <div className='d-flex'>
                    <img
                        src="https://www.befunky.com/images/prismic/e78d8ce4-f35c-418a-af63-5d1877e5f0ac_landing-photo-editor-img-2.png?auto=webp&format=jpg&width=863"
                        className="rounded-circle"
                        style={{width: "45px" , height: "45px" }}
                        alt="Avatar"
                    />
                    <div>
                        <p>Name</p>
                        <p style={{color:"#A2A2A2"}}> User name</p>
                        </div>
                     <Button variant="link" style={{paddingLeft: "70px"}}>S'abonner </Button>
                </div>
                </div>
               
            </div>

        </div>
    )
}

export default Home
