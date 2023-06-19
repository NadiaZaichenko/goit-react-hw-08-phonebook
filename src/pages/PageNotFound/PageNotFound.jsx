import pictureError from '../../images/404-not-found.jpg';
import { Image, Container, Main } from './PageNotFound.styled';

const PageNotFound = () => {
    return (
        <Main>
          <Container>
              <Image src ={pictureError} alt ="Error 404"/>
          </Container>
        </Main>
        
    )
}

export default PageNotFound;