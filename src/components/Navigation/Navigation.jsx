import { useLoggedIn } from "hooks";
import { NavigateLink } from "./Navigation.styled";

export const Navigation = () => {
    const isLoggedIn = useLoggedIn();

    return(
        <nav>
            <NavigateLink to="/">Home
            </NavigateLink>
            {isLoggedIn && (<NavigateLink to="/contacts">Contacts
            </NavigateLink>)}
        </nav>
    )
}