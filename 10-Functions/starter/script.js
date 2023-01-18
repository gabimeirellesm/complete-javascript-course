'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassangers, price) {
  const booking = {
    flightNum,
    numPassangers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LM123');
