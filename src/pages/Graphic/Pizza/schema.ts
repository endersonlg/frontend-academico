import { gql } from '@apollo/client';

export const getStatic = gql`
    query getStatic {
        getStatisticsAluno {
            statisticEtnia {
                etnia
                quantity
            }
            statisticSchool {
                school
                quantity
            }
            statisticSexo {
                sexo
                quantity
            }
            statisticFamilyIncome {
                familyIncome
                quantity
            }
            statisticState {
                state
                quantity
            }
            statisticCity {
                city
                quantity
            }
            statisticStateCity {
                state
                city
                quantity
            }
            statisticAge {
                age
                quantity
            }
            statisticSituationRegistration {
                situationRegistration
                quantity
            }
        }
    }
`;
