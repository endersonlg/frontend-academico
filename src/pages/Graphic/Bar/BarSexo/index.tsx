import { useQuery } from '@apollo/client';
import Table, { ColumnsType } from 'antd/lib/table';

import React from 'react';
import BarChart from '../../../../components/BarChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno, StatisticSexo } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const BarSexo: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    const columns: ColumnsType<StatisticSexo> = [
        {
            title: 'Sexo',
            dataIndex: 'sexo',
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
                dataSource={data?.getStatisticsAluno.statisticSexo}
            ></Table>
            <BarChart
                data={data?.getStatisticsAluno.statisticSexo.map((sex) => ({
                    name: sex.sexo,
                    value: sex.quantity,
                }))}
            />
        </>
    );
};

export default BarSexo;
