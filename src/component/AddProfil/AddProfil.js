import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { FiPlusSquare } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { UserAdd } from '../../Redux/Action/ActionInstagram';

const AddProfil = () => {
    const [show, setShow] = useState(false);
const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ImgPublic, setImgPublic] = useState("")
    const [UserName, setUserName] = useState("")
    const [src, setsrc] = useState("")
    const handSubmit = (e) => {
        e.preventDefault()
        dispatch(UserAdd({ id: Math.random(), UserName:UserName, src:src, ImgPublic:ImgPublic}))

        setUserName("")
        setsrc("")
        setImgPublic("")
    }
        return (
            <div>

                <FiPlusSquare size={24} onClick={handleShow} />

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>
                            Créer une nouvelle publication</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form  onSubmit={handSubmit} style={{marginRight:"60px"}}>
                            Name: <input type="text" className='form-control' onChange={(e) => setUserName(e.target.value)} value={UserName} />
                            Image Profil : <input type="url" className='form-control' onChange={(e) => setsrc(e.target.value)} value={src} />
                            Photo ou vidéo : <input type="url" className='form-control' onChange={(e) => setImgPublic(e.target.value)} value={ImgPublic} />

                            <Button variant="primary" type="submit" onClick={handleClose} style={{marginTop:"20px"}}>
                                Add
                            </Button>
                        </Form>
                    </Modal.Body>
                  

                </Modal>

            </div>

        );
    }

export default AddProfil
