import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Register() {
    const navigate = useNavigate();    
    const {registerHandler} = useContext(UserContext);

    const registerSubmitHandler = async (values) => {
        const {email, password,phone,confirmPassword } = values;

        // Validation
        if(!email || !password || !phone){
            return alert('Email,phone and password are requared');
        }
        if(password !== confirmPassword){
            return alert('Password missmatch');
        }
        try{
            //Register User
            await registerHandler(email,password,phone)

        //redirect to home page
        navigate('/');
        }catch(err){
            alert(err.message)
        }
        
    }

    const {
        register,
        formAction,
        // changeHandler,
        // values,

    } = useForm(registerSubmitHandler,{
        email: '',
        password: '',
        phone: '',
        confirmPassword: '',
    });
    return (
    <section id="register-page" className="content auth">
        <form id="register" action={formAction}>
            <div className="container">
                <div className="brand-logo"></div>
                <h1>Register</h1>

                <p></p>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" {...register('email')} placeholder="Your Email" />

                <label htmlFor="pass">Password:</label>
                <input type="password" {...register('password')} placeholder="Password" />
                
                <label htmlFor="con-pass">Confirm Password:</label>
                <input type="password"  id="confirm-password"  {...register('confirmPassword')} placeholder="Repeat Password" />
                
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" {...register('phone')} placeholder="Your Phone" />

                

                

                <input className="btn submit" type="submit" value="Register" />


            </div>
        </form>
    </section>
    );
}