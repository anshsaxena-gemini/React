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
               gender: "",
               phone: "",
               tandc: false,


           },
           validationSchema: yup.object({
               firstName: yup.string().required("Fisrtname is required !").matches(/^[a-zA-Z ]*$/,"Name is not valid"),
               lastName : yup.string().required("Lastname is required !").matches(/^[a-zA-Z ]*$/,"Name is not valid"),
               email : yup.string().required('Email is required').matches(/^\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}$/,"Must be a valid Email !"),
               gender :  yup.string().required("Select the gender"),
               phone : yup.string().required("Phone Number is required !").matches(/^\d{10}$/,"Not Valid !"),
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
            <form action="" method="post">
            <div>
            <h1 id="head">Register Now</h1>
            </div>
             <div className="container">
                <div>
                    <input type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    name="firstName"
                    placeholder="FirstName"
                    />
                </div>
                <div className="error">
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
                <div className="error">
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
                <div className="error">
                    {formik.touched.email ? formik.errors.email : ""}
                </div>
                <div>
                    <input type="text"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.phone}
                     name="phone"
                     placeholder="Phone Number"
                    />
                </div>
                <div className="error">
                    {formik.touched.phone ? formik.errors.phone : ""}
                </div>
                <div className="radio">
                    <label for="gender">Gender :   </label>
                    <input type="radio" id="male" name="gender"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  
                    ></input>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                    
                    ></input>
                    <label for="female">Female</label>
                   
                    
                    <input type="radio" id="other" name="gender"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     
                    
                    ></input>
                    <label for="other">Other</label>
                  
                </div>
                <div className="error">
                    {formik.touched.gender ? formik.errors.gender : ""}
                </div>
               
                <div className="checkbox">
               
                    <input type="checkbox"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.checkbox}
                     name="tandc"
                    
                    />
                     <label for="">I agree to the Terms and Conditions</label>
                     
                </div>
                
                <div className="error">

                    {formik.touched.tandc ? formik.errors.tandc : ""}
                </div>
                <div>
                  <button type="button" onClick={formik.handleSubmit}>Submit</button>
                </div>
               
               </div>
            </form>
        </div>
        
    )
}

export default Signup;