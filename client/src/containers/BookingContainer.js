import {useEffect, useState} from "react"
import BookingsList from "../components/BookingList"
import { getBookings } from "../BookingService"
import BookingForm from "../components/BookingForm";

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

  const addBooking = (booking) => {
    setHotelBookings([...hotelBookings, booking]);
  }

    return (  
        <>
            < BookingForm addBooking = {addBooking}/>
            < BookingsList bookings = {hotelBookings} removeBooking ={removeBooking}/>
        </>
    );
}
 
export default BookingContainer;

