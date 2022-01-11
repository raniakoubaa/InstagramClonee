import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import './Login.css'

const Login = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body className="login">
                    <Card.Title>Instagram</Card.Title>
                   
                    <Card.Text>
                        <Form.Control
                            type="text"
                            placeholder="Num, téléphone, nom d'utilisateur ou e-mail"
                            disabled
                            readOnly
                        />
                         <Form.Control
                            type="text"
                            placeholder="Mot de passe"
                            disabled
                            readOnly
                        />
                    </Card.Text>
                    <Card.Link><Button> Connexion </Button></Card.Link>
                    
                    <Card.Text>
                        Ou
                        <img src="./Facebook.png" alt="facebook"/><p>Se connecter avec Facebook</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
