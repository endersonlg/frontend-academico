import { useQuery } from '@apollo/client';
import React from 'react';
import { getStatic } from '../schema';
import { GetStatisticsAluno } from '../types';
import PizzaChart from '../../../components/PizzaChart';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const dataaaa = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const Pizza: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    return (
        <>
            <PizzaChart
                data={data?.getStatisticsAluno.statisticAge?.map((age) => ({
                    name: age.age.toString(),
                    value: age.quantity,
                }))}
            />
            <PizzaChart
                data={data?.getStatisticsAluno.statisticEtnia.map((age) => ({
                    name: age.etnia,
                    value: age.quantity,
                }))}
            />
            <PizzaChart data={dataaaa} />
        </>
    );
};

export default Pizza;
