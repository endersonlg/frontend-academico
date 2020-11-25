import React from 'react';
import { Layout, Menu } from 'antd';
import {
    AreaChartOutlined,
    PieChartOutlined,
    UserOutlined,
    BarChartOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
    return (
        <Layout.Sider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <Link to="/table-users">Tabela</Link>
                </Menu.Item>
                <Menu.SubMenu
                    key="2"
                    icon={<AreaChartOutlined />}
                    title="Gráfico"
                >
                    <Menu.SubMenu
                        key="3"
                        icon={<PieChartOutlined />}
                        title="Pizza"
                    >
                        <Menu.Item key="4" icon={<BarChartOutlined />}>
                            <Link to="/graphic/pizza/age">Idade</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<BarChartOutlined />}>
                            <Link to="/graphic/pizza/etnia">Etnia</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<BarChartOutlined />}>
                            <Link to="/graphic/pizza/school">Escola</Link>
                        </Menu.Item>
                        <Menu.Item key="7" icon={<BarChartOutlined />}>
                            <Link to="/graphic/pizza/familyIncome">
                                Renda Familiar
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8" icon={<BarChartOutlined />}>
                            <Link to="/graphic/pizza/sexo">Sexo</Link>
                        </Menu.Item>
                        <Menu.Item key="9" icon={<BarChartOutlined />}>
                            <Link to="/graphic/pizza/situation">Situação</Link>
                        </Menu.Item>
                        <Menu.Item key="10" icon={<BarChartOutlined />}>
                            <Link to="/graphic/pizza/state">Estado</Link>
                        </Menu.Item>
                        <Menu.Item key="11" icon={<BarChartOutlined />}>
                            <Link to="/graphic/pizza/city">Cidade</Link>
                        </Menu.Item>
                        <Menu.Item key="12" icon={<BarChartOutlined />}>
                            <Link to="/graphic/pizza/stateCity">
                                Estado - Cidade
                            </Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
                <Menu.Item key="13" icon={<BarChartOutlined />}>
                    <Link to="/graphic/bar">Barras</Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    );
};

export default SideBar;
