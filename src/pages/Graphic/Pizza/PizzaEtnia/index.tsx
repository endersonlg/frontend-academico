import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import React from 'react';
import PizzaChart from '../../../../components/PizzaChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno, StatisticEtnia } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const PizzaEtnia: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    const columns: ColumnsType<StatisticEtnia> = [
        {
            title: 'Etnia',
            dataIndex: 'etnia',
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
                dataSource={data?.getStatisticsAluno.statisticEtnia}
            ></Table>
            <PizzaChart
                data={data?.getStatisticsAluno.statisticEtnia.map((etnia) => ({
                    name: etnia.etnia,
                    value: etnia.quantity,
                }))}
            />
        </>
    );
};

export default PizzaEtnia;
