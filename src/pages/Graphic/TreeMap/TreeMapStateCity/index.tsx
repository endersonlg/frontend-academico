import { useQuery } from '@apollo/client';
import Table, { ColumnsType } from 'antd/lib/table';
import React from 'react';
import TreeMap from '../../../../components/TreeMap';
import { getStatic } from '../../schema';
import { GetStatisticsAluno, StatisticStateCity } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const TreeMapStateCity: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    const columns: ColumnsType<StatisticStateCity> = [
        {
            title: 'Estado - Cidade',
            render: (record: StatisticStateCity) =>
                `${record.state} - ${record.city}`,
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
                dataSource={data?.getStatisticsAluno.statisticStateCity}
            ></Table>
            <TreeMap
                data={data?.getStatisticsAluno.statisticStateCity.map(
                    (stateCity) => ({
                        name: `${stateCity.state} - ${stateCity.city}`,
                        value: stateCity.quantity,
                    }),
                )}
            />
        </>
    );
};

export default TreeMapStateCity;
