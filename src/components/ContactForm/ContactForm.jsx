import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'services/api';
import {toast} from 'react-toastify';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    StyledLabel,
    StyledForm,
    StyledInput,
    StyledButton,
  } from './ContactForm.styled';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phoneRegex = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
    name: yup
    .string()
    .max(30)
    .matches(nameRegex, {
        message: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    })
    .required('Name is required'),
    phone: yup
    .string()
    .min(3)
    .matches(phoneRegex, {
        message: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    })
    .required('Number is reqired')
})

export const ContactForm = () => {

  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const {
      register, 
      handleSubmit,
      formState: {errors},
      reset,
    } = useForm({
      defaultValues: {
        name: '',
        phone: '',
      },
      resolver: yupResolver(schema),
      mode: 'onTouched',
    })
  

   const addNewContact = async data => {
    const normalizeName = data.name.toLowerCase();
    const normalizedphone = data.phone;

    if(contacts.find(item => item.name.toLowerCase() === normalizeName)) {
      return toast.info(`${data.name} has alredy in your contacts`);
    };
    if(contacts.find(item => item.phone === normalizedphone)) {
      return toast.info(`${data.phone} has alredy in your contacts`);
    };
    try{
      await addContact(data);
      toast.info('New contact has been added to your phonebook')
      reset();
    }catch(error) {
      toast.error('Something is wrong. New contact was not added')
    }
   };

    return (
       <StyledForm onSubmit={handleSubmit(addNewContact)}>
        <StyledLabel>
          Name
          <StyledInput
            type="text"
            placeholder="Enter a contact name"
            autoComplete="off"
            {...register('name')}
          />
          {errors.name && <div>{errors.name?.message}</div>}
        </StyledLabel>
        <StyledLabel>
          Phone
          <StyledInput
            type="tel"
            placeholder="Enter a contact phone"
            autoComplete="off"
            {...register('phone')}
          />
          {errors.phone && <div>{errors.phone?.message}</div>}
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
  );
}
