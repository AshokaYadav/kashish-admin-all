import { ThirdPartyApi } from "@/apis/op-circle-link";

export type Circle = {
    id: string;
    name: string;
};

export type Operator = {
    id: string;
    name: string;
};

export type ProviderApi = {
    id: string;
    name: string;
    status: boolean;
    url: string;
    params: { [key: string]: string | boolean | number };
    method: string;
};

export type OperatorCircleLink = {
    id: string;
    operator_code: string;
    circle_code: string;
    circle: Circle;
    operator: Operator;
    provider_api: ProviderApi;
};

export type ApiResponse = {
    err: null | string;
    message: string;
    data: OperatorCircleLink[];
};

export type ApiData = {
    id: string;
    name: string;
    circles: Array<Circle & {
        operators: Array<{ id: string; operator_code?: string }>;
        circle_code?: string;
    }>;
    operators: Operator[];
    provider_api: ThirdPartyApi;
}; 