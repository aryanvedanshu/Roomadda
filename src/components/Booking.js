import React, { useState } from 'react';

const Booking = () => {
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleBooking = (e) => {
    e.preventDefault();
    // Implement booking logic
  };

  return (
    <div className="booking">
      <h2>Booking</h2>
      <form onSubmit={handleBooking}>
        <input
          type="date"
          value={bookingDetails.checkIn}
          onChange={(e) => setBookingDetails({ ...bookingDetails, checkIn: e.target.value })}
        />
        <input
          type="date"
          value={bookingDetails.checkOut}
          onChange={(e) => setBookingDetails({ ...bookingDetails, checkOut: e.target.value })}
        />
        <input
          type="number"
          min="1"
          value={bookingDetails.guests}
          onChange={(e) => setBookingDetails({ ...bookingDetails, guests: e.target.value })}
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
