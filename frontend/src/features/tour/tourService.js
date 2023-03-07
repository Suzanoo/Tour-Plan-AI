const tours = {
  data: {
    data: [
      {
        startLocation: {
          type: 'Point',
          coordinates: [99.04355, 19.91038],
          formattedAddress: ', Muthi 11, 50110, TH',
        },
        _id: '6404213019d7d4ff5316d9b7',
        name: 'Chaingmai: The Winter Is Coming',
        duration: 7,
        maxGroupSize: 12,
        difficulty: 'medium',
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        price: 15000,
        summary: 'Great',
        description: 'Sawasdee!',
        imageCover: 'tour-9-cover.jpg',
        images: [],
        startDates: ['2023-12-09T17:00:00.000Z'],
        secretTour: false,
        guides: [],
        locations: [],
        slug: 'chaingmai:-the-winter-is-coming',
        durationWeeks: 1,
        id: '6404213019d7d4ff5316d9b7',
      },
      {
        startLocation: {
          type: 'Point',
          coordinates: [100.87471, 12.92742],
          formattedAddress: 'Pattayatai, Pattaya, 20150, TH',
        },
        _id: '6404126cc26f8b90b443273b',
        name: 'I Like Pattaya',
        duration: 7,
        maxGroupSize: 12,
        difficulty: 'medium',
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        price: 15000,
        summary: 'Great',
        description: 'Sawasdee!',
        imageCover: 'tour-6-cover.jpg',
        images: [],
        startDates: ['2023-03-09T17:00:00.000Z'],
        secretTour: false,
        guides: [],
        locations: [],
        slug: 'i-like-pattaya',
        durationWeeks: 1,
        id: '6404126cc26f8b90b443273b',
      },
      {
        startLocation: {
          type: 'Point',
          coordinates: [98.95893, 18.77963],
          formattedAddress: ', Chiang Mai, 50200, TH',
        },
        _id: '6404208f19d7d4ff5316d9b4',
        name: 'Orbital Around Chiangmai',
        duration: 10,
        maxGroupSize: 12,
        difficulty: 'medium',
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        price: 15000,
        summary: 'Great',
        description: 'Sawasdee!',
        imageCover: 'tour-8-cover.jpg',
        images: [],
        startDates: ['2023-03-09T17:00:00.000Z'],
        secretTour: false,
        guides: [],
        locations: [],
        slug: 'orbital-around-chiangmai',
        durationWeeks: 1,
        id: '6404208f19d7d4ff5316d9b4',
      },
      {
        startLocation: {
          type: 'Point',
          coordinates: [100.57914, 13.83304],
          formattedAddress: ', BKK, 10900, TH',
        },
        _id: '6404203219d7d4ff5316d9b1',
        name: 'Bangkok I Will Servive',
        duration: 7,
        maxGroupSize: 12,
        difficulty: 'medium',
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
        price: 15000,
        summary: 'Great',
        description: 'Sawasdee!',
        imageCover: 'tour-7-cover.jpg',
        images: [],
        startDates: ['2023-03-09T17:00:00.000Z'],
        secretTour: false,
        guides: [],
        locations: [],
        slug: 'bangkok-i-will-servive',
        durationWeeks: 1,
        id: '6404203219d7d4ff5316d9b1',
      },
    ],
  },
};

// Get All
const getAll = async () => {
  const response = tours;

  localStorage.setItem('tours', JSON.stringify(response.data));
  return response.data;
};

// Create services
const tourService = {
  getAll,
};

export default tourService;
