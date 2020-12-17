import React from 'react';
import { Container } from 'react-bootstrap';
import { AddProd } from '../Components/addProductComponent/AddProd';
import { ProdList } from '../Components/productListComponent/ProdList'
import '../Components/main.scss';

export function Home() {

  return (
    <Container className='main-app-body'>
      <AddProd />
      <ProdList />
    </Container>
  );
}
