import PropTypes from 'prop-types'
import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'services/contactsApi';
import { ListItem, StyledButton } from './ContactItem.styled'

export const ContactItem = ({id, name, phone}) => {
    const [deleteContact] = useDeleteContactMutation();

    const contactDeleteOf = async (contactId, contactName) => {
     try {
        await deleteContact(contactId);
        toast.info(`${contactName} has been deleted `);
     } catch (error) {
        toast.error(`Something was wrong, ${contactName} was not deleted`)
     }

    }
return (
    <ListItem>
        <p>{name} : {phone}</p>
        <StyledButton type="button" 
        onClick={() => contactDeleteOf(id, name)}>
            Delete
        </StyledButton>
    </ListItem>
);
}

ContactItem.propTypes ={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,

}