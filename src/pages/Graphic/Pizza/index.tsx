import { useQuery } from '@apollo/client';
import React from 'react';
import { getStatic } from './schema';
import { GetStatisticsAluno } from '../types';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const Pizza: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);
    console.log(data?.getStatisticsAluno);
    return <h1>teste</h1>;
};

export default Pizza;
