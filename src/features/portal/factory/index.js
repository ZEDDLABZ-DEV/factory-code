import React, { useContext } from "react";
import { UserContext } from "../../../App";

const Factory = () => {
  const userDetails = useContext(UserContext);
  console.log(userDetails);
  return (
    <div>
      <div
        className="bg-center bg-cover"
        style={{
          backgroundImage: `url(${userDetails.store.data.millOwner.millInfo.millImages[0]})`,
        }}
      >
        <div className="w-full h-72 bg-gradient-to-b from-transparent to-gray-700 via-transparent via-transparent"></div>
      </div>
      <div className="mx-20 flex -m-16 justify-between">
        <div className="flex">
          <div className="">
            <img
              src={userDetails.store.data.millOwner.millInfo.millImages[1]}
              alt=""
              className="w-40 h-40 border-4 border-mainDashboard rounded"
            />
          </div>
          <div className="px-10">
            <h1 className="text-h1 text-white font-semibold">
              {userDetails.store.data.millOwner.millInfo.millName}
            </h1>
            <div className="mt-6 mb-3 flex items-center ">
              <h2 className="text-mainDashboard text-md font-semiBold">
                Address :
              </h2>
              <h1 className="text-mainText1 text-md font-semiBold pl-3">
                {userDetails.store.data.millOwner.millInfo.address}
              </h1>
            </div>
            <div className="my-3 flex items-center ">
              <h2 className="text-mainDashboard text-md font-semiBold">
                Website :
              </h2>
              <h1 className="text-mainText1 text-md font-semiBold pl-3">
                Website Here
              </h1>
            </div>
            <div className="my-3 flex items-center ">
              <h2 className="text-mainDashboard text-md font-semiBold">
                GSTIN :
              </h2>
              <h1 className="text-mainText1 text-md font-semiBold pl-3">
                GSTIN Here
              </h1>
            </div>
            <div className="my-3 flex items-center ">
              <h2 className="text-mainDashboard text-md font-semiBold">
                Contact :
              </h2>
              <h1 className="text-mainText1 text-md font-semiBold pl-3">
                Contact Here
              </h1>
            </div>
            <div className="my-3 flex items-center ">
              <h2 className="text-mainDashboard text-md font-semiBold">
                HR Name :
              </h2>
              <h1 className="text-mainText1 text-md font-semiBold pl-3">
                HR Name Here
              </h1>
            </div>
            <div className="my-3 flex items-center ">
              <h2 className="text-mainDashboard text-md font-semiBold">
                HR Contact :
              </h2>
              <h1 className="text-mainText1 text-md font-semiBold pl-3">
                HR Contact Here
              </h1>
            </div>
            <h1 className="text-h1 text-mainDashboard font-bold mt-16">
              Company Facilities
            </h1>
            <p className="text-mainText1 text-md">
              These details will be shared with workers through your job posts.
            </p>
            <div></div>
          </div>
        </div>
        <div>
          <button className="border-2 border-mainDashboard px-6 py-2 mt-20">
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Factory;
