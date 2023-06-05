import axios from 'axios'
import { useState, useEffect } from 'react'
import Employee from './Employee';
import {Table, Button} from 'react-bootstrap'
import { Formik } from 'formik';

const baseURL = "http://localhost:3000/employees/";

function Home() {
    const [employees, setEmployees] = useState([]);
    const [deletedEmployee, setDeletedEmployee] = useState({});
    const [jobTitleNames, setJobTitleNames] = useState(new Set());

    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setEmployees(response.data);
        setJobTitleNames(
          new Set(response.data.map((employee) => employee.jobTitleName))
        );
      });
    }, [deletedEmployee]);

      function filterHandler(filterObject) {
        if (filterObject.jobTitleName === "All") {
          axios.get(baseURL).then((response) => setEmployees(response.data));
        } else {
          let filterParams = new URLSearchParams(filterObject).toString();
          axios
            .get(baseURL + "?" + filterParams)
            .then((response) => setEmployees(response.data));
        }
      }        
    
        let jobTitleNamesjsx = Array.from(jobTitleNames).map((fName, index) => (
          <option value={fName} key={index}>
            {fName}
          </option>
        ));

    let employeesjsx = employees.map((employee, index) => <Employee employee={employee} deleteSetter={setDeletedEmployee} key={index}/>)
    return ( 
        <>
        <div id="filter">
          <Formik
            initialValues={{ jobTitleName: "All" }}
            onSubmit={(values) => {
              filterHandler(values);
            }}
          >
            {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <select
                  name="jobTitleName"
                  value={values.jobTitleName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="All">All</option>
                  {jobTitleNamesjsx}
                </select>
                <Button type="submit" variant="secondary">
                  Filter
                </Button>
              </form>
            )}
          </Formik>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Job Title</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{employeesjsx}</tbody>
        </Table>
        </>
     );
}

export default Home;
