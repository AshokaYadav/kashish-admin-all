import axios from 'axios';

const API_BASE_URL = 'https://api.recharge.kashishindiapvtltd.com/recharge';

interface FilterParams {
    mobile?: string;
    email?: string;
    adminId?: string;
    retailerId?: string;
    distributorId?: string;
    operatorId?: string;
    status?: string;
    circleId?: string;
    apiId?: string;
    transactionId?: string;
    page?: number;
    limit?: number;
}

export const RechargeService = {
    async getFilteredRecharges(params: FilterParams = {}) {
        try {
            const response = await axios.get(`${API_BASE_URL}/filter`, {
                params: {
                    ...params,
                    page: params.page || 1,
                    limit: params.limit || 20
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            return response.data;
        } catch (error) {
            console.error('Error fetching filtered recharges:', error);
            throw error;
        }
    },

    async getOperators() {
        try {
            const response = await axios.get(`${API_BASE_URL}/operators`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching operators:', error);
            throw error;
        }
    },

    async getCircles() {
        try {
            const response = await axios.get(`${API_BASE_URL}/circles`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching circles:', error);
            throw error;
        }
    },

    async getApis() {
        try {
            const response = await axios.get(`${API_BASE_URL}/apis`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching APIs:', error);
            throw error;
        }
    }
}; 