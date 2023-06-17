import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchContacts } from "redux/operation";
import { selectIsLoading } from "redux/selectors";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";

export const Tasks = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts())
    },[dispatch]);

    return (
        <>
        <Helmet>
            <title>Your contacts</title>
        </Helmet>
        <ContactForm/>
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList/>
        </>
    );
}
