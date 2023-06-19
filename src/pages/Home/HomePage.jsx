import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { Container, WelcomeMessage, Image} from './Home.styled';
import phonebook from "../../images/phonebook.jpg";

function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
      <Container>
      {isLoggedIn ? (<WelcomeMessage> Save you contacts</WelcomeMessage>) : (<WelcomeMessage>Welcome to Phonebook!  </WelcomeMessage>)}
      <Image src={phonebook} alt="phonebook"/>
      </Container>
    );
  }

export default Home;