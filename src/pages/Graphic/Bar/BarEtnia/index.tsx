import { useQuery } from '@apollo/client';
import Table, { ColumnsType } from 'antd/lib/table';
import React from 'react';
import BarChart from '../../../../components/BarChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno, StatisticEtnia } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const BarEtnia: React.FC = () => {
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
            <BarChart
                data={data?.getStatisticsAluno.statisticEtnia.map((etnia) => ({
                    name: etnia.etnia,
                    value: etnia.quantity,
                }))}
            />
        </>
    );
};

export default BarEtnia;
