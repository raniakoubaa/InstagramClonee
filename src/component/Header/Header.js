import React, { useState } from 'react'
import { Navbar, Container, Image, FormControl, NavDropdown, Dropdown } from 'react-bootstrap'
import './Header.css'
import { FaHome } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FiPlusSquare, FiSend } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { FiRefreshCcw } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddProfil from '../AddProfil/AddProfil';
import Search from '../Search/Search';




const Header = () => {
    const list = useSelector(state => state.InstagramReduce.Profils)
 
    return (
        <div >
            <Navbar style={{ backgroundColor: "white" }} className='header'>
                <Container style={{ backgroundColor: "white" }} >

                    <Navbar.Brand className='ml-5' style={{ backgroundColor: "white" }}><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" /></Navbar.Brand>
                   <Search/>

                    <ul className='menu'>
                        <li className='menu-item' ><Link to="/"><FaHome size={24} fill={'black'} /></Link></li>
                        <li className='menu-item'><FiSend size={24} /></li>
                        <li className='menu-item' ><AddProfil/></li>
                        <li className='menu-item'><FaRegCompass size={24} fill={'black'} /></li>
                        <li className='menu-item'>< FaRegHeart size={24} fill={'black'} />
                        </li>
                        <li className='menu-item'>

                            <Dropdown className='liste'>
                                <Dropdown.Toggle id="dropdown-basic" className="bg-light" style={{ border: "none" }}>
                                    <Image src={list[0].src}
                                        className="rounded-circle bg-light" width="24" style={{ cursor: "pointer" }} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <NavDropdown.Item><Link to={`/detail/${list[0].id}`}><CgProfile /> Profil </Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"><i class="far fa-bookmark"></i> Enregistré</NavDropdown.Item>
                                    <NavDropdown.Item> <Link to={`/edit/${list[0].id}`}><IoSettingsOutline /> Paramètres</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4"><FiRefreshCcw /> Changer de compte</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/Login">Déconnexion </Link></NavDropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </Container>
            </Navbar>
        </div >
    )
}

export default Header
