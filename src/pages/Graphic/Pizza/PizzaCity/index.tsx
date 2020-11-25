import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import PizzaChart from '../../../../components/PizzaChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno, StatisticCity } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const PizzaCity: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    const columns: ColumnsType<StatisticCity> = [
        {
            title: 'Cidade',
            dataIndex: 'city',
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
                dataSource={data?.getStatisticsAluno.statisticCity}
            ></Table>
            <PizzaChart
                data={data?.getStatisticsAluno.statisticCity.map((city) => ({
                    name: city.city,
                    value: city.quantity,
                }))}
            />
        </>
    );
};

export default PizzaCity;
