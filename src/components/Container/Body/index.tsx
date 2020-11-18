import {Layout} from 'antd';
import React from 'react';

const Body: React.FC = ({children}) => {
  return (
    <Layout.Content>
      {children}
    </Layout.Content>
  );
};

export default Body;
