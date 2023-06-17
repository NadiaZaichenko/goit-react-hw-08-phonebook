import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from "redux/auth/authSelectors";
import { selectFilterValue } from "redux/filter/selectFilter";


export const useRefreshUser = () => useSelector(selectIsRefreshing);

export const useFilterValue =() => useSelector(selectFilterValue);

export const useUser =() => useSelector(selectUser);

export const useLoggedIn= () => useSelector(selectIsLoggedIn);
// export const useAuth = () => {
//     const isLoggedIn = useSelector(selectIsLoggedIn);
//     const isRefreshing = useSelector(selectIsRefreshing);
//     const user = useSelector(selectUser);
//     const filterValue = useSelector(selectFilterValue);

//     return{
//         isLoggedIn,
//         isRefreshing,
//         user,
//         filterValue,
        
//     };
// };