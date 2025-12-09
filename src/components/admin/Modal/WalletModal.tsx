"use client";

interface Props {
  user: any;
  onClose: () => void;
}

export default function WalletModal({ user, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
      <div className="bg-white w-[500px] p-6 rounded-xl shadow-2xl border border-gray-200 relative animate-fadeIn">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-black transition"
          onClick={onClose}
        >
          ×
        </button>


        <div className="space-y-1 text-sm text-gray-700">
          <p><b>Member Name:</b> {user.user?.name}</p>
          <p><b>Mobile Number:</b> {user.user?.mobile}</p>
          <p><b>Email Id:</b> {user.user?.email}</p>
          <p><b>Member Wallet:</b> <span className="text-blue-600 font-semibold">Rs. {user.balance}/-</span></p>
        </div>

        <p className="mt-3 text-lg font-semibold text-gray-900 bg-green-100 p-2 rounded-md">
          💰 Available Wallet: 
          <span className="text-green-700"> Rs. {user.balance}/-</span>
        </p>

        {/* FORM */}
        <div className="mt-5 space-y-4">
          
          {/* Amount */}
          <div>
            <label className="font-medium text-gray-700">Amount</label>
            <input
              type="number"
              className="border w-full p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter Amount"
            />
          </div>

          {/* Type */}
          <div>
            <label className="font-medium text-gray-700">Type</label>
            <select className="border w-full p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none">
              <option>Add</option>
              <option>Less</option>
            </select>
          </div>

          {/* Transaction Type */}
          <div>
            <label className="font-medium text-gray-700">Transaction Type</label>
            <select className="border w-full p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none">
              <option>New Balance</option>
            </select>
          </div>

          {/* Comment */}
          <div>
            <label className="font-medium text-gray-700">Comment</label>
            <input
              type="text"
              className="border w-full p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter comment"
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold shadow-md transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
