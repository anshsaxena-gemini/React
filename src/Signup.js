import React from "react";
import {useFormik} from 'formik';
import * as yup from 'yup';
function Signup(){
    const formik = useFormik(
       {
           initialValues:{
               firstName:"",
               lastName :"",
               email: "",
               tandc: false,

           },
           validationSchema: yup.object({
               firstName: yup.string().required("Fisrtname is required"),
               lastName : yup.string().required("Lastname is required"),
               email : yup.string().email('Must be a valid email').required('Email is required'),
               tandc: yup.boolean()
               .oneOf([true], "You must accept the terms and conditions")

           }
           ),
           onSubmit: (values) =>
           {
                console.log(values);
           },
       }

    );
    return (
        <div className="App">
            <form action="">
            <div>
            <h1 id="head">Register Now</h1>
            </div>
                <div>
                    <input type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    name="firstName"
                    placeholder="FirstName"
                    />
                </div>
                <div>
                    {formik.touched.firstName ? formik.errors.firstName : ""}
                </div>
                <div>
                    <input type="text"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.lastName}
                     name="lastName"
                     placeholder="LastName"
                    />
                </div>
                <div>
                    {formik.touched.lastName ? formik.errors.lastName : ""}
                </div>
                <div>
                    <input type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    name="email"
                    placeholder="Email"
                    />
                </div>
                <div>
                    {formik.touched.email ? formik.errors.email : ""}
                </div>
                <div>
                <label for="">i'm not a robot</label>
                    <input type="checkbox"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.checkbox}
                     name="tandc"
                    
                    />
                     
                </div>
                
                <div>

                    {formik.touched.tandc ? formik.errors.tandc : ""}
                </div>
                <div>
                    <a href="https://www.google.com/"><button type="button" onClick={formik.handleSubmit}>Submit</button></a>
                </div>
               
               
            </form>
        </div>
    )
}

export default Signup;