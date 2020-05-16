import React, { FunctionComponent } from 'react';
import Layout from './Layout';
import Title from '@components/atoms/Typography/Title/Title';

interface Props {}

const Welcome: FunctionComponent<Props> = () => {
  return (
    <Layout>
      <Title variant="h2">Design System - Madu App</Title>
      <Title variant="h4">Groupe 5</Title>
    </Layout>
  );
};

export default Welcome;
