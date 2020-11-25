import { useQuery } from '@apollo/client';
import React from 'react';
import BarChart from '../../../../components/BarChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const BarCity: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <h2>Gráfico de Barra</h2>
            <h3>Cidades dos Alunos</h3>
            <BarChart
                data={data?.getStatisticsAluno.statisticCity.map((city) => ({
                    name: city.city,
                    value: city.quantity,
                }))}
            />
        </>
    );
};

export default BarCity;
