import { ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap';
import { createGlobalStyle } from 'styled-components';

import Footer from './Footer';
import TopNavigation from './TopNavigation';

const BackgroundColor = createGlobalStyle`
  body {
    background-color: #f5f7fb;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <BackgroundColor />
      <Container fluid className="min-vh-100 d-flex flex-column p-0">
        <TopNavigation />
        <ToastContainer position="top-right" autoClose={3000} />
        <Container className="mt-4 mb-5 user-manager-content">
          {children}
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
