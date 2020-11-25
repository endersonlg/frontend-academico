import { useQuery } from '@apollo/client';
import React from 'react';
import TreeMap from '../../../../components/TreeMap';
import { getStatic } from '../../schema';
import { GetStatisticsAluno } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const TreeMapSexo: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <h2>Gráfico mapa de Árvores</h2>
            <h3>Sexo dos Alunos</h3>
            <TreeMap
                data={data?.getStatisticsAluno.statisticSexo.map((sex) => ({
                    name: sex.sexo,
                    value: sex.quantity,
                }))}
            />
        </>
    );
};

export default TreeMapSexo;
