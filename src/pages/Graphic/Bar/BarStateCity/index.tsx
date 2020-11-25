import { useQuery } from '@apollo/client';
import React from 'react';
import BarChart from '../../../../components/BarChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const BarStateCity: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <h2>Gráfico de Bar</h2>
            <h3>Estado e Cidade dos Alunos</h3>
            <BarChart
                data={data?.getStatisticsAluno.statisticStateCity.map(
                    (stateCity) => ({
                        name: `${stateCity.state} - ${stateCity.city}`,
                        value: stateCity.quantity,
                    }),
                )}
                invert={true}
            />
        </>
    );
};

export default BarStateCity;
