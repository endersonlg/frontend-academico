import React from 'react';
import { Layout } from 'antd';

import SideBar from './SideBar';
import Body from './Body';

const Container: React.FC = ({ children }) => {
    return (
        <Layout style={{ height: '100%' }}>
            <Layout.Header
                className="site-layout-sub-header-background"
                style={{ padding: 0 }}
            />
            <Layout>
                <SideBar />
                <Body>{children}</Body>
            </Layout>
        </Layout>
    );
};

export default Container;
