 import { useDispatch } from "react-redux";
 import { logOut } from "redux/auth/authOperations";
 import { useUser } from "hooks";
 import { useLoggedIn } from "hooks";

 export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useUser();
    const isLoggedIn = useLoggedIn();

    return(
        <>
        {isLoggedIn && (<div>
            <p>Welcome, {user.name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
        </div>)}
        </>
    );
 };