import React from 'react'
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


const Header = () => {

    return (
        <div >
            <Navbar style={{ backgroundColor: "white" }} className='header'>
                <Container style={{ backgroundColor: "white" }} >

                    <Navbar.Brand className='ml-5' style={{ backgroundColor: "white" }}><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" /></Navbar.Brand>
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <FormControl
                            width="265px"
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />

                    </div>

                    <ul className='menu'>
                        <li className='menu-item' ><Link to="/"><FaHome size={24} fill={'black'} /></Link></li>
                        <li className='menu-item'><FiSend size={24} /></li>
                        <li className='menu-item' ><FiPlusSquare size={24} /></li>
                        <li className='menu-item'><FaRegCompass size={24} fill={'black'} /></li>
                        <li className='menu-item'>< FaRegHeart size={24} fill={'black'} />
                        </li>
                        <li className='menu-item'>

                            <Dropdown className='liste'>
                                <Dropdown.Toggle id="dropdown-basic" className="bg-light" style={{ border: "none" }}>
                                    <Image src="https://tse4.mm.bing.net/th?id=OIP.dKq6c1Nh860QmUYwX12hLAHaHa&pid=Api&P=0&w=300&h=300"
                                        className="rounded-circle bg-light" width="24" style={{ cursor: "pointer" }} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <NavDropdown.Item><Link to="/Compte"><CgProfile /> Profil </Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"><i class="far fa-bookmark"></i> Enregistré</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><IoSettingsOutline /> Paramètres</NavDropdown.Item>
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
