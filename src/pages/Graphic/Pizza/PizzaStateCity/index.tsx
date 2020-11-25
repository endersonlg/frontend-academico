import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import PizzaChart from '../../../../components/PizzaChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno, StatisticStateCity } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const PizzaStateCity: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    const columns: ColumnsType<StatisticStateCity> = [
        {
            title: 'Estado - Cidade',
            render: (record: StatisticStateCity) =>
                `${record.state} - ${record.city}`,
        },
        {
            title: 'Quantidade',
            dataIndex: 'quantity',
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={data?.getStatisticsAluno.statisticStateCity}
            ></Table>
            <PizzaChart
                data={data?.getStatisticsAluno.statisticStateCity.map(
                    (stateCity) => ({
                        name: `${stateCity.state} - ${stateCity.city}`,
                        value: stateCity.quantity,
                    }),
                )}
            />
        </>
    );
};

export default PizzaStateCity;
