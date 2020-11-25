import { useQuery } from '@apollo/client';
import React from 'react';
import { getStatic } from '../schema';
import { GetStatisticsAluno } from '../types';
import BarChart from '../../../components/BarChart';

type QueryResult = {
    getStatisticsAluno: GetStatisticsAluno;
};

const Pizza: React.FC = () => {
    const { data, loading } = useQuery<QueryResult>(getStatic);

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    return (
        <>
            <div>
                <h1>Gráfico de idade</h1>
                <BarChart
                    data={data?.getStatisticsAluno.statisticAge?.map((age) => ({
                        name: age.age.toString(),
                        value: age.quantity,
                    }))}
                />
            </div>

            <div>
                <h1>Gráfico de etnia</h1>
                <BarChart
                    data={data?.getStatisticsAluno.statisticEtnia?.map(
                        (etnia) => ({
                            name: etnia.etnia,
                            value: etnia.quantity,
                        }),
                    )}
                />
            </div>

            <div>
                <h1>Gráfico de Escola</h1>
                <BarChart
                    data={data?.getStatisticsAluno.statisticSchool?.map(
                        (school) => ({
                            name: school.school.toString(),
                            value: school.quantity,
                        }),
                    )}
                />
            </div>

            <div>
                <h1>Gráfico de Sexo</h1>
                <BarChart
                    data={data?.getStatisticsAluno.statisticSexo?.map(
                        (sexo) => ({
                            name: sexo.sexo,
                            value: sexo.quantity,
                        }),
                    )}
                />
            </div>

            <div>
                <h1>Gráfico de Renda Familiar</h1>
                <BarChart
                    data={data?.getStatisticsAluno.statisticFamilyIncome?.map(
                        (familyincome) => ({
                            name: familyincome.familyIncome,
                            value: familyincome.quantity,
                        }),
                    )}
                    invert={true}
                />
            </div>

            <div>
                <h1>Gráfico de Estado</h1>
                <BarChart
                    data={data?.getStatisticsAluno.statisticState?.map(
                        (state) => ({
                            name: state.state,
                            value: state.quantity,
                        }),
                    )}
                    invert={true}
                />
            </div>

            <div>
                <h1>Gráfico de Cidade</h1>
                <BarChart
                    data={data?.getStatisticsAluno.statisticCity?.map(
                        (city) => ({
                            name: city.city,
                            value: city.quantity,
                        }),
                    )}
                    invert={true}
                />
            </div>
        </>
    );
};

export default Pizza;
