import React, { useRef } from 'react'
import { Button, DropdownButton, Form, Stack, ButtonGroup, Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
// import { MachineData } from '../data/fleetmanagement'
import { machineType } from '../model/machineModal'

const SearchComponent = ({ handleSearchInputChange, onInputClear, handleMachineTypeDropDown }: any) => {
    let serachInputValue: any = useRef(null)
    const onClearChange = () => {
        serachInputValue.current.value = '';
        onInputClear()
    }
    const machineData = useSelector((state: any) => state.machineDatavalue);
    let machineType = machineData?.map((item: machineType) => item.type)

    const onMachineTypeChange = (type: any) => {
        handleMachineTypeDropDown(type.target.innerText)
    }
    return (
        <Stack direction="horizontal" gap={4}>
            <Form.Control className="me-auto" placeholder="Search machinery name here..." ref={serachInputValue} onChange={handleSearchInputChange} />
            <Button variant="secondary">Submit</Button>
            <div className="vr" />
            <Button variant="outline-danger" onClick={onClearChange}>Clear</Button>
            <div className="vr" />
            <Button variant="outline-danger" onClick={onClearChange}>All</Button>
            <div className="vr" />
            <DropdownButton as={ButtonGroup} title="Filter By Machine Type" id="bg-nested-dropdown" >
                {machineType.map((item: string, index: number) => (
                    (<React.Fragment key={index}>
                        <Dropdown.Item eventKey={item} value={item} onClick={(item) => onMachineTypeChange(item)}>{item}</Dropdown.Item>
                    </React.Fragment>)
                ))}
            </DropdownButton>
        </Stack>
    )
}

export default SearchComponent