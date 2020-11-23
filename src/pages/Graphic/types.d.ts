export type StatisticAge = {
    age: Number;
    quantity: Number;
};

export type StatisticCity = {
    city: String;
    quantity: Number;
};

export type StatisticEtnia = {
    etnia: String;
    quantity: Number;
};
export type StatisticFamilyIncome = {
    familyIncome: String;
    quantity: Number;
};
v;
export type StatisticSchool = {
    school: Number;
    quantity: Number;
};
export type StatisticSexo = {
    sexo: String;
    quantity: Number;
};
export type StatisticSituationRegistration = {
    situationRegistration: String;
    quantity: Number;
};
export type StatisticState = {
    state: String;
    quantity: Number;
};
export type StatisticStateCity = {
    city: String;
    state: String;
    quantity: Number;
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
