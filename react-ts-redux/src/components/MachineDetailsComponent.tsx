import React from 'react'
import { Button, Nav, Stack } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { machineType } from '../model/machineModal'
import { deleteMachinery } from '../store/store';

const MachineDetailsComponent = ({ title, type, model, manufacturing_date, maximum_lift_weight, power, weight }: machineType) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div><span className='field-label'>Type :</span> {type}</div>
            <div><span className='field-label'>Title : </span>{title}</div>
            <div><span className='field-label'>Model : </span>{model}</div>
            <div><span className='field-label'>Manufacturing Date :</span> {manufacturing_date}</div>
            <div><span className='field-label'>Maximum Lift Weight :</span>{maximum_lift_weight}</div>
            <div><span className='field-label'>Power : </span>{power}</div>
            <div><span className='field-label'>Weight : </span>{weight}</div>
            <div className=''>
                <Stack direction="horizontal" gap={4} >
                    <Button variant="secondary" className='ms-auto' > <Nav.Link as={Link} to={`/addMachinery/${model}`}>Edit</Nav.Link></Button>
                    <Button variant="outline-danger" onClick={() => dispatch(deleteMachinery({ title, type, model, manufacturing_date, maximum_lift_weight, power, weight }))}>Delete</Button>
                </Stack>
            </div>

        </div>
    )
}

export default MachineDetailsComponent