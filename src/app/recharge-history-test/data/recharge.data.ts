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
      msg: "Recharge successful",
      op_id: "0",
      complaintId: "COMP78901",
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
        email: "rahul.s@example.com"
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
        name: "Airtel"
      },
    },
    {
      id: "7e8ddfdc-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "7654321101",
      category_id: "c21a9fa4-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21aa0da-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21aa210-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21aa346-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21aa47c-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21aa5b2-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012358",
      price: 599,
      ret_balance: 5402.25,
      api_balance: 17522.50,
      retailor_commission: 11.98,
      distributor_commission: 5.99,
      admin_commission: 2.99,
      api_commission: 8.99,
      msg: "Bill payment successful",
      op_id: "0",
      complaintId: "",
      status: "SUCCESS",
      createdAt: "2025-03-10T20:14:22Z",
      updatedAt: "2025-03-10T20:14:22Z",
      category: {
        id: "c21a9fa4-ff2b-11ef-a123-f32b56c89d7a",
        name: "Landline Bill"
      },
      circle: {
        id: "c21aa0da-ff2b-11ef-a123-f32b56c89d7a",
        name: "Andhra Pradesh"
      },
      api: {
        id: "c21aa210-ff2b-11ef-a123-f32b56c89d7a",
        name: "BillPay API"
      },
      retailor: {
        id: "c21aa346-ff2b-11ef-a123-f32b56c89d7a",
        name: "Kiran Reddy",
        email: "kiran.r@example.com"
      },
      distributor: {
        id: "c21aa47c-ff2b-11ef-a123-f32b56c89d7a",
        name: "Hyderabad Distributors",
        email: "hyderabad.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21aa5b2-ff2b-11ef-a123-f32b56c89d7a",
        name: "BSNL Landline"
      }
    },
    {
      id: "7e8de13a-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "9876543213",
      category_id: "c21aa6e8-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21aa81e-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21aa954-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21aaa8a-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21aabc0-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21aacf6-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012359",
      price: 349,
      ret_balance: 5052.25,
      api_balance: 17172.50,
      retailor_commission: 6.98,
      distributor_commission: 3.49,
      admin_commission: 1.74,
      api_commission: 5.24,
      msg: "Payment successful",
      op_id: "0",
      complaintId: "",
      status: "FAILED",
      createdAt: "2025-03-10T20:42:37Z",
      updatedAt: "2025-03-10T20:42:37Z",
      category: {
        id: "c21aa6e8-ff2b-11ef-a123-f32b56c89d7a",
        name: "Insurance"
      },
      circle: {
        id: "c21aa81e-ff2b-11ef-a123-f32b56c89d7a",
        name: "All India"
      },
      api: {
        id: "c21aa954-ff2b-11ef-a123-f32b56c89d7a",
        name: "InsurePay API"
      },
      retailor: {
        id: "c21aaa8a-ff2b-11ef-a123-f32b56c89d7a",
        name: "Suresh Kumar",
        email: "suresh.k@example.com"
      },
      distributor: {
        id: "c21aabc0-ff2b-11ef-a123-f32b56c89d7a",
        name: "South Distributors",
        email: "south.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21aacf6-ff2b-11ef-a123-f32b56c89d7a",
        name: "LIC Insurance"
      }
    },
    {
      id: "7e8de29e-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "8765432121",
      category_id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a7074-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a71aa-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a72e0-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a7416-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012360",
      price: 299,
      ret_balance: 3100.25,
      api_balance: 15520.75,
      retailor_commission: 5.98,
      distributor_commission: 2.99,
      admin_commission: 1.49,
      api_commission: 4.49,
      msg: "Recharge successful",
      op_id: "OP123470",
      complaintId: "",
      status: "FAILED",
      createdAt: "2025-03-10T21:15:54Z",
      updatedAt: "2025-03-10T21:15:54Z",
      category: {
        id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
        name: "Mobile Prepaid"
      },
      circle: {
        id: "c21a7074-ff2b-11ef-a123-f32b56c89d7a",
        name: "Karnataka"
      },
      api: {
        id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
        name: "FastRecharge API"
      },
      retailor: {
        id: "c21a71aa-ff2b-11ef-a123-f32b56c89d7a",
        name: "Sunita Kumar",
        email: "sunita.k@example.com"
      },
      distributor: {
        id: "c21a72e0-ff2b-11ef-a123-f32b56c89d7a",
        name: "Bangalore Distributors",
        email: "bangalore.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21a7416-ff2b-11ef-a123-f32b56c89d7a",
        name: "Jio"
      }
    },
    {
      id: "7e8de402-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "7654321102",
      category_id: "c21aae2c-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21aaf62-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21ab098-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21ab1ce-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21ab304-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21ab43a-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012361",
      price: 199,
      ret_balance: 1952.75,
      api_balance: 14073.50,
      retailor_commission: 3.98,
      distributor_commission: 1.99,
      admin_commission: 0.99,
      api_commission: 2.99,
      msg: "Payment successful",
      op_id: "0",
      complaintId: "",
      status: "FAILED",
      createdAt: "2025-03-10T21:53:12Z",
      updatedAt: "2025-03-10T21:53:12Z",
      category: {
        id: "c21aae2c-ff2b-11ef-a123-f32b56c89d7a",
        name: "Credit Card"
      },
      circle: {
        id: "c21aaf62-ff2b-11ef-a123-f32b56c89d7a",
        name: "All India"
      },
      api: {
        id: "c21ab098-ff2b-11ef-a123-f32b56c89d7a",
        name: "CardPay API"
      },
      retailor: {
        id: "c21ab1ce-ff2b-11ef-a123-f32b56c89d7a",
        name: "Anita Joshi",
        email: "anita.j@example.com"
      },
      distributor: {
        id: "c21ab304-ff2b-11ef-a123-f32b56c89d7a",
        name: "West Distributors",
        email: "west.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21ab43a-ff2b-11ef-a123-f32b56c89d7a",
        name: "HDFC Credit Card"
      }
    },
    {
      id: "7e8de560-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "6543210999",
      category_id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a8c44-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a8d7a-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a8eb0-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a7c86-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012362",
      price: 399,
      ret_balance: 1552.75,
      api_balance: 13673.50,
      retailor_commission: 7.98,
      distributor_commission: 3.99,
      admin_commission: 1.99,
      api_commission: 5.99,
      msg: "Recharge successful",
      op_id: "OP123472",
      complaintId: "COMP78903",
      status: "FAILED",
      createdAt: "2025-03-10T22:28:45Z",
      updatedAt: "2025-03-10T22:28:45Z",
      category: {
        id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
        name: "Mobile Prepaid"
      },
      circle: {
        id: "c21a8c44-ff2b-11ef-a123-f32b56c89d7a",
        name: "Rajasthan"
      },
      api: {
        id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
        name: "FastRecharge API"
      },
      retailor: {
        id: "c21a8d7a-ff2b-11ef-a123-f32b56c89d7a",
        name: "Vikram Singh",
        email: "vikram.s@example.com"
      },
      distributor: {
        id: "c21a8eb0-ff2b-11ef-a123-f32b56c89d7a",
        name: "Jaipur Distributors",
        email: "jaipur.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21a7c86-ff2b-11ef-a123-f32b56c89d7a",
        name: "Vodafone"
      }
    },
    {
      id: "7e8de6be-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "5432109888",
      category_id: "c21ab570-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21ab6a6-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21ab7dc-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21ab912-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21aba48-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21abb7e-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012363",
      price: 499,
      ret_balance: 4553.25,
      api_balance: 16673.50,
      retailor_commission: 9.98,
      distributor_commission: 4.99,
      admin_commission: 2.49,
      api_commission: 7.49,
      msg: "Payment successful",
      op_id: "OP123473",
      complaintId: "",
      status: "FAILED",
      createdAt: "2025-03-10T23:05:18Z",
      updatedAt: "2025-03-10T23:05:18Z",
      category: {
        id: "c21ab570-ff2b-11ef-a123-f32b56c89d7a",
        name: "OTT Subscription"
      },
      circle: {
        id: "c21ab6a6-ff2b-11ef-a123-f32b56c89d7a",
        name: "All India"
      },
      api: {
        id: "c21ab7dc-ff2b-11ef-a123-f32b56c89d7a",
        name: "StreamPay API"
      },
      retailor: {
        id: "c21ab912-ff2b-11ef-a123-f32b56c89d7a",
        name: "Divya Tiwari",
        email: "divya.t@example.com"
      },
      distributor: {
        id: "c21aba48-ff2b-11ef-a123-f32b56c89d7a",
        name: "Digital Distributors",
        email: "digital.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21a67a4-ff2b-11ef-a123-f32b56c89d7a",
        name: "Airtel"
      },
    },
    {
      id: "7e8dccd0-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "8765432109",
      category_id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a6104-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a63e8-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a666e-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a67a4-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012346",
      price: 399,
      ret_balance: 2850.75,
      api_balance: 15271.50,
      retailor_commission: 7.98,
      distributor_commission: 3.99,
      admin_commission: 1.99,
      api_commission: 5.99,
      msg: "Recharge successful",
      op_id: "OP123457",
      complaintId: "",
      status: "FAILED",
      createdAt: "2025-03-10T10:15:22Z",
      updatedAt: "2025-03-10T10:15:22Z",
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
        email: "rahul.s@example.com"
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
        name: "Airtel"
      }
    },
    {
      id: "7e8dcf64-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "7654321098",
      category_id: "c21a68da-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a6a2e-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a6b96-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a6ccc-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a6e02-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a6f38-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012347",
      price: 699,
      ret_balance: 2151.75,
      api_balance: 14572.50,
      retailor_commission: 13.98,
      distributor_commission: 6.99,
      admin_commission: 3.49,
      api_commission: 10.49,
      msg: "Recharge successful",
      op_id: "0",
      complaintId: "",
      status: "FAILED",
      createdAt: "2025-03-10T11:05:17Z",
      updatedAt: "2025-03-10T11:05:17Z",
      category: {
        id: "c21a68da-ff2b-11ef-a123-f32b56c89d7a",
        name: "DTH"
      },
      circle: {
        id: "c21a6a2e-ff2b-11ef-a123-f32b56c89d7a",
        name: "Maharashtra"
      },
      api: {
        id: "c21a6b96-ff2b-11ef-a123-f32b56c89d7a",
        name: "QuickPay API"
      },
      retailor: {
        id: "c21a6ccc-ff2b-11ef-a123-f32b56c89d7a",
        name: "Amit Singh",
        email: "amit.s@example.com"
      },
      distributor: {
        id: "c21a6e02-ff2b-11ef-a123-f32b56c89d7a",
        name: "Mumbai Distributors",
        email: "mumbai.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21a6f38-ff2b-11ef-a123-f32b56c89d7a",
        name: "Tata Play"
      }
    },
    {
      id: "7e8dd1da-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "6543210987",
      category_id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a7074-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a71aa-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a72e0-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a7416-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012348",
      price: 249,
      ret_balance: 3400.25,
      api_balance: 17820.75,
      retailor_commission: 4.98,
      distributor_commission: 2.49,
      admin_commission: 1.24,
      api_commission: 3.74,
      msg: "Recharge successful",
      op_id: "OP123459",
      complaintId: "",
      status: "PENDING",
      createdAt: "2025-03-10T12:35:51Z",
      updatedAt: "2025-03-10T12:35:51Z",
      category: {
        id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
        name: "Mobile Prepaid"
      },
      circle: {
        id: "c21a7074-ff2b-11ef-a123-f32b56c89d7a",
        name: "Karnataka"
      },
      api: {
        id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
        name: "FastRecharge API"
      },
      retailor: {
        id: "c21a71aa-ff2b-11ef-a123-f32b56c89d7a",
        name: "Sunita Kumar",
        email: "sunita.k@example.com"
      },
      distributor: {
        id: "c21a72e0-ff2b-11ef-a123-f32b56c89d7a",
        name: "Bangalore Distributors",
        email: "bangalore.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21a7416-ff2b-11ef-a123-f32b56c89d7a",
        name: "Jio"
      }
    },
    {
      id: "7e8dd36e-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "5432109876",
      category_id: "c21a7542-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a7678-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a77ae-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a78e4-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a7a1a-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a7b50-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012349",
      price: 999,
      ret_balance: 4401.25,
      api_balance: 16821.75,
      retailor_commission: 19.98,
      distributor_commission: 9.99,
      admin_commission: 4.99,
      api_commission: 14.99,
      msg: "Bill payment successful",
      op_id: "OP123464",
      complaintId: "",
      status: "PENDING",
      createdAt: "2025-03-10T17:22:15Z",
      updatedAt: "2025-03-10T17:22:15Z",
      category: {
        id: "c21a8fe6-ff2b-11ef-a123-f32b56c89d7a",
        name: "Water Bill"
      },
      circle: {
        id: "c21a911c-ff2b-11ef-a123-f32b56c89d7a",
        name: "Uttar Pradesh"
      },
      api: {
        id: "c21a9252-ff2b-11ef-a123-f32b56c89d7a",
        name: "UtilityPay API"
      },
      retailor: {
        id: "c21a9388-ff2b-11ef-a123-f32b56c89d7a",
        name: "Deepak Sharma",
        email: "deepak.s@example.com"
      },
      distributor: {
        id: "c21a94be-ff2b-11ef-a123-f32b56c89d7a",
        name: "Lucknow Distributors",
        email: "lucknow.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21a95f4-ff2b-11ef-a123-f32b56c89d7a",
        name: "UP Jal Nigam"
      }
    },
    {
      id: "7e8ddbae-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "5432109887",
      category_id: "c21a972a-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a9860-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a9996-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a9acc-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a9c02-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a9d38-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012355",
      price: 149,
      ret_balance: 2002.75,
      api_balance: 14323.50,
      retailor_commission: 2.98,
      distributor_commission: 1.49,
      admin_commission: 0.74,
      api_commission: 2.24,
      msg: "Payment successful",
      op_id: "OP123465",
      complaintId: "",
      status: "PENDING",
      createdAt: "2025-03-10T18:05:37Z",
      updatedAt: "2025-03-10T18:05:37Z",
      category: {
        id: "c21a972a-ff2b-11ef-a123-f32b56c89d7a",
        name: "FASTag"
      },
      circle: {
        id: "c21a9860-ff2b-11ef-a123-f32b56c89d7a",
        name: "All India"
      },
      api: {
        id: "c21a9996-ff2b-11ef-a123-f32b56c89d7a",
        name: "QuickTag API"
      },
      retailor: {
        id: "c21a9acc-ff2b-11ef-a123-f32b56c89d7a",
        name: "Ramesh Gupta",
        email: "ramesh.g@example.com"
      },
      distributor: {
        id: "c21a9c02-ff2b-11ef-a123-f32b56c89d7a",
        name: "North Distributors",
        email: "north.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21a9d38-ff2b-11ef-a123-f32b56c89d7a",
        name: "ICICI FASTag"
      }
    },
    {
      id: "7e8ddd16-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "8765432120",
      category_id: "c21a68da-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a6a2e-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a6b96-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a6ccc-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a6e02-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a9e6e-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012356",
      price: 349,
      ret_balance: 1652.75,
      api_balance: 13973.50,
      retailor_commission: 6.98,
      distributor_commission: 3.49,
      admin_commission: 1.74,
      api_commission: 5.24,
      msg: "Recharge successful",
      op_id: "OP123466",
      complaintId: "",
      status: "PENDING",
      createdAt: "2025-03-10T18:47:12Z",
      updatedAt: "2025-03-10T18:47:12Z",
      category: {
        id: "c21a68da-ff2b-11ef-a123-f32b56c89d7a",
        name: "DTH"
      },
      circle: {
        id: "c21a6a2e-ff2b-11ef-a123-f32b56c89d7a",
        name: "Maharashtra"
      },
      api: {
        id: "c21a6b96-ff2b-11ef-a123-f32b56c89d7a",
        name: "QuickPay API"
      },
      retailor: {
        id: "c21a6ccc-ff2b-11ef-a123-f32b56c89d7a",
        name: "Amit Singh",
        email: "amit.s@example.com"
      },
      distributor: {
        id: "c21a6e02-ff2b-11ef-a123-f32b56c89d7a",
        name: "Mumbai Distributors",
        email: "mumbai.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21a9e6e-ff2b-11ef-a123-f32b56c89d7a",
        name: "Dish TV"
      }
    },
    {
      id: "7e8dde74-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "9876543212",
      category_id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a6104-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a63e8-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a666e-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a7c86-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012357",
      price: 299,
      ret_balance: 2153.75,
      api_balance: 14274.50,
      retailor_commission: 5.98,
      distributor_commission: 2.99,
      admin_commission: 1.49,
      api_commission: 4.49,
      msg: "Recharge successful",
      op_id: "OP123467",
      complaintId: "",
      status: "PENDING",
      createdAt: "2025-03-10T19:28:49Z",
      updatedAt: "2025-03-10T19:28:49Z",
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
        email: "rahul.s@example.com"
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
        id: "c21a7c86-ff2b-11ef-a123-f32b56c89d7a",
        name: "Vodafone"
      }
    },
    {
      id: "7e8dd4d0-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "4321098765",
      category_id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a6104-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a63e8-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a666e-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a7c86-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012350",
      price: 499,
      ret_balance: 2351.75,
      api_balance: 14772.50,
      retailor_commission: 9.98,
      distributor_commission: 4.99,
      admin_commission: 2.49,
      api_commission: 7.49,
      msg: "Recharge successful",
      op_id: "OP123461",
      complaintId: "",
      status: "PENDING",
      createdAt: "2025-03-10T14:27:33Z",
      updatedAt: "2025-03-10T14:27:33Z",
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
        email: "rahul.s@example.com"
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
        id: "c21a7c86-ff2b-11ef-a123-f32b56c89d7a",
        name: "Vodafone"
      }
    },
    {
      id: "7e8dd628-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "9876543211",
      category_id: "c21a7dbc-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a7ef2-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a8028-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a815e-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a8294-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a83ca-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012351",
      price: 799,
      ret_balance: 5201.25,
      api_balance: 19621.75,
      retailor_commission: 15.98,
      distributor_commission: 7.99,
      admin_commission: 3.99,
      api_commission: 11.99,
      msg: "Bill payment successful",
      op_id: "OP123462",
      complaintId: "COMP78902",
      status: "PENDING",
      createdAt: "2025-03-10T15:12:45Z",
      updatedAt: "2025-03-10T15:12:45Z",
      category: {
        id: "c21a7dbc-ff2b-11ef-a123-f32b56c89d7a",
        name: "Gas Bill"
      },
      circle: {
        id: "c21a7ef2-ff2b-11ef-a123-f32b56c89d7a",
        name: "Gujarat"
      },
      api: {
        id: "c21a8028-ff2b-11ef-a123-f32b56c89d7a",
        name: "UtilityPay API"
      },
      retailor: {
        id: "c21a815e-ff2b-11ef-a123-f32b56c89d7a",
        name: "Nikhil Patel",
        email: "nikhil.p@example.com"
      },
      distributor: {
        id: "c21a8294-ff2b-11ef-a123-f32b56c89d7a",
        name: "Ahmedabad Distributors",
        email: "ahmedabad.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21a83ca-ff2b-11ef-a123-f32b56c89d7a",
        name: "Gujarat Gas Limited"
      }
    },
    {
      id: "7e8dd78a-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "8765432110",
      category_id: "c21a8500-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a8636-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a876c-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a88a2-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a89d8-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a8b0e-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012352",
      price: 599,
      ret_balance: 6001.25,
      api_balance: 20221.75,
      retailor_commission: 11.98,
      distributor_commission: 5.99,
      admin_commission: 2.99,
      api_commission: 8.99,
      msg: "Recharge successful",
      op_id: "",
      complaintId: "",
      status: "SUCCESS",
      createdAt: "2025-03-10T16:03:57Z",
      updatedAt: "2025-03-10T16:03:57Z",
      category: {
        id: "c21a8500-ff2b-11ef-a123-f32b56c89d7a",
        name: "Broadband"
      },
      circle: {
        id: "c21a8636-ff2b-11ef-a123-f32b56c89d7a",
        name: "West Bengal"
      },
      api: {
        id: "c21a876c-ff2b-11ef-a123-f32b56c89d7a",
        name: "PayAll API"
      },
      retailor: {
        id: "c21a88a2-ff2b-11ef-a123-f32b56c89d7a",
        name: "Sanjay Das",
        email: "sanjay.d@example.com"
      },
      distributor: {
        id: "c21a89d8-ff2b-11ef-a123-f32b56c89d7a",
        name: "Kolkata Distributors",
        email: "kolkata.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21a8b0e-ff2b-11ef-a123-f32b56c89d7a",
        name: "ACT Fibernet"
      }
    },
    {
      id: "7e8dd8e8-ff2b-11ef-b456-d4c9ef1a3b2c",
      mobile: "7654321100",
      category_id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
      circle_id: "c21a8c44-ff2b-11ef-a123-f32b56c89d7a",
      api_id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
      retailor_id: "c21a8d7a-ff2b-11ef-a123-f32b56c89d7a",
      admin_id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
      distributor_id: "c21a8eb0-ff2b-11ef-a123-f32b56c89d7a",
      operator_id: "c21a67a4-ff2b-11ef-a123-f32b56c89d7a",
      api_txn_id: "TX789012353",
      price: 299,
      ret_balance: 1852.75,
      api_balance: 14473.50,
      retailor_commission: 5.98,
      distributor_commission: 2.99,
      admin_commission: 1.49,
      api_commission: 4.49,
      msg: "Recharge successful",
      op_id: "0",
      complaintId: "",
      status: "SUCCESS",
      createdAt: "2025-03-10T16:47:22Z",
      updatedAt: "2025-03-10T16:47:22Z",
      category: {
        id: "c21a5e40-ff2b-11ef-a123-f32b56c89d7a",
        name: "Mobile Prepaid"
      },
      circle: {
        id: "c21a8c44-ff2b-11ef-a123-f32b56c89d7a",
        name: "Rajasthan"
      },
      api: {
        id: "c21a6280-ff2b-11ef-a123-f32b56c89d7a",
        name: "FastRecharge API"
      },
      retailor: {
        id: "c21a8d7a-ff2b-11ef-a123-f32b56c89d7a",
        name: "Vikram Singh",
        email: "vikram.s@example.com"
      },
      distributor: {
        id: "c21a8eb0-ff2b-11ef-a123-f32b56c89d7a",
        name: "Jaipur Distributors",
        email: "jaipur.d@example.com"
      },
      admin: {
        id: "c21a6532-ff2b-11ef-a123-f32b56c89d7a",
        name: "Admin User",
        email: "admin@rechargeportal.com"
      },
      operator: {
        id: "c21a67a4-ff2b-11ef-a123-f32b56c89d7a",
        name: "Airtel"
      }
    }
  ];