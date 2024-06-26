import { useDispatch } from 'react-redux';
import css from "./form-register.module.css";
import sprite from "../../img/symbol-defs.svg";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {registerSchema} from "../../shemas/auth-schemas";
import {register} from "../../redux/auth/auth-operations";
import toast from 'react-hot-toast';
const FormRegister=({closeModal})=>{
  const dispatch=useDispatch();
    const initialValues = {
        name:"",
        email: "",
        password: "",
        
      };
      const handleSubmit = async (
        values,
        { setSubmitting, resetForm, setError }
      ) => {
        
        try{
          await dispatch(register(values));
         
        setTimeout(() => {
          toast.success('Register successful!', { position: 'top-center' });
         
          setSubmitting(false);
          resetForm();
          closeModal();
        }, 1000); 
        
        } catch (error) {
          toast.error('Register failed. Please, try again.', {
            position: 'top-center'})
          
          };
          setSubmitting(false);
        }
      
    return(
        <>
        <h1 className={css.title}>Registration</h1>
        <p className={css.text}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
        <Formik 
         initialValues={initialValues}
         validationSchema={registerSchema}
         onSubmit={handleSubmit}
        >
             {({ errors, touched }) => (
            <Form className={css.loginForm}>
            <div className={css.inputsWrapper}>
                <div>
            <Field 
            type="text" 
            name="name" 
            placeholder="Name" 
            className={`${css.authInput} ${errors.name && touched.name ? css.error : ''} ${touched.name && !errors.name ? css.success : ''}`}
             autoComplete="new-name" 
              required/>
              <ErrorMessage
                      component="p"
                      className={css.textError}
                      name="name"
                    />
                    </div>
                    <div>
            <Field 
            type="email"
             name="email"
            placeholder="Email"
            className={`${css.authInput} ${
                errors.email && touched.email ? css.error : ''
              }
        ${touched.email && !errors.email ? css.success : ''}`}
            autoComplete="new-email"
            required/>
             <ErrorMessage
                      component="p"
                      className={css.textError}
                      name="email"
                    />
                    </div>
            <div className={css.inputWrapper}>
           
            
            <div>
            <Field
  type="password" 
  name="password"
  placeholder="Password"
  className={`${css.authInput} ${
    errors.password && touched.password ? css.error : ''
  }
  ${touched.password && !errors.password ? css.success : ''}`}
  autoComplete="new-password" 
  required/>

            <svg className={css.icon}>
                <use href={`${sprite}#icon-eye-off`}></use>
            </svg>
        
            </div>
            <ErrorMessage
                      component="p"
                      className={css.textError}
                      name="password"
                    />
            </div>
            </div>
            <button type="submit" className={css.submitBtn}>Sign Up</button>
            </Form>
             )}
        </Formik>
        </>        

    )
}
export default FormRegister;