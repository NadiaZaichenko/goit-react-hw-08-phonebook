import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authOperations";
import * as yup from 'yup';
import { toast } from "react-toastify";
import {
  StyledLabel,
  StyledForm,
  StyledInput,
  StyledButton,
} from './LoginForm.styled';

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
    
      const loginUser = async data => {
        // if(data !== Response){
        //   toast.error('Sorry, this name is not valid.Try again');
        // }
        try{
          await dispatch(logIn(data));
          reset(); 
        } catch(error){
           toast.error('Sorry, this name is not valid'); 
        }     
      };

    //   const registerUser = async data => {
    //     try{
    //       dispatch(registration(data));
    //       reset();
    //     } catch(error){
    //        toast.error('Sorry, this name is not valid'); 
    //     }     
    // }

    return(
        <StyledForm onSubmit={handleSubmit(loginUser)} 
        autoComplete="off"
        >
            <StyledLabel>Email
             <StyledInput  type="email"
          placeholder="Enter your email"
          autoComplete="off"
          {...register('email')}
        />
        {errors.email && <div>{errors.email?.message}</div>}
            </StyledLabel>
            
            <StyledLabel> Password
                <StyledInput  type="password"
          placeholder="Enter your password"
          autoComplete="off"
          {...register('password')}
        />
        {errors.password && <div>{errors.password?.message}</div>}
            </StyledLabel>
            <StyledButton type='submit'>Log In</StyledButton>
        </StyledForm>
    )
}