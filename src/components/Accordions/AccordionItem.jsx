import React from 'react'
import { Accordion } from "react-bootstrap";

const AccordionItem = (props) => {
    
    return (
        <Accordion defaultActiveKey='0' flush>
            <Accordion.Item>
                <Accordion.Header>
                    <div className="text">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    {props.children}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionItem