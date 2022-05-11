import React from "react";
import {Formik,Form,Field, ErrorMessage} from 'formik';
import * as yup from 'yup';


const initialValues = {
    firstName:"",
    lastName :"",
    email: "",
    gender: "",
    phone: "",
    tandc: false,
}
const validationSchema = 
    yup.object({
            firstName: yup.string().required("Fisrtname is required !").matches(/^[a-zA-Z ]*$/,"Name is not valid"),
               lastName : yup.string().required("Lastname is required !").matches(/^[a-zA-Z ]*$/,"Name is not valid"),
               email : yup.string().required('Email is required').matches(/^\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}$/,"Must be a valid Email !"),
               gender :  yup.string().required("Select the gender"),
               phone : yup.string().required("Phone Number is required !").matches(/^\d{10}$/,"Not Valid !"),
               tandc: yup.boolean()
               .oneOf([true], "You must accept the terms and conditions")
    })
const onSubmit =(values) =>{
    console.log(values);
}

function Register(){

    return(
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
          <div className="App">
    <Form>
    <div>
            <h1 id="head">Register Now</h1>
            </div>
             <div className="container">
                <div>
                    <Field type="text"
                    name="firstName"
                    placeholder="FirstName"
                    />
                </div>
                <div className="error">

         
                    <ErrorMessage name="firstName"/>
                </div>
                <div>
                    <Field type="text"
                     name="lastName"
                     placeholder="LastName"
                    />
                </div>
                <div className="error">
                <ErrorMessage name="lastName" />
                </div>
                <div>
                    <Field type="text"
                    name="email"
                    placeholder="Email"
                    />
                </div>
                <div className="error">
                <ErrorMessage name="email"/>
                </div>
                <div>
                    <Field type="text"
                     name="phone"
                     placeholder="Phone Number"
                    />
                </div>
                <div className="error">
                <ErrorMessage name="phone"/>
                </div>
                {/* <div className="radio">
                    <label for="gender">Gender :   
                    <input type="radio" id="male" name="gender[0]"
                    
                    ></input></label>
                    <label for="male">Male
                    <input type="radio" id="female" name="gender[1]"
                    ></input></label>
                    <label for="female">Female

                    <input type="radio" id="other" name="gender"
                    
                    ></input></label>
                    <label for="other">Other</label>
                  
                </div> */}
                <div className="error">
                <ErrorMessage name="gender"/>
                </div>
               
                <div className="checkbox">
                    <Field type="checkbox"
                     name="tandc" 
                    />
                     <label for="">I agree to the Terms and Conditions</label>  
                </div>
                <div className="error">
                <ErrorMessage name="tandc"/>
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
               </div>
    </Form>
    </div>
    </Formik>
    )
}
export default Register;