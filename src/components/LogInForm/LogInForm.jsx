import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authOperations";
import * as yup from 'yup';
import { toast } from "react-toastify";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const loginFormSchema = yup.object().shape({
  email: yup
  .string().trim()
  .required('Email is required')
  .matches(emailRegex, {
    message: 'Invalid email.',
  }),
  password: yup
  .string().trim()
  .required('Password is required')
  .min(6),
});

export const LogInForm = () => {
    const dispatch = useDispatch();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm({
        defaultValues: {
          email: '',
          password: '',
        },
        resolver: yupResolver(loginFormSchema),
        mode: 'onTouched',
      });
    
      const loginUser = data => {
        if(data !== Response.ok){
           toast.error('Sorry, this name is not valid.Try again'); 
        }
        dispatch(logIn(data));
          reset();
      };

    return(
        <form onSubmit={handleSubmit(loginUser)} 
        autoComplete="off"
        >
            <label>Email
             <input  type="email"
          placeholder="Enter your email"
          autoComplete="off"
          {...register('email')}
        />
        {errors.email && <div>{errors.email?.message}</div>}
            </label>
            
            <label> Password
                <input  type="password"
          placeholder="Enter your password"
          autoComplete="off"
          {...register('password')}
        />
        {errors.password && <div>{errors.password?.message}</div>}
            </label>
            <button type='submit'>Log In</button>
        </form>
    )
}