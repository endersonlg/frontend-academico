import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import TreeMap from '../../../../components/TreeMap';
import { getStatic } from '../../schema';
import { GetStatisticsAluno, StatisticSchool } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const TreeMapSchool: React.FC = () => {
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
            <TreeMap
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

export default TreeMapSchool;
