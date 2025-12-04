// data/rechargeData.ts
import { Recharge } from '../types/recharge';

// Mock data for demonstration purposes
export const initialRechargeData: Recharge[] =
  [
    {
      id: "7e8dc59a-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "9876543210",
      category_id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a6104-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a63e8-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a666e-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a67a4-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012345",
      price: 199,
      ret_balance: 2450.75,
      api_balance: 15670.50,
      retailor_commission: 3.98,
      distributor_commission: 1.99,
      admin_commission: 0.99,
      api_commission: 2.99,
      opening_balance: "2500.00",
      closing_balance: "2301.75",
      charge_amount: "0.00",
      msg: "Recharge successful",
      op_id: "0",
      complaintId: "COMP78901",
      clientRefNo:"asdfasdf",
      status: "SUCCESS",

      createdAt: "2025-03-10T09:25:43Z",
      updatedAt: "2025-03-10T09:25:43Z",
      category: {
        id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
        name: "Mobile Prepaid"
      },
      circle: {
        id: "c21a6104-ff2b-11ef-a123-f32b56c89d7a",
        name: "Delhi NCR"
      },
      api: {
        id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
        name: "FastRecharge API"
      },
      retailor: {
        id: "c21a63e8-ff2b-11ef-a123-f32b56c89d7a",
        name: "Rahul Sharma",
        email: "rahul.s@example.com",mobile: "9876543210"
      },
      distributor: {
        id: "c21a666e-ff2b-11ef-a123-f32b56c89d7a",
        name: "Priya Distributors",
        email: "priya.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21a67a4-ff2b-11ef-a123-f32b56c89d7a",
        name: "Airtel",
        image_url:''
      },
    }
  ];