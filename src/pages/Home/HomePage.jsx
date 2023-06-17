import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";

function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
      <div>
      {isLoggedIn ? (<p> Save you contacts</p>) : (<p>To get start, please log in</p>)}
      </div>
    );
  }

export default Home;