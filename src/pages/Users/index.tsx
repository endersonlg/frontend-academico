import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { getAlunos } from './schema';
import { Aluno } from './types';

type QueryGetAlunos = {
    getAllAlunos: Aluno[];
};

const Users: React.FC = () => {
    const { loading, data } = useQuery<QueryGetAlunos>(getAlunos);

    const columns: ColumnsType<Aluno> = [
        {
            title: 'CPF',
            align: 'center',
            render: (record: Aluno) => (record.cpf ? record.cpf : '--'),
        },
        {
            title: 'Sexo',
            align: 'center',
            render: (record: Aluno) => record.sexo,
        },
        {
            title: 'Data Nascimento',
            align: 'center',
            render: (record: Aluno) => record.dataNascimento,
        },
        {
            title: 'Etnia',
            align: 'center',
            render: (record: Aluno) => record.etnia,
        },
        {
            title: 'Estado',
            align: 'center',
            render: (record: Aluno) => record.estado,
        },
        {
            title: 'Cidade',
            align: 'center',
            render: (record: Aluno) => record.cidade,
        },
        {
            title: 'Escola Origem',
            align: 'center',
            render: (record: Aluno) => record.escolaOrigem,
        },
        {
            title: 'Renda Familiar',
            align: 'center',
            render: (record: Aluno) => record.rendaFamiliar,
        },
        {
            title: 'Matr Situação',
            align: 'center',
            render: (record: Aluno) => record.matrSituacao,
        },
    ];

    return (
        <Table
            dataSource={data?.getAllAlunos}
            loading={loading}
            columns={columns}
        />
    );
};

export default Users;
