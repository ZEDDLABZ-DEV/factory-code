import react from "react";

const Settings = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-2/3 bg-white rounded p-8 mt-12">
        <h1 className="text-h1 text-mainDashboard font-extraBold leading-6 mb-6">
          Settings
        </h1>
        <hr className="h-0 border-1 border-mainText2" />
        <p className="text-mainDashboard text-sm my-2">
          General Account Settings
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <div className="p-1">
            <div className="flex items-center justify-between mb-3">
              <div className="w-1/2">
                <label className="text-md text-mainText2 font-semiBold">
                  1. Factory Name
                </label>
                <input className="w-11/12 p-1.5 mt-3 rounded-lg border-2 border-gray-300" />
              </div>
              <div className="w-1/2">
                <label className="text-md text-mainText2 font-semiBold">
                  2. Factory Address
                </label>
                <input className="w-11/12 p-1.5 mt-3 rounded-lg border-2 border-gray-300" />
              </div>
            </div>
            <div className="flex items-center justify-between my-3">
              <div className="w-1/2">
                <label className="text-md text-mainText2 font-semiBold">
                  3. Website
                </label>
                <input className="w-11/12 p-1.5 mt-3 rounded-lg border-2 border-gray-300" />
              </div>
              <div className="w-1/2">
                <label className="text-md text-mainText2 font-semiBold">
                  4. GSTIN (This cannot be changed)
                </label>
                <input className="w-11/12 p-1.5 mt-3 rounded-lg border-2 border-gray-300 bg-gray-300" />
              </div>
            </div>
            <div className="flex items-center justify-between my-3">
              <div className="w-1/2">
                <label className="text-md text-mainText2 font-semiBold">
                  5. HR Name
                </label>
                <input className="w-11/12 p-1.5 mt-3 rounded-lg border-2 border-gray-300" />
              </div>
              <div className="w-1/2">
                <label className="text-md text-mainText2 font-semiBold">
                  6. HR Contact
                </label>
                <div className="flex items-center mt-3">
                  <input className="p-1.5 rounded-lg border-2 border-gray-300" />
                  <button className="w-20 py-1.5 border-2 border-mainDashboard rounded mx-3">
                    GET OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
