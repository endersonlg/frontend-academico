import { useQuery } from '@apollo/client';
import React from 'react';
import BarChart from '../../../../components/BarChart';
import { getStatic } from '../../schema';
import { GetStatisticsAluno } from '../../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const BarState: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <h2>Gráfico de Bar</h2>
            <h3>Estados dos Alunos</h3>
            <BarChart
                data={data?.getStatisticsAluno.statisticState.map((state) => ({
                    name: state.state,
                    value: state.quantity,
                }))}
                invert={true}
            />
        </>
    );
};

export default BarState;
