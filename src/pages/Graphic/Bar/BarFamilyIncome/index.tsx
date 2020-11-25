import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import BarChart from '../../../../components/BarChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno, StatisticFamilyIncome } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const BarFamilyIncome: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    const columns: ColumnsType<StatisticFamilyIncome> = [
        {
            title: 'Familia',
            dataIndex: 'familyIncome',
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
                dataSource={data?.getStatisticsAluno.statisticFamilyIncome}
            ></Table>
            <BarChart
                data={data?.getStatisticsAluno.statisticFamilyIncome.map(
                    (family) => ({
                        name: family.familyIncome,
                        value: family.quantity,
                    }),
                )}
                invert={true}
            />
        </>
    );
};

export default BarFamilyIncome;
