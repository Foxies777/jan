import React from "react";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import './Accordions.scss'
import AccordionItem from "./AccordionItem";
import AccordionBody from "./AccordionBody";

function Accordions(props) {
    let [time, setTime] = useState(1)
    function prev() {
        if (time == 1) {
            setTime(1)
        }
        else {
            setTime(time - 1)
        }
    }
    function next() {
        setTime(time + 1)
    }
    return (
        <div className="Container">
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h3>Прокат экеперовки</h3>
                        <div className="image-1"></div>
                    </Accordion.Header>
                    <Accordion.Body>

                        <AccordionItem title='Комплект' description='(горные лыжи или сноуборды, ботинки и палки)'>
                            <AccordionBody title='Комфорт' />
                            <AccordionBody title='Премиум' />
                            <AccordionBody title='Детский' />
                        </AccordionItem>
                        <AccordionItem title='Горные лыжи / сноуборд'>
                            <AccordionBody title='Комфорт' />
                            <AccordionBody title='Премиум' />
                            <AccordionBody title='Детский' />
                        </AccordionItem>
                        <AccordionItem title='Ботинки'>
                            <AccordionBody title='Взрослый' />
                            <AccordionBody title='Детский' />
                        </AccordionItem>
                        <AccordionItem title='Палки для горных лыж'>
                            <AccordionBody title='Взрослый' />
                            <AccordionBody title='Детский' />
                        </AccordionItem>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h3>Тренерство</h3>
                        <div className="image-2"></div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <AccordionItem title='Горные лыжи'>
                            <AccordionBody title='Индивидуальные' />
                            <AccordionBody title='Групповые' >
                                <div className="count">
                                    <p>Количество человек</p>

                                    <div className="time">
                                        <div><button onClick={prev}>-</button></div>
                                        <div className="time_count">{time}</div>
                                        <button onClick={next}>+</button>
                                    </div>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem title='Сноуборд'>
                            <AccordionBody title='Индивидуальные' />
                            <AccordionBody title='Групповые' >
                                <div className="count">
                                    <p>Количество человек</p>

                                    <div className="time">
                                        <div><button onClick={prev}>-</button></div>
                                        <div className="time_count">{time}</div>
                                        <button onClick={next}>+</button>
                                    </div>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Accordions;