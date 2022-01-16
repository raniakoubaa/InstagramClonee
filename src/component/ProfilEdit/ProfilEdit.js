import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Form, Button} from 'react-bootstrap'
import './ProfilEdit.css'
import { useParams } from 'react-router-dom';
import { UserEdit } from '../../Redux/Action/ActionInstagram';

const ProfilEdit = () => {
 const {id}=useParams()
 const list = useSelector(state => state.InstagramReduce.Profils)
 const person=list.find(elt => elt.id.toString() === id)
 
    const dispatch = useDispatch()

      const [UserName, setUserName] = useState(person.UserName)
      const [Pseudo, setPseudo] = useState(person.Pseudo)
      const [Bio, setBio] = useState(person.Bio)
      const [Email, setEmail] = useState(person.Email)
      const [Telephon, setTelephon] = useState(person.Telephon)
      const [Genre, setGenre] = useState(person.Genre)
    const handSubmit = (e) => {
        e.preventDefault()
       dispatch(UserEdit({id:person.id, UserName, Pseudo,Bio, Email, Telephon, Genre}))
    }
    return (
        <div className='edit'>
             
            <div className='left' style={{marginLeft:"40px",marginRight:"20px"}}>

                <Col>
                    <Row className='rows'>
                        Modifier profil
                    </Row>
                    <Row className='rows'>
                        Changer de mot de passe
                    </Row>
                    <Row className='rows'>Apps et site web</Row>
                    <Row className='rows'>Email ou texto</Row>
                    <Row className='rows'>Notification push</Row>
                    <Row className='rows'>Gérer les contacts</Row>
                    <Row className='rows'>sécurité et confidentialité</Row>
                    <Row className='rows'>Activité de connexion</Row>
                    <Row className='rows'>Email et instagram</Row>
                    <Row className='rows'>Aide</Row>
                </Col>
            </div>
            <div className='right'>
               
                <Form style={{marginRight:"20px"}} onSubmit={handSubmit}>
                    <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{marginRight:"20px", fontWeight:"bold"}}>Nom </Form.Label>
                        <Form.Control type="text" className='form-control' onChange={(e)=> setPseudo(e.target.value)} value={Pseudo}/>
                    </Form.Group>
                    <p>

                        Aidez les gens à trouver votre compte à l’aide de votre nom le plus connu, que ce soit votre nom complet, votre surnom ou votre nom d’entreprise.
                        Vous pouvez uniquement changer votre nom deux fois tous les 14 jours.</p>
                    <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{marginRight:"20px", fontWeight:"bold"}}>Nom d'utilisateur </Form.Label>
                        <Form.Control type="text"  onChange={(e)=> setUserName(e.target.value)} value={UserName} />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{marginRight:"20px", fontWeight:"bold"}}>Genre </Form.Label>
                        <Form.Control type="text"  onChange={(e)=> setGenre(e.target.value)} value={Genre} />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{marginRight:"20px", fontWeight:"bold"}}>Bio </Form.Label>
                        <Form.Control as="textarea" rows={3}  onChange={(e)=> setBio(e.target.value)} value={Bio}/>
                    </Form.Group>
                    <p>
                        Informations personnelles
                        Fournissez vos informations personnelles, même si le compte est utilisé pour une entreprise, un animal ou autre chose. Elles n’apparaîtront pas sur votre profil public.</p>
                   <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{marginRight:"20px", fontWeight:"bold"}}>Adresse e-mail </Form.Label>
                        <Form.Control type="email" onChange={(e)=> setEmail(e.target.value)} value={Email} />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{marginRight:"20px", fontWeight:"bold"}}>Numéro de téléphone </Form.Label>
                        <Form.Control type="text" onChange={(e)=> setTelephon(e.target.value)} value={Telephon} />
                    </Form.Group>
                    
                    <div class="custom-control custom-checkbox d-flex">
                    <label style={{marginRight:"20px", fontWeight:"bold"}}>
                    Comptes similaires suggérés
                    </label>
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
        <label class="custom-control-label" for="defaultUnchecked">Incluez votre compte lorsque vous recommandez des comptes similaires que les personnes pourraient suivre.</label>
      </div>
      <Button type="submit"> Envoyer </Button>
                </Form>
            </div>






        </div>
    )
}

export default ProfilEdit
