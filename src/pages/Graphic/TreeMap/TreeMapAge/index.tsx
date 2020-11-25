import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import TreeMap from '../../../../components/TreeMap';
import { getStatic } from '../../schema';
import { GetStatisticsAluno, StatisticAge } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const TreeMapAge: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    const columns: ColumnsType<StatisticAge> = [
        {
            title: 'Intervalo',
            dataIndex: 'age',
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
                dataSource={data?.getStatisticsAluno.statisticAge}
            ></Table>
            <TreeMap
                data={data?.getStatisticsAluno.statisticAge?.map((age) => ({
                    name: age.age.toString(),
                    value: age.quantity,
                }))}
            />
        </>
    );
};

export default TreeMapAge;
