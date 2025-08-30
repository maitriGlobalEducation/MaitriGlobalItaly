// components/AuthorizedPartners.jsx
import React from "react";

const AuthorizedPartners = ({ partners }) => {
  // Decide grid columns based on partner count
  let gridCols = "grid-cols-1 justify-items-center"; // default for single
  if (partners.length === 2) gridCols = "grid-cols-2 justify-items-center";
  if (partners.length === 3) gridCols = "grid-cols-3";
  if (partners.length > 3)
    gridCols = "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return (
    <section className="w-full px-4 py-10 md:px-12 lg:px-20 bg-gray-50">
      <div className={`grid gap-8 ${gridCols} w-full`}>
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-row items-center hover:shadow-lg transition w-full max-w-lg"
          >
            {/* Partner Logo */}
            <div className="w-28 h-28 flex items-center justify-center mr-6">
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="max-h-28 max-w-28 object-contain"
                />
              ) : (
                <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  Logo
                </div>
              )}
            </div>

            {/* Partner Info */}
            <div className="flex-1 text-right">
              <h3 className="text-lg font-bold">Authorized Partner in India</h3>
              <p className="text-sm text-gray-500 mt-1">
                For inquiries and support in India, you may also contact our
                authorized partner.
              </p>
              <p className="text-base font-semibold mt-2">{partner.name}</p>
              <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                {partner.address}
              </p>
              <p className="text-sm font-medium text-gray-800 mt-1">
                {partner.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthorizedPartners;
