import { useQuery } from '@apollo/client';
import React from 'react';
import { getStatic } from './schema';
import { GetStatisticsAluno } from '../types';

import { PieChart, Pie, Sector, Cell } from 'recharts';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Pizza: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);
    console.log(data?.getStatisticsAluno);
    return <h1>teste</h1>;
};

export default Pizza;
