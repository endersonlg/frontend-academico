import React from 'react';
import { Layout, Menu } from 'antd';
import {
    AreaChartOutlined,
    PieChartOutlined,
    UserOutlined,
    BarChartOutlined,
    DotChartOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
    return (
        <Layout.Sider>
            <Menu theme="dark" mode="vertical-left" defaultSelectedKeys={['0']}>
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
                    <Menu.SubMenu
                        key="13"
                        title="Barras"
                        icon={<BarChartOutlined />}
                    >
                        <Menu.Item key="14" icon={<BarChartOutlined />}>
                            <Link to="/graphic/bar/age">Idade</Link>
                        </Menu.Item>
                        <Menu.Item key="15" icon={<BarChartOutlined />}>
                            <Link to="/graphic/bar/etnia">Etnia</Link>
                        </Menu.Item>
                        <Menu.Item key="16" icon={<BarChartOutlined />}>
                            <Link to="/graphic/bar/school">Escola</Link>
                        </Menu.Item>
                        <Menu.Item key="17" icon={<BarChartOutlined />}>
                            <Link to="/graphic/bar/familyIncome">
                                Renda Familiar
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="18" icon={<BarChartOutlined />}>
                            <Link to="/graphic/bar/sexo">Sexo</Link>
                        </Menu.Item>
                        <Menu.Item key="19" icon={<BarChartOutlined />}>
                            <Link to="/graphic/bar/situation">Situação</Link>
                        </Menu.Item>
                        <Menu.Item key="20" icon={<BarChartOutlined />}>
                            <Link to="/graphic/bar/state">Estado</Link>
                        </Menu.Item>
                        <Menu.Item key="21" icon={<BarChartOutlined />}>
                            <Link to="/graphic/bar/city">Cidade</Link>
                        </Menu.Item>
                        <Menu.Item key="22" icon={<BarChartOutlined />}>
                            <Link to="/graphic/bar/stateCity">
                                Estado - Cidade
                            </Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu
                        key="23"
                        icon={<DotChartOutlined />}
                        title="Mapa de Árvore"
                    >
                        <Menu.Item key="24" icon={<BarChartOutlined />}>
                            <Link to="/graphic/tree-map/age">Idade</Link>
                        </Menu.Item>
                        <Menu.Item key="25" icon={<BarChartOutlined />}>
                            <Link to="/graphic/tree-map/etnia">Etnia</Link>
                        </Menu.Item>
                        <Menu.Item key="26" icon={<BarChartOutlined />}>
                            <Link to="/graphic/tree-map/school">Escola</Link>
                        </Menu.Item>
                        <Menu.Item key="27" icon={<BarChartOutlined />}>
                            <Link to="/graphic/tree-map/familyIncome">
                                Renda Familiar
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="28" icon={<BarChartOutlined />}>
                            <Link to="/graphic/tree-map/sexo">Sexo</Link>
                        </Menu.Item>
                        <Menu.Item key="29" icon={<BarChartOutlined />}>
                            <Link to="/graphic/tree-map/situation">
                                Situação
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="30" icon={<BarChartOutlined />}>
                            <Link to="/graphic/tree-map/state">Estado</Link>
                        </Menu.Item>
                        <Menu.Item key="31" icon={<BarChartOutlined />}>
                            <Link to="/graphic/tree-map/city">Cidade</Link>
                        </Menu.Item>
                        <Menu.Item key="32" icon={<BarChartOutlined />}>
                            <Link to="/graphic/tree-map/stateCity">
                                Estado - Cidade
                            </Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
            </Menu>
        </Layout.Sider>
    );
};

export default SideBar;
