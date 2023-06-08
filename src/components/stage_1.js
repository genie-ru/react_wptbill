import React, { useState, useContext, useRef } from "react";
import { Button, Form, Alert } from 'react-bootstrap';

const Stage1 = () => {
    const textInput = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        console.log(textInput.current.value);
    }
    return(
        <>
            <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="player"
                        ref={textInput}
                    />
                </Form.Group>

                <Button className="miami" variant="primay" type="submit">
                    Add player
                </Button>
            </Form>
        </>
    )
}

export default Stage1;