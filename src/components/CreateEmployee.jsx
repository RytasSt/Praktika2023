// import {Button, Form} from 'react-bootstrap'
// import {Formik} from 'formik'
// import {useState} from 'react'
// import axios from 'axios'

// const baseURL = "http://localhost:3000/employees/";

// function CreateEmployee() {
//     const [submited, setSubmited] = useState(false);

//     return ( 
//         <>
//         <h1>Create new employee</h1>
//         <Formik
//         initialValues={{
//             firstName: "",
//             lastName: "",
//             jobTitleName: "",
//             emailAddress: "",
//             phoneNumber: ""
//         }}

//         onSubmit={(values, resetForm) => {
//             axios
//             .post(baseURL, values)
//             .then(response => console.log(response.data))
//             resetForm();
//             setSubmited(true)
//         }}


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
//         {submited && <h6>New Employee successfully created</h6>}
        
//         </>
//      );
// }

// export default CreateEmployee;