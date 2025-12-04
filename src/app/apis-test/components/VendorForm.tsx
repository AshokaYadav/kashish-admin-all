'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VendorCredentialsSection from './VendorCredentials';
import ApiParametersSection from './ApiParameters';
import { VendorFormData } from '@/types/apis';
import { fetchVendorData, updateVendor } from '../services/vendorService';
import { toast } from 'sonner';

interface VendorFormProps {
  vendorId?: string | undefined;
}

const VendorForm: React.FC<VendorFormProps> = ({ vendorId }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<VendorFormData>({
    vendorName: '',
    userId: '',
    password: '',
    token: '',
    reqType: '',
    rechargeValue: '',
    balanceValue: '',
    statusValue: '',
    disputeValue: '',
    billInfoValue: '',
    billPayValue: '',
    opPrefix: ''
  });

  useEffect(() => {
    const loadVendorData = async () => {
      if (vendorId) {
        try {
          setLoading(true);
          const data = await fetchVendorData(vendorId);
          setFormData(data);
        } catch (error) {
          toast('Error', {
            description: 'Failed to load vendor data',
          });
        } finally {
          setLoading(false);
        }
      }
    };

    loadVendorData();
  }, [vendorId, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await updateVendor(formData);

      if (result.success) {
        toast(
          'Success',
          {
            description: result.message,
          });
      } else {
        toast(
          'Error',
          {
            description: result.message,
            // variant: 'destructive',
          });
      }
    } catch (error) {
      toast(
        'Error',
        {
          description: 'An unexpected error occurred',
          // variant: 'destructive',
        });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-6xl mx-auto bg-slate-50 my-4">
      <CardHeader>
        <CardTitle className="text-xl text-slate-700">Api Update</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <VendorCredentialsSection
            credentials={formData}
            onChange={handleChange}
          />

          <ApiParametersSection
            parameters={formData}
            onChange={handleChange}
          />

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2"
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default VendorForm;