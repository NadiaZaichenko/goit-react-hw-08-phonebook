import { useLoggedIn } from "hooks";
import {StyledNavigation, NavigateLink } from "./Navigation.styled";

export const Navigation = () => {
    const isLoggedIn = useLoggedIn();

    return(
        <StyledNavigation>
            <NavigateLink to="/">Home
            </NavigateLink>
            {isLoggedIn && (<NavigateLink to="/contacts">Contacts
            </NavigateLink>)}
        </StyledNavigation>
    )
}