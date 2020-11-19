import { gql } from '@apollo/client';

export const getAlunos = gql`
    query getAlunos {
        getAllAlunos {
            cpf
            etnia
            sexo
            escolaOrigem
            rendaFamiliar
            estado
            cidade
            dataNascimento
            matrSituacao
        }
    }
`;
