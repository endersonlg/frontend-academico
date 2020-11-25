import { useQuery } from '@apollo/client';
import React from 'react';
import TreeMap from '../../../../components/TreeMap';
import { getStatic } from '../../schema';
import { GetStatisticsAluno } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const TreeMapSchool: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <h2>Gráfico mapa de Árvores</h2>
            <h3>Tipo de escola que estudarão</h3>
            <TreeMap
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

export default TreeMapSchool;
