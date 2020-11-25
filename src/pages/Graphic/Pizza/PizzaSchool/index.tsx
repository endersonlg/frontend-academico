import { useQuery } from '@apollo/client';
import React from 'react';
import PizzaChart from '../../../../components/PizzaChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const PizzaSchool: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <h2>Gráfico de Pizza</h2>
            <h3>Tipo de escola que estudarão</h3>
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
