import { useQuery } from '@apollo/client';
import React from 'react';
import TreeMap from '../../../../components/TreeMap';
import { getStatic } from '../../schema';
import { GetStatisticsAluno } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const TreeMapCity: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <h2>Gráfico mapa de Árvores</h2>
            <h3>Cidades dos Alunos</h3>
            <TreeMap
                data={data?.getStatisticsAluno.statisticCity?.map((city) => ({
                    name: city.city.toString(),
                    value: city.quantity,
                }))}
            />
        </>
    );
};

export default TreeMapCity;
