import React, { useContext, useState } from "react";
import { ShoppingContext } from "../../context/shopping-context";
import { setSearchStatus } from "../../reducer/actions";

const statusList = ["In stock", "On Sale"]
function Status() {
    const [collapse, setCollapse] = useState(false)
    const {dispatch, state: {filters: {status}}} = useContext(ShoppingContext);

    const handleChangeStatus = (data) => {
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
                            statusList.map((st, index) => (
                                <div key={index} className="form-check">
                                    <input className="form-check-input" 
                                    type="checkbox" 
                                    value={st}
                                    defaultChecked={status.includes(st) ? true : false}
                                    onClick={(e) => handleChangeStatus(e.target.value)}/>
                                    <label className="form-check-label">{st}</label>
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