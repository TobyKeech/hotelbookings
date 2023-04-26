import {useState} from "react"
import { postBooking } from "../BookingService";

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState(
        {
            name : "",
            email:"",
            checked_in: "true", 
            checked_out: "false"
        })

    const onChange = (event) => {
        const newFormData = Object.assign({},formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData); 

    }

    const onRadioChange = (e) => {
        const veryNewFormData = { ...formData };
        let value;
        if (e.target.value === "false") {
          value = false;
        } else if (e.target.value === "true") {
          value = true;
        }
        veryNewFormData[e.target.name] = value;
        console.log(formData)
        setFormData(veryNewFormData);
      };

    const onSubmit = (event) =>{
        event.preventDefault();
        postBooking(formData).then((data)=>{
            addBooking(data);
        })
        // Reset the form input values
        setFormData({
            name: "",
            email: "",
            checked_in: "true",
            checked_out: "false"
        });
    }

    return (  
        <>
        <form onSubmit={onSubmit} id="bookings-form">
        <h2>Add a booking</h2>


        <div>
        <label htmlFor="name">Name:</label>
        <input 
        onChange={onChange}
        type="text" 
        id="name"
        name="name"
        value={formData.name}
        />
        </div>

        <div>
        <label htmlFor="email">Email:</label>
        <input 
        onChange={onChange}
        type="text" 
        id="email"
        name="email"
        value={formData.email}
        />
        </div>

        <div>
        <label htmlFor="checked_in">Checked in:</label>
        <input 
        onRadioChange={onRadioChange}
        type="radio" 
        id="checked_in"
        name="checked_status"
        value={formData.checked_in}
        />
        </div>

        <div>
        <label htmlFor="checked_out">Checked out:</label>
        <input 
        onRadioChange={onRadioChange}
        type="radio" 
        id="checked_out"
        name="checked_status"
        value={formData.checked_out}
        />
        </div>

        <input type="submit" value="Save" id="save"/>

        </form>

        </>
    );
}
 
export default BookingForm;