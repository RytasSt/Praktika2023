// import { CgDetailsMore } from 'react-icons/cg'
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
// import axios from 'axios';
// import { deleteHandler } from '../../services/deleteHandler';
// import { Link } from 'react-router-dom'

// const baseURL = "http://localhost:3000/employees/";

// function Employee({ employee, deleteSetter }) {
//     let deleteEmployee = (id) => {
//         axios.delete(baseURL + id)
//         .then(response => deleteSetter(response))
//     }
//     return ( 
//         <>
//         <tr>
//             <td>{employee.id}</td>
//             <td>{employee.firstName}</td>
//             <td>{employee.lastName}</td>
//             <td>{employee.jobTitleName}</td>
//             <td>{employee.emailAddress}</td>
//             <td>{employee.phoneNumber}</td>
//             <td><Link to={"/details/" + employee.id}><CgDetailsMore size={25} color={"#212529"}/></Link></td>
//             <td><Link to={"/edit/" + employee.id}><AiOutlineEdit size={25} color={"#8d0b7e"}/></Link></td>
//             <td><AiOutlineDelete size={25} color={"#8d0b7e"} onClick={() => deleteHandler(employee, deleteEmployee)} /></td>
//         </tr>
//         </>
//      );
// }

// export default Employee;