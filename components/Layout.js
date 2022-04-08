import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
`;

const Layout = ({ children }) => {
    return ( 
        <Container>
            <Header/>
                {children}
            <Footer/>
        </Container>
    );
}
 
export default Layout;