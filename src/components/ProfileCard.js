import React, { useEffect, useState } from 'react';

const ProfileCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]));
  }, []);

  if (!userData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium text-gray-700 animate-pulse">Loading...</p>
      </div>
    );
  }

  const { picture, name, gender, phone } = userData;

  return (
    <div className="max-w-sm mx-auto bg-gradient-to-r from-white to-gray-100 border border-gray-200 shadow-xl p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex items-center space-x-6">
        {/* Profile Picture */}
        <img
          src={picture.large}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-gray-300 shadow-md"
        />
        
        {/* User Details */}
        <div className="text-left">
          <h2 className="text-2xl font-bold text-gray-800">{`${name.first} ${name.last}`}</h2>
          <p className="text-gray-500 capitalize text-lg">{gender}</p>
          <p className="text-gray-600 text-lg">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
