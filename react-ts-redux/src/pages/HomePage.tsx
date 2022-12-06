import React, { useState, useEffect } from 'react'
import { machineType } from '../model/machineModal'
import MachineDetailsComponent from '../components/MachineDetailsComponent';
import './Pages.scss'
import SearchComponent from '../components/SearchComponent';
import { useSelector } from 'react-redux';
const HomePage = () => {
    const machineData = useSelector((state: any) => state.machineDatavalue);
    const [filerMachineData, setMachineData] = useState(machineData);
    useEffect(() => {
        setMachineData(machineData)
    }, [machineData])

    const onSearchInputChange = (e: any) => {
        let { value } = e.target
        if (value) {
            let data = filerMachineData.filter((data: any) => data.type.toLowerCase().includes(value.toLowerCase()));
            setMachineData([...data])
        } else {
            setMachineData([...machineData])
        }
    }
    const onSearchInputClear = () => {
        setMachineData([...machineData])
    }
    const onMachineTypeSelection = (type: string) => {
        if (type) {
            let data = machineData.filter((data: any) => data.type.toLowerCase().includes(type.toLowerCase()));
            setMachineData([...data])
        } else {
            setMachineData([...machineData])
        }
    }
    return (
        <React.Fragment>
            <span> <hr /></span>
            <SearchComponent handleSearchInputChange={onSearchInputChange} onInputClear={onSearchInputClear} handleMachineTypeDropDown={onMachineTypeSelection} />
            <span> <hr /></span>
            {filerMachineData?.map((data: machineType) => {
                return (<div key={data.model} className="details-conatiner">
                    <MachineDetailsComponent {...data} />
                </div>)
            })}
        </React.Fragment>
    )
}

export default HomePage