import { VendorFormData } from '@/types/apis';

export const fetchVendorData = async (vendorId: string): Promise<VendorFormData> => {
  try {
    // In a real application, this would be an API call
    // For demo purposes, returning mock data
    return {
      vendorName: 'Kashish Pay',
      userId: '9926831578',
      password: '9926831578',
      token: 'HVSKVZo0ep6QzZGvBrNEpP8D3k2ASPz8j5q',
      reqType: 'REQTYPE',
      rechargeValue: 'RECH',
      balanceValue: 'BAL',
      statusValue: 'STATUS',
      disputeValue: 'TRNCMP',
      billInfoValue: 'BILLINFO',
      billPayValue: 'BILLPAY',
      opPrefix: ''
    };
  } catch (error) {
    console.error('Error fetching vendor data:', error);
    throw error;
  }
};

export const updateVendor = async (data: VendorFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real application, this would be an API call
    console.log('Updating vendor with data:', data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Vendor updated successfully'
    };
  } catch (error) {
    console.error('Error updating vendor:', error);
    return {
      success: false,
      message: 'Failed to update vendor'
    };
  }
};