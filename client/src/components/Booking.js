import { deleteBooking } from "../BookingService";
const Booking = ({booking, removeBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id);
        })
    
    }

    return ( 
        <>
           <div>{booking.name}</div>
           <div>{booking.email}</div>
           <div>{booking.checked_in ? "Checked in" : "Checked out"}</div>
           <button onClick={handleDelete}>🗑 </button>
        </>
     );
}
 
export default Booking;