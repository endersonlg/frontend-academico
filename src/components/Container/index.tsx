import Layout from 'antd/lib/layout/layout';
import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Container: React.FC = ({ children }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Header/>
      <Body>
        <div className="wrapper">{children}</div>
      </Body>
      <Footer/>
    </Layout>
  );
};

export default Container;
