import {useEffect, useState} from "react"
import BookingsList from "../components/BookingList"
import { getBookings } from "../BookingService"

const BookingContainer = () => {

    
const [hotelBookings, setHotelBookings] = useState([]);


useEffect(() => {
    getBookings().then((allBookings) => {
      setHotelBookings(allBookings);
    })
  }, []);

  const removeBooking = (id) => {
    const bookingsToRemain = hotelBookings.filter(booking => booking._id !== id)
    setHotelBookings(bookingsToRemain);
  }

    return (  
        <>
            < BookingsList bookings = {hotelBookings} removeBooking ={removeBooking}/>
        </>
    );
}
 
export default BookingContainer;