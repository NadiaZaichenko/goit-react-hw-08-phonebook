import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {registration } from "redux/auth/authOperations";

import * as yup from 'yup';

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
        reset,
        formState,
      } = useForm({
        defaultValues: {
          name: '',
          email: '',
          password: '',
        },
        resolver: yupResolver(registrationFormSchema),
        mode: 'onTouched',
      });
    
      useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset();
        }
      }, [formState.isSubmitSuccessful, reset]);
    
      const registerUser = data => {
        dispatch(registration(data));
        console.log(data);
      };
    

    return(
        <form onSubmit={handleSubmit(registerUser)} >
          <label>Name
                <input type="text"
          placeholder="Enter your name"
          autoComplete="off"
          {...register('name')}
        />
        {errors.name && <div>{errors.name?.message}</div>}
            </label>
            <label>Email
                <input type="email"
          placeholder="Enter your email"
          autoComplete="off"
          {...register('email')}
        />
        {errors.email && <div>{errors.email?.message}</div>}
            </label>
            <label>Password
                <input  type="password"
          placeholder="Enter your password"
          autoComplete="off"
          {...register('password')}
        />
        {errors.password && <div>{errors.password?.message}</div>}
            </label>
            <button type="submit">Register</button>
        </form>
    )
}