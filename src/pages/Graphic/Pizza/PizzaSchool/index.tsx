import { useQuery } from '@apollo/client';
import Table, { ColumnsType } from 'antd/lib/table';
import React from 'react';
import PizzaChart from '../../../../components/PizzaChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno, StatisticSchool } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const PizzaSchool: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    const columns: ColumnsType<StatisticSchool> = [
        {
            title: 'Escola',
            dataIndex: 'school',
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
                dataSource={data?.getStatisticsAluno.statisticSchool}
            ></Table>
            <PizzaChart
                data={data?.getStatisticsAluno.statisticSchool.map(
                    (school) => ({
                        name: school.school,
                        value: school.quantity,
                    }),
                )}
            />
        </>
    );
};

export default PizzaSchool;
