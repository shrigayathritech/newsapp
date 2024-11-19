import React, { useState } from 'react';
import './RegionSelector.css';

const RegionSelector = ({ onRegionSelect }) => {
  const regions = [
    // States
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
    'West Bengal',
    
    // Union Territories
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 
    'Lakshadweep', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry',
    
    // All India option
    'All India'
  ];

  const [selectedRegion, setSelectedRegion] = useState('all');

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    onRegionSelect(region);
  };

  return (
    <div className="region-selector">
      <label htmlFor="region">Select Region:</label>
      <select id="region" value={selectedRegion} onChange={handleRegionChange}>
        {regions.map((region, index) => (
          <option key={index} value={region.toLowerCase()}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionSelector;
