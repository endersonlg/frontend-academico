import { useQuery } from '@apollo/client';
import React from 'react';
import { Treemap } from 'recharts';
import { getStatic } from '../../schema';
import { GetStatisticsAluno } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const TreeMapFamilyIncome: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <h2>Gráfico mapa de Árvores</h2>
            <h3>Renda Familiar dos Alunos</h3>
            <Treemap
                data={data?.getStatisticsAluno.statisticFamilyIncome.map(
                    (family) => ({
                        name: family.familyIncome,
                        value: family.quantity,
                    }),
                )}
            />
        </>
    );
};

export default TreeMapFamilyIncome;
