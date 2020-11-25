import { useQuery } from '@apollo/client';
import React from 'react';
import TreeMap from '../../../../components/TreeMap';
import { getStatic } from '../../schema';
import { GetStatisticsAluno } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const TreeMapEtnia: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <h2>Gráfico mapa de Árvores</h2>
            <h3>Etnia de Alunos</h3>
            <TreeMap
                data={data?.getStatisticsAluno.statisticEtnia?.map((etnia) => ({
                    name: etnia.etnia,
                    value: etnia.quantity,
                }))}
            />
        </>
    );
};

export default TreeMapEtnia;
