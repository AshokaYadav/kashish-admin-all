import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Award, Gift, Zap, Users, Bell, CreditCard } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock className="w-12 h-12 text-pink-500" />,
      title: "Lightning Fast Transactions",
      description: "Experience instant recharges and bill payments processed within seconds. No more waiting in queues or delayed transactions.",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      icon: <Award className="w-12 h-12 text-purple-500" />,
      title: "Rewarding Experience",
      description: "Earn up to 5% cashback on every transaction. Collect reward points and redeem them for exciting offers and additional recharges.",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Bank-Grade Security",
      description: "Your transactions are protected with the highest level of encryption. Multi-layer security with biometric authentication.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Gift className="w-12 h-12 text-green-500" />,
      title: "Special Offers",
      description: "Exclusive deals and discounts on every recharge. Festival bonanzas and seasonal offers to save more on your payments.",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Smart Reminders",
      description: "Never miss a payment with intelligent due date reminders. Automatic alerts for low balance and special offers.",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-500" />,
      title: "Family Accounts",
      description: "Manage payments for your entire family. Create sub-accounts with customized permissions and spending limits.",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: <Bell className="w-12 h-12 text-red-500" />,
      title: "Instant Notifications",
      description: "Real-time updates for all your transactions. Track payments and get instant confirmation messages.",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-teal-500" />,
      title: "Multiple Payment Options",
      description: "Choose from various payment methods including UPI, cards, net banking, and wallet. Save cards securely for quick payments.",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Choose Kashish India?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of digital payments with our cutting-edge features designed for your convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all duration-300 border-2 ${feature.borderColor} hover:-translate-y-1`}
            >
              <CardContent className={`pt-8 ${feature.bgColor} rounded-lg min-h-[280px]`}>
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;