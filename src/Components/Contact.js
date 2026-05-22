import React from 'react'
import { Button, Form, FormGroup } from "react-bootstrap";

const Contact = () => {
    return (
        <div className='container my-5'>
            <div className=' contact'>
                <h1 className="text-center">Entrez en contact</h1>
                <Form>
                    <FormGroup>
                        <Form.Label className="label pt-2">
                            Nom
                        </Form.Label>
                        <Form.Control type='text' className="form-control" />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label className="label pt-2">
                            Email
                        </Form.Label>
                        <Form.Control className="form-control" />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label className="label pt-2">
                            Message
                        </Form.Label>
                        <Form.Control className="form-control" />

                    </FormGroup>
                    <Button className='my-3'>
                        Envoyez le message
                    </Button>

                </Form>
            </div>

        </div>
    )
}

export default Contact