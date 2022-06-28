import { useFormik } from 'formik'
import * as yup from 'yup';
import React from 'react'
import styles from './Form.module.css'

function Form() {

    const formik = useFormik(
         {
            initialValues : {
                name : "",
                email : ""
            },
            validationSchema : yup.object({
                name: yup.string().required("Name is required !").matches(/^[a-zA-Z ]*$/,"Name is not valid"),
                email: yup.string().email('Must be a valid email').max(255).required('Email is required')
            }
            )
         }
    );
 
    const handleSubmit =(event) =>{
          event.preventDefault();
         
        if(formik.values.name.length ===0 || formik.values.email.length===0){
            return;
        }

        alert("success")
       
          
    }
  
  return (
    <div className={styles.Container}>
     <form onSubmit={handleSubmit}>
     <input
     type="text"
     className={styles.input}
     placeholder='Enter your name'
     name='name'
     value={formik.values.name}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur} /> 
     <div className={styles.error}>
        {formik.touched.name ? formik.errors.name : ""}
     </div>
     <br></br>
    <input
    className={styles.input}
     type="text"
     name='email'
     placeholder='Enter your Email'
     value={formik.values.email}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur} />
      <div className={styles.error}>
        {formik.touched.email ? formik.errors.email : ""}
     </div>
     <br></br>
     <button disabled={formik.errors.name || formik.errors.email} className={styles.btn} type="submit" >Submit</button>
     </form>

    </div>
  )
}

export default Form