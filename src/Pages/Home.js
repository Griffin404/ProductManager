import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { AddProd } from '../Components/AddProd';
import { ProdList } from '../Components/ProdList'

export function Home() {

  return (
    <Container>
      <AddProd />
      <ProdList />
    </Container>
  );
}
