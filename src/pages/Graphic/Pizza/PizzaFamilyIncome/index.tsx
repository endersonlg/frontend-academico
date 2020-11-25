import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import PizzaChart from '../../../../components/PizzaChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno, StatisticFamilyIncome } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const PizzaFamilyIncome: React.FC = () => {
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
            <PizzaChart
                data={data?.getStatisticsAluno.statisticFamilyIncome.map(
                    (family) => ({
                        name: family.familyIncome,
                        value: family.quantity,
                    }),
                )}
            />
        </>
    );
};

export default PizzaFamilyIncome;
