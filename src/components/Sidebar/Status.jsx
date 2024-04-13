import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchStatus } from "../../reducers/actions";
import { filtersSelector } from "../../reducers/selectors";

const statusList = ["In stock", "On Sale"]
function Status() {
    const dispatch = useDispatch();
    const { status } = useSelector(filtersSelector)
    const [collapse, setCollapse] = useState(false)
    
    const handleChangeStatus = (data) => {
        console.log(data);
        let newStatus = [...status];
        let isfindStatus = newStatus.find((item) => item === data)

        if(isfindStatus) {
            newStatus = newStatus.filter((item) => item !== data)
            dispatch(setSearchStatus(newStatus))
        }
        else{
            newStatus.push(data)
            dispatch(setSearchStatus(newStatus))
        } 
    }
    
    return (
        <div className="accordion-item py-2 d-flex flex-column justify-content-center">
            <h5 className="accordion-header">
                <span role="button" className={`accordion-button ${collapse ? 'collapsed' : ''}`}
                    onClick={() => setCollapse(!collapse)}>
                    Product Status
                </span>
            </h5>
            {
                collapse && (
                    <div className="form-group">
                        {
                            statusList.map((item, index) => (
                                <div key={index} className="form-check">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        value={item}
                                        defaultChecked={status.includes(item) ? true : false}
                                        onClick={() => handleChangeStatus(item)} />
                                    <label className="form-check-label">{item}</label>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Status;