import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Temperature = ()=>{
    const [temp, setTemp] = useState(0);
    return(
        <div>
            <h1>Конвертация температуры</h1>
            <div className="d-flex">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Температура в цельсиях</Form.Label>
                        <Form.Control type="number" defaultValue={temp} className="border-primary" placeholder="℃" onChange={(e)=>{
                            if(e.target.value === "" || isNaN(e.target.value)){
                                setTemp(0);
                            }
                            else{
                                setTemp(+e.target.value)
                            }
                        }}/>
                    </Form.Group>
                </Form>
                <Form className="ms-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Температура в фаренгейтах</Form.Label>
                        <div className="border rounded" style={{fontSize: "1rem", height: 38, paddingTop: ".375rem", paddingLeft :".75rem"}}>{Math.round((temp*1.8 + 32)*100)/100} ℉</div>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default Temperature;