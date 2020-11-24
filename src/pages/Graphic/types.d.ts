export type StatisticAge = {
    age: number;
    quantity: number;
};

export type StatisticCity = {
    city: string;
    quantity: number;
};

export type StatisticEtnia = {
    etnia: string;
    quantity: number;
};
export type StatisticFamilyIncome = {
    familyIncome: string;
    quantity: number;
};
v;
export type StatisticSchool = {
    school: number;
    quantity: number;
};
export type StatisticSexo = {
    sexo: string;
    quantity: number;
};
export type StatisticSituationRegistration = {
    situationRegistration: string;
    quantity: number;
};
export type StatisticState = {
    state: string;
    quantity: number;
};
export type StatisticStateCity = {
    city: string;
    state: string;
    quantity: number;
};

export type GetStatisticsAluno = {
    statisticAge: StatisticAge[];
    statisticCity: StatisticCity[];
    statisticEtnia: StatisticEtnia[];
    statisticFamilyIncome: StatisticFamilyIncome[];
    statisticFamilyIncome: StatisticFamilyIncome[];
    statisticSchool: StatisticSchool[];
    statisticSexo: StatisticSexo[];
    statisticSituationRegistration: StatisticSituationRegistration[];
    statisticState: StatisticState[];
    statisticStateCity: StatisticStateCity[];
};
