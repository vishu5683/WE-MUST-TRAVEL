import React from 'react';
import { Avatar, Rating } from '@mui/material';

const testimonials = [
  {
    name: 'Abhi Kumar',
    image: '/images/abhi.jpg',
    rating: 5,
    review: 'This was the best travel experience I have ever had! The service was excellent, and the destination was breathtaking. Highly recommended!',
  },
  {
    name: 'Hemant Sharma',
    image: '/images/hemant.jpg',
    rating: 4.5,
    review: 'A fantastic experience with outstanding customer support. Everything was well planned and executed perfectly!',
  },
  {
    name: 'Priyanshu Singh',
    image: '/images/priyanshu.jpg',
    rating: 4,
    review: 'Great service and amazing locations. The trip was well organized, and I had a wonderful time. Will book again!',
  },
  {
    name: 'Riya Patel',
    image: '/images/riya.jpg',
    rating: 4.5,
    review: 'Wonderful experience! The team was very professional and ensured everything went smoothly. Highly appreciated!',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{ width: 80, height: 80, margin: '0 auto 16px' }}
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <Rating
                value={testimonial.rating}
                precision={0.5}
                readOnly
                sx={{ marginY: 2 }}
              />
              <p className="text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
