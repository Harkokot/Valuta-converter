import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Valuta = ({data})=>{
    const [userValue, setUserValue] = useState(1);
    const [userValuta, setUserValuta] = useState("RUB");
    const [targetValuta, setTargetValuta] = useState("RUB");

    return(
        <div>
            <h1>Конвертация валюты</h1>
            <div className="d-flex">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Начальная валюта</Form.Label>
                        <Form.Select className="mb-3" defaultValue={"RUB"} onChange={(e)=>{
                            setUserValuta(e.target.value)
                        }}>
                            {Object.keys(data).map((item, index)=>{
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </Form.Select>
                        <Form.Control type="number" defaultValue={userValue} className="border-primary" placeholder="Введите значение" onChange={(e)=>{
                            if(e.target.value === "" || isNaN(e.target.value)){
                                setUserValue(0);
                            }
                            else{
                                setUserValue(+e.target.value)
                            }
                        }}/>
                    </Form.Group>
                </Form>
                <Form className="ms-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Конечная валюта</Form.Label>
                        <Form.Select className="mb-3" defaultValue={"RUB"} onChange={(e)=>{
                            setTargetValuta(e.target.value)
                        }}>
                            {Object.keys(data).map((item, index)=>{
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </Form.Select>
                        <div className="border rounded" style={{fontSize: "1rem", height: 38, paddingTop: ".375rem", paddingLeft :".75rem"}}>{Math.round((userValue/data[userValuta]*data[targetValuta])*100)/100}</div>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default Valuta;