import { axiosInstance } from "@/lib/axios";
import { ResponseType } from '../utils';


export interface RechargeResponse extends ResponseType<any> { }

export async function fetchMonthlyRevenue() {
    const { data } = await axiosInstance.get<any>('recharge/stats/monthly-commission');
    return data;
}

export async function fetchRechargeSuccessRate() {
    const { data } = await axiosInstance.get<any>('recharge/stats/success-rate');
    return data;
}


export interface IPackInfo {
    rs: number;
    validity: string;
    desc: string;
}

export interface RData {
    [key: string]: IPackInfo[];
}

export interface IPackInfoDthDetails {
    PlanName: string,
    Channels: string,
    PaidChannels: string,
    HdChannels: string,
    last_update: string,
    PricingList: { Amount: string, Month: string }[]
}

export interface IPackInfoDth {
    Language: string;
    PackCount: string;
    Details: IPackInfoDthDetails[];
}

export interface RDataDth {
    [key: string]: IPackInfoDth[];
}


export interface IRechargePlansRes {
    ERROR: string;
    STATUS: string;
    Operator: string;
    Circle: string;
    MESSAGE: string;
    RDATA: RData | null;
}

export interface IRechargePlansDth {
    ERROR: string;
    STATUS: string;
    Operator: string;
    RDATA: RDataDth | null;
    MESSAGE: string;
}


export async function fetchPlansByThirdPartyProvider(opearatorCode: string = '', circleCode: string = "") {
    const { data } = await axiosInstance.post<ResponseType<IRechargePlansRes>>('/recharge/fetch-plans', {
        opCode: opearatorCode, circleCode: circleCode
    });
    return data.data;
}

export async function fetchDthPlansByThirdPartyProvider(opearatorCode: string = '') {
    const { data } = await axiosInstance.post<ResponseType<IRechargePlansRes>>('/recharge/fetch-plans-dth', {
        // const { data } = await axiosInstance.post<ResponseType<IRechargePlansDth>>('/recharge/fetch-plans-dth', {
        opCode: opearatorCode
    });
    return data.data;
}




export interface ICirclesOperatorRes {
    id: string;
    operator_id: string;
    operator_code: string;
    circle_id: string;
    circle_code: string;
    provider_api_id: string;
    createdAt: string;
    updatedAt: string;
    circle: {
        id: string;
        name: string;
    },
    operator: {
        id: string;
        name: string;
    },
    provider_api: {
        id: string;
        name: string;
    }
    // Circle: string;
    // CircleCode: string | null
    // ERROR: string | null;
    // Message: string | null;
    // Mobile: string;
    // OpCode: string | null;
    // Operator: string;
    // STATUS: number;
}


export async function fetchOperatorsNCircleByThirdPartyProviderMobile(mobile: string = '') {
    const { data } = await axiosInstance.put<ResponseType<ICirclesOperatorRes>>('/op-circle-link/fetch-op-circle', { mobile });
    return data;
}

export async function fetchOperatorsByThirdPartyProviderDth(dth_number: string = '') {
    const { data } = await axiosInstance.put<ResponseType<ICirclesOperatorRes>>('/op-circle-link/fetch-op-circle-dth', { dth_number });
    return data;
}