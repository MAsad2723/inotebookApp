import React, { useState } from 'react'
import { useEffect } from 'react';
const About = () => {
    const host = 'http://localhost:8000'
    const [companies, setCompanies] = useState([])
    const [employees, setEmployees] = useState([])
    const getCompanies = async () => {
        //API Call
        let response = await fetch(`${host}/api/v1/companies/`, {
            method: "GET",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json();
        console.log(json);
        setCompanies(json);
    }
    const getEmployees = async () => {
        //API Call
        let response = await fetch(`${host}/api/v1/employees/`, {
            method: "GET",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json();
        console.log(json);
        setEmployees(json);
    }
    useEffect(() => {
        getCompanies();
        getEmployees();
        // eslint-disable-next-line
    }, [])
    return (
        <div className='container font-20 my-4'>
            <div>
                <h1 className='text-center'>The Details About The Companies</h1>
                <table className='table table-dark table-striped my-4'>
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Company Location</th>
                            <th>Company Details</th>
                            <th>Company Type</th>
                            <th>Active Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company) => {
                            return <tr>
                                <td>{company.name}</td>
                                <td>{company.location}</td>
                                <td>{company.about}</td>
                                <td>{company.type}</td>
                                <td>{company.active ? 'Yes' : 'No'}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                <h1 className='text-center'>The Details About The Employees</h1>
                <table className='table table-dark table-striped my-4'>
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee Email</th>
                            <th>Employee Address</th>
                            <th>Employee Phone</th>
                            <th>Employee Position</th>
                            <th>Employee Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => {
                            return <tr>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.address}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.about}</td>
                                <td>{employee.position}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default About
