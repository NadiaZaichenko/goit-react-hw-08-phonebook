import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import {registration } from "redux/auth/authOperations";
import * as yup from 'yup';
// import { toast } from "react-toastify";
import {
  StyledLabel,
  StyledForm,
  StyledInput,
  StyledButton,
} from './RegisterForm.styled';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const registrationFormSchema = yup.object().shape({
  name: yup.string().trim().required('Name is required'),
  email: yup.string().trim().required('Email is required').matches(emailRegex, {
    message: 'Invalid email.',
  }),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(8),
});

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        // reset,
      } = useForm({
        defaultValues: {
          name: '',
          email: '',
          password: '',
        },
        resolver: yupResolver(registrationFormSchema),
        mode: 'onTouched',
      });
    
      const registerUser = data => {
        dispatch(registration(data));
    }
    

    return(
        <StyledForm onSubmit={handleSubmit(registerUser)} >
          <StyledLabel>Name
                <StyledInput type="text"
          placeholder="Enter your name"
          autoComplete="off"
          {...register('name')}
        />
        {errors.name && <div>{errors.name?.message}</div>}
            </StyledLabel>
            <StyledLabel>Email
                <StyledInput type="email"
          placeholder="Enter your email"
          autoComplete="off"
          {...register('email')}
        />
        {errors.email && <div>{errors.email?.message}</div>}
            </StyledLabel>
            <StyledLabel>Password
                <StyledInput  type="password"
          placeholder="Enter your password"
          autoComplete="off"
          {...register('password')}
        />
        {errors.password && <div>{errors.password?.message}</div>}
            </StyledLabel>
            <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
       
    )
}