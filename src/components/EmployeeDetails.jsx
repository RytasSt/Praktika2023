// import { useParams, useNavigate } from 'react-router-dom'
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { AiOutlineMail } from 'react-icons/ai';
// import { Button } from 'react-bootstrap';


// const baseURL = "http://localhost:3000/employees/";


// function EmployeeDetails() {
    
//     let { id } = useParams();
    
//     const [employee, setEmployee] = useState({});
//     const navigate = useNavigate();
//     useEffect(() => {
//         axios.get(baseURL + id)
//         .then((response) => setEmployee(response.data))
//         .catch((error) => console.log(error))

//     }, [id])

//     return ( 
//         <>
//         <div>
//             <h1>Employee details</h1>
//             <h3>{employee.id}</h3>
//             <h3>{employee.jobTitleName}</h3>
//             <h3>{employee.firstName}</h3>
//             <h3>{employee.lastName}</h3>
//             <h3>{employee.emailAddress} <AiOutlineMail size={20}/></h3>
//             <h3>{employee.phoneNumber}</h3>
//         </div>
//         <Button variant='secondary' onClick={() => navigate("/")}>Back</Button>
//         </>
//      );
// }

// export default EmployeeDetails;