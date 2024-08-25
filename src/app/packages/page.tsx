import React from 'react';
import { Divider, Typography, List, ListItem, ListItemText } from '@mui/material';

const packages = [
  { id: 1, image: '/images/travel/pic1.jpg', price: '$999', description: '7-day adventure in Bali.', itinerary: ['Day 1: Arrival', 'Day 2: Sightseeing', 'Day 3: Beach Day'] },
  { id: 2, image: '/images/travel/pic2.jpg', price: '$1299', description: 'Luxury stay in Maldives.', itinerary: ['Day 1: Resort Check-In', 'Day 2: Spa and Relax', 'Day 3: Water Sports'] },
  { id: 3, image: '/images/travel/pic3.jpg', price: '$899', description: 'Cultural tour in Japan.', itinerary: ['Day 1: Tokyo', 'Day 2: Kyoto', 'Day 3: Osaka'] },
  // Add more packages as needed
];

const PackagesPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="flex bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex-none w-1/2 p-4">
              <img src={pkg.image} alt={`Package ${pkg.id}`} className="w-full h-72 object-cover rounded-lg" />
            </div>
            <div className="flex-grow p-4">
              <Typography variant="h6" className="font-bold mb-2">{pkg.price}</Typography>
              <Divider className="my-2" />
              <Typography variant="body1" className="mb-2">{pkg.description}</Typography>
              <List>
                {pkg.itinerary.map((item, index) => (
                  <ListItem key={index} className="p-0">
                    <ListItemText primary={`• ${item}`} />
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesPage;
