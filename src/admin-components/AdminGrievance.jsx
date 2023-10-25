import React, { useEffect } from "react"
import AdminNavBar from "./AdminNavbar"
import Grievance from "../student-components/Grievance"
import { useState } from "react"
import axios from "axios"
import { DateTime } from 'luxon';


export default function AdminGrievance() {

    const [allGrievance, setAllGrievance] = useState([])
    useEffect((() => {

        axios.get("http://localhost:4000/grievance/allGrievance")
            .then((response) => {
                setAllGrievance(response.data.grievanceDocs)
                console.log(allGrievance)
            })
            .catch((error) => {
                alert("error while fetching all grievances ")
            })
    }), [])

    return (

        <>
            <AdminNavBar />
            {allGrievance.map((each , i) => (
                <div className="admingrievance--main-div">
                    <div className="admingrievance--sub-div" >
                        <div className="admingrievance--p-div">
                            <div>
                                <p>{each.query}</p>
                                <h5><em>Posted By : {each.postedBy.username}</em></h5>
                                <h5><em>Posted At : {DateTime.fromISO(each.createdAt).toLocaleString(DateTime.DATETIME_MED)}</em></h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}