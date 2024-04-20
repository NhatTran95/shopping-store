import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtersSelector } from "../../store/selector";
import filtersSlice from "../../redux-toolkit/filtersSlice";

const statusList = ["In stock", "On Sale"]
function Status() {
    const [collapse, setCollapse] = useState(false)

    const dispatch = useDispatch();
    const { status } = useSelector(filtersSelector)

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
                                     onClick={() => dispatch(filtersSlice.actions.setSearchStatus(item))}
                                      />
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