import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import BarChart from '../../../../components/BarChart';
import { getStatic } from '../../schema';
import {
    GetStatisticsAluno,
    StatisticSituationRegistration,
} from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const BarSituation: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    const columns: ColumnsType<StatisticSituationRegistration> = [
        {
            title: 'Situação',
            dataIndex: 'situationRegistration',
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
                dataSource={
                    data?.getStatisticsAluno.statisticSituationRegistration
                }
            ></Table>
            <BarChart
                data={data?.getStatisticsAluno.statisticSituationRegistration.map(
                    (situation) => ({
                        name: situation.situationRegistration,
                        value: situation.quantity,
                    }),
                )}
                invert={true}
            />
        </>
    );
};

export default BarSituation;
