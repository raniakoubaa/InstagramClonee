import React from 'react'
import { Card } from 'react-bootstrap'
import { BsCursor } from 'react-icons/bs'
import { FaRegBookmark, FaRegComment, FaRegHeart } from 'react-icons/fa'
import './CardProfil.css'
import { BiSmile } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from 'react-redux'
import { UserDelete } from '../../Redux/Action/ActionInstagram'

const ITEM_HEIGHT = 48;

const CardProfil = ({ item }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useDispatch()
    return (

        <div className='Card'>
            <Card style={{ width: '37.5rem' }}>
                <div className='d-flex justify-content-between'>
                    <Link to={`/profil/${item.id}`}>
                        <div className='title-avatar'>

                            <img
                                src={item.src}
                                className="rounded-circle Item"
                                style={{ width: "50px", height: "50px" }}
                                alt="Avatar"
                            />
                            <Card.Title className='card_title'>{item.UserName}</Card.Title>
                        </div>
                    </Link>
                    <div style={{ marginRight: "30px" }}>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '30ch',
                                },
                            }}
                        >
                            <MenuItem onClick={()=>dispatch(UserDelete(item.id))}>
                                Delete
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                Accéder à la publication
                            </MenuItem>

                        </Menu>
                    </div>

                </div>
                <Card.Img variant="top" src={item.ImgPublic} />
                <Card.Body>
                    <div className='icons'>
                        <div className='icons1'>
                            < FaRegHeart size={24} className='icons1-1' />
                            <FaRegComment size={24} className='icons1-1' />
                            <BsCursor size={30} className='icons1-1' />
                        </div>
                        <div className='icons2'>
                            <FaRegBookmark size={25} />
                        </div>
                    </div>


                    <Card.Text>
                        <h6> 635 j'aime</h6>
                        <h6> Commentaire </h6>
                    </Card.Text>
                    <Card.Footer className="text-muted">
                        <div className='comm1'>
                            <BiSmile size={25} fill='black' />
                            <input type="texte" placeholder="Ajouter un commentaire" style={{ border: 'none' }} ></input>
                            {/* <p>Ajouter un commentaire </p> */}
                        </div>
                        <div className='comm2'>
                            <p style={{ color: '#C8E8FD' }}> Publier </p>
                        </div>

                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardProfil
