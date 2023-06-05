// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import axios from 'axios';

// const menusURL = 'http://localhost:3000/menu';
// const mealsURL = 'http://localhost:3000/meals';

// function AddMenuAndMeals() {
//   const handleSubmit = async (values) => {
//     try {
//       // Add new menu
//       const menuResponse = await axios.post(menusURL, { title: values.menuTitle });
//       const newMenuId = menuResponse.data.id;

//       // Add new meals to the chosen menu
//       const meals = values.meals.map((meal) => ({ ...meal, menu: newMenuId }));
//       await axios.post(mealsURL, meals);

//       // Redirect or perform any other necessary action
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return ( 
//     <>
//     <Formik
//       initialValues={{ menuTitle: '', meals: [{ title: '', description: '' }] }}
//       onSubmit={handleSubmit}
//     >
//       {({ values, handleChange, handleBlur }) => (
//         <Form>
//           <div>
//             <label htmlFor="menuTitle">Menu Title</label>
//             <Field type="text" id="menuTitle" name="menuTitle" />
//             <ErrorMessage name="menuTitle" component="div" />
//           </div>

//           <div>
//             <label htmlFor="meals">Meals</label>
//             {values.meals.map((meal, index) => (
//               <div key={index}>
//                 <div>
//                   <label htmlFor={`meals[${index}].title`}>Title</label>
//                   <Field type="text" id={`meals[${index}].title`} name={`meals[${index}].title`} />
//                   <ErrorMessage name={`meals[${index}].title`} component="div" />
//                 </div>
//                 <div>
//                   <label htmlFor={`meals[${index}].description`}>Description</label>
//                   <Field
//                     type="text"
//                     id={`meals[${index}].description`}
//                     name={`meals[${index}].description`}
//                   />
//                   <ErrorMessage name={`meals[${index}].description`} component="div" />
//                 </div>
//               </div>
//             ))}
//             <button type="button" onClick={() => values.meals.push({ title: '', description: '' })}>
//               Add Meal
//             </button>
//           </div>

//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//     </>
//    );
// }

// export default AddMenuAndMeals;