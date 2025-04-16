import React from 'react';

const popularDestinations = [
  { 
    country: 'Spain', 
    image: '/spain.png',
    size: 'large' // large = full height, small = half height
  },
  { 
    country: 'London', 
    image: '/london.png',
    size: 'small'
  },
  { 
    country: 'Lisbon', 
    image: '/lisbon.jpg',
    size: 'small'
  },
  { 
    country: 'Croatia', 
    image: '/croatia.jpg',
    size: 'large'
  },
  { 
    country: 'Bratislava', 
    image: '/bratislava.jpg',
    size: 'small'
  },
  { 
    country: 'Copenhagen', 
    image: '/copenhagen.jpeg',
    size: 'small'
  }
];

const HomeMainSection = () => {
  // Group destinations into layout columns
  const layout = [
    [popularDestinations[0]],          // Spain (large)
    [popularDestinations[1], popularDestinations[2]],  // London + Lisbon (small)
    [popularDestinations[3]],          // Croatia (large)
    [popularDestinations[4], popularDestinations[5]]   // Bratislava + Copenhagen (small)
  ];

  return (
    <div className='w-[90%] mt-10 mx-auto'>
      <h4 className='text-2xl font-semibold mb-8'>Popular Destinations</h4>
      <div className='flex gap-6'>
        {layout.map((column, colIndex) => (
          <div 
            key={colIndex} 
            className={`flex flex-col gap-2 w-[24%] ${column.length === 1 ? 'justify-center' : ''}`}
          >
            {column.map((destination, index) => (
              <div
                key={index}
                className='relative overflow-hidden rounded-xl'
                style={{boxShadow:'0px 0px 6px 2px #0000001a'}}
              >
                <img 
                  src={destination.image}
                  alt={destination.country}
                  className={`w-full rounded-xl object-cover ${
                    destination.size === 'large' ? 'h-[420px]' : 'h-[206px]'
                  }`}
                />
                <div className='absolute w-fit bg-gray-100/90 bottom-2 left-2 flex items-end m-2 rounded-full backdrop-blur-sm'>
                  <p className='font-medium text-sm py-1 px-3'>
                    {destination.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMainSection;