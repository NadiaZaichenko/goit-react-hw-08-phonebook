import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from "redux/auth/authSelectors";
import { selectFilterValue } from "redux/filter/selectFilter";
import { selectTheme } from "redux/theme/selector";


export const useRefreshUser = () => useSelector(selectIsRefreshing);

export const useFilterValue =() => useSelector(selectFilterValue);

export const useUser =() => useSelector(selectUser);

export const useLoggedIn= () => useSelector(selectIsLoggedIn);

export const useTheme = () => useSelector(selectTheme);