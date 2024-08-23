import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from '../02. Home/Home';
import Project from '../03. Product/Project';
import User from '../04. User/User';
import ViewProduct from '../03. Product/ViewProduct';

function Navibar() {
    return (
        <BrowserRouter>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center">
                    <Nav>
                        <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                        <Nav.Link as={Link} to={'/product'}>Product</Nav.Link>
                        <Button as={Link} to={'/user'} variant="primary" className='mx-2'>Cart</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/product' element={<Project />}/>
                <Route path='/user' element={<User />}/>
                <Route path='/ViewProduct/:id' element={<ViewProduct />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navibar;