import React from 'react';
import { Layout, Menu } from 'antd';
import {
    AreaChartOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
    return (
        <Layout.Sider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/table-users">Tabela</Link>
                </Menu.Item>
                <Menu.SubMenu
                    key="2"
                    icon={<AreaChartOutlined />}
                    title="Gráfico"
                >
                    <Menu.Item key="3" icon={<PieChartOutlined />}>
                        <Link to="/graphic/pizza">Pizza</Link>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Layout.Sider>
    );
};

export default SideBar;
