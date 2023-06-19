 import { useDispatch } from "react-redux";
 import { logOut } from "redux/auth/authOperations";
 import { useUser } from "hooks";
 import { useLoggedIn } from "hooks";
 import { UserName, LogOutButton, UserMenuWrapper } from './UserMenu.styled';


 export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useUser();
    const isLoggedIn = useLoggedIn();

    return(
        <>
        {isLoggedIn && (<UserMenuWrapper>
            <UserName>Welcome, {user.name}</UserName>
            <LogOutButton type="button" onClick={() => dispatch(logOut())}>Log Out</LogOutButton>
        </UserMenuWrapper>)}
        </>
    );
 };