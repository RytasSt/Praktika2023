// import {Button, Form} from 'react-bootstrap'
// import {Formik} from 'formik'
// import {useState, useEffect} from 'react'
// import axios from 'axios'
// import { useNavigate, useParams } from 'react-router-dom'

// const baseURL = "http://localhost:3000/employees/";

// function EditEmployee() {
//     const { id } = useParams();
//     const [activeEmployee, setActiveEmployee] = useState({
//         firstName: "",
//         lastName: "",
//         jobTitleName: "",
//         emailAddress: "",
//         phoneNumber: ""
//     });

//     let navigate = useNavigate();

//     useEffect(() => {
//         axios.get(baseURL + id)
//         .then(promise => setActiveEmployee(promise.data))
//         .catch(error => console.log(error))
//     }, [id])


//     // const [submited, setSubmited] = useState(false);

//     return ( 
//         <>
//         <h1>Edit Employee</h1>
//         <Formik
//         initialValues={activeEmployee}

//         onSubmit={(values) => {
//             axios
//             .put(baseURL + id, values)
//             .then(response => console.log(response.data))
//             navigate("/");
//         }}
//         enableReinitialize

//         >
//             {({values, handleChange, handleBlur, handleSubmit, dirty})=> (
//             <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="First Name"
//                 name="firstName"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.firstName}
               
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Last Name"
//                 name="lastName"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.lastName}
                
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Job Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Job Title"
//                 name="jobTitleName"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.jobTitleName}
               
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Email"
//                 name="emailAddress"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.emailAddress}
                
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="phone"
//                 placeholder="Phone"
//                 name="phoneNumber"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.phoneNumber}
//                      />
//             </Form.Group>
//             <Button variant="secondary" type="submit" disabled={!dirty}>
//               Submit
//             </Button>
//           </Form>
//           )}
//         </Formik>
//         {/* {submited && <h6>New Employee successfully created</h6>} */}
//         <Button variant='secondary' onClick={() => navigate("/")}>Back</Button>
//         </>
//      );
// }

// export default EditEmployee;