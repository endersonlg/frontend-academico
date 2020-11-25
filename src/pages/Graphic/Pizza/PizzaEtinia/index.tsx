import { useQuery } from '@apollo/client';
import React from 'react';
import PizzaChart from '../../../../components/PizzaChart';
import { GetStatisticsAluno } from '../../types';
import { getStatic } from '../schema';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const PizzaEtnia: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <h2>Gráfico de Pizza</h2>
            <h3>Etnia de Alunos</h3>
            <PizzaChart
                data={data?.getStatisticsAluno.statisticEtnia.map((age) => ({
                    name: age.etnia,
                    value: age.quantity,
                }))}
            />
        </>
    );
};

export default PizzaEtnia;
