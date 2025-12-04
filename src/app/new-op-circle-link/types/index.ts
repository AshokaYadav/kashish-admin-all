// types/index.ts

export type ApiData = {
    id: string;
    name: string;
    isActive: boolean;
    operators: OperatorMapping[];
};

export type OperatorMapping = {
    id: string;
    operatorName: string;
    circleId: string;
    circleName: string;
    circleCode: string;
    operatorCode: string;
};

export type CircleOption = {
    id: string;
    name: string;
};