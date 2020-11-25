import { useQuery } from '@apollo/client';
import React from 'react';
import BarChart from '../../../../components/BarChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const BarAge: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <h2>Gráfico de Bar</h2>
            <h3>Intervalo de idade de Alunos</h3>
            <BarChart
                data={data?.getStatisticsAluno.statisticAge?.map((age) => ({
                    name: age.age.toString(),
                    value: age.quantity,
                }))}
            />
        </>
    );
};

export default BarAge;
