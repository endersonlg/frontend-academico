import { useQuery } from '@apollo/client';
import React from 'react';
import PizzaChart from '../../../../components/PizzaChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const PizzaSituation: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <h2>Gráfico de Pizza</h2>
            <h3>Situação dos Alunos</h3>
            <PizzaChart
                data={data?.getStatisticsAluno.statisticSituationRegistration.map(
                    (situation) => ({
                        name: situation.situationRegistration,
                        value: situation.quantity,
                    }),
                )}
            />
        </>
    );
};

export default PizzaSituation;
