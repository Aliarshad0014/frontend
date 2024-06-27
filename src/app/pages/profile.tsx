import React from "react";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center">
      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/2 mt-10 mx-2 md:mx-6 mb-6 md:mb-0">
        <div className="relative flex flex-col md:flex-row items-center p-6">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-32 w-32 rounded-full border-4 border-white shadow-lg"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User Avatar"
            />
          </div>
          <div className="mt-16 text-center md:text-left md:ml-6">
            <h1 className="text-2xl font-bold">Anees Shahzad</h1>
            <p className="text-gray-600">(Dealer)</p>
            <div className="flex justify-center md:justify-start mt-2">
              <span className="text-yellow-500 text-xl">&#9733;</span>
              <span className="text-yellow-500 text-xl">&#9733;</span>
              <span className="text-yellow-500 text-xl">&#9733;</span>
              <span className="text-yellow-500 text-xl">&#9733;</span>
              <span className="text-green-500 text-xl">&#9733;</span>
            </div>
            <button className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded">
              Edit Your Profile
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="px-6 py-4">
          <div className="flex flex-col items-start space-y-2">
            <div>
              <strong>Email:</strong> aneeshahzad786@gmail.com
            </div>
            <div>
              <strong>Phone Number:</strong> +923438518074
            </div>
            <div>
              <strong>Following:</strong> 5K
            </div>
            <div>
              <strong>Total Ads:</strong> 30
            </div>
            <div>
              <strong>Appreciations:</strong> 4
            </div>
            <div>
              <strong>Address:</strong> River View Bahria Town phase 7, Rawalpindi
            </div>
            <div>
              <strong>Since:</strong> 08-10-2023
            </div>
          </div>
        </div>
      </div>

      {/* Awards and Corporate Services */}
      <div className="w-full md:w-1/2 max-w-4xl mt-6 mx-2 md:mx-6">
        {/* Corporate Services */}
        <div>
          <h2 className="text-xl font-bold text-gray-700">Corporate Services</h2>
          <div className="flex space-x-4 mt-4">
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
              <img
                className="w-full h-32 object-cover rounded-lg"
                src="https://via.placeholder.com/150"
                alt="Ad"
              />
              <div className="mt-2 text-center">
                <p>Reach up to 10x more buyers</p>
              </div>
            </div>
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
              <img
                className="w-full h-32 object-cover rounded-lg"
                src="https://via.placeholder.com/150"
                alt="Ad"
              />
              <div className="mt-2 text-center">
                <p>Show your Ad in top position</p>
              </div>
            </div>
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
              <img
                className="w-full h-32 object-cover rounded-lg"
                src="https://via.placeholder.com/150"
                alt="Ad"
              />
              <div className="mt-2 text-center">
                <p>Get noticed with a Feature Ad tag</p>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-700">Awards</h2>
          <div className="flex space-x-4 mt-4">
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
              <img
                className="w-full h-32 object-cover rounded-lg"
                src="https://via.placeholder.com/150"
                alt="Appreciation letter"
              />
              <div className="mt-2 text-center">
                <p>Appreciation letter</p>
                <p>Appreciated on best work</p>
              </div>
            </div>
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
              <img
                className="w-full h-32 object-cover rounded-lg"
                src="https://via.placeholder.com/150"
                alt="Seller of Year"
              />
              <div className="mt-2 text-center">
                <p>Seller of Year</p>
                <p>Appreciated on best work in whole Year a great achievement</p>
              </div>
            </div>
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
              <img
                className="w-full h-32 object-cover rounded-lg"
                src="https://via.placeholder.com/150"
                alt="Winner"
              />
              <div className="mt-2 text-center">
                <p>Winner</p>
                <p>Win the contest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
