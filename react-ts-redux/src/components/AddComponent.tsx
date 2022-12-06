import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { machineType } from '../model/machineModal';
import { addMachinery } from '../store/store';
const intialMachineryObj: any = {
    type: '',
    weight: null,
    power: '',
    manufacturing_date: '',
    maximum_lift_weight: null,
    model: '',
    title: ''
};
const AddComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [validated, setValidated] = useState(false);
    const machineData = useSelector((state: any) => state.machineDatavalue);
    const [machineryForm, setMachineryForm] = useState(intialMachineryObj)
    const dispatch = useDispatch();
    useEffect(() => {
        let filterData = id && machineData?.filter((data: machineType) => data.model === id)[0];
        filterData ? setMachineryForm(filterData) : setMachineryForm(intialMachineryObj)
    }, [id, machineData])

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            dispatch(addMachinery(machineryForm))
            setValidated(false);
            setMachineryForm(intialMachineryObj)
            navigate('/')
        }
    };

    const filedValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let { name, value } = e.target;
        setMachineryForm({ ...machineryForm, [name]: value });

    }

    const filedVal = (label: any, type: any, value: any) => {
        return (<Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>{`${label[0].toUpperCase() + label.substring(1).replaceAll('_', ' ')}`}</Form.Label>
            <Form.Control
                required
                type={type}
                placeholder={`Enter ${label[0].toUpperCase() + label.substring(1).replaceAll('_', ' ')} here`}
                defaultValue={value}
                onChange={filedValueChange}
                name={label}
            />
        </Form.Group>)
    }
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3" >
                {filedVal("type", "string", machineryForm.type)}
                {filedVal("title", "string", machineryForm.title)}
                {filedVal("model", "string", machineryForm.model)}
                {filedVal("manufacturing_date", "date", machineryForm.manufacturing_date)}
                {filedVal("maximum_lift_weight", "number", machineryForm.maximum_lift_weight)}
                {filedVal("power", "string", machineryForm.power)}
                {filedVal("weight", "number", machineryForm.weight)}
            </Row>
            <Button type="submit">Add Machin</Button>
        </Form >
    );

}

export default AddComponent


