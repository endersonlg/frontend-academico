import { useQuery } from '@apollo/client';
import Table, { ColumnsType } from 'antd/lib/table';
import React from 'react';
import TreeMap from '../../../../components/TreeMap';
import { getStatic } from '../../schema';
import { GetStatisticsAluno, StatisticState } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const TreeMapState: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    const columns: ColumnsType<StatisticState> = [
        {
            title: 'Estado',
            dataIndex: 'state',
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
                dataSource={data?.getStatisticsAluno.statisticState}
            ></Table>
            <TreeMap
                data={data?.getStatisticsAluno.statisticState.map((state) => ({
                    name: state.state,
                    value: state.quantity,
                }))}
            />
        </>
    );
};

export default TreeMapState;
