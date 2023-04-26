import {useState} from "react"
import { postBooking } from "../BookingService";

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState(
        {
            name : "",
            email:"",
            checked_in: false
        })

    const onChange = (event) => {
        const newFormData = Object.assign({},formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData); 

    }

    const onRadioChange = (e) => {
        const veryNewFormData = { ...formData };
        console.log('e.target.value', e.target.value)
        let value;
        if (e.target.value === "false") {
          value = false;
        } else if (e.target.value === "true") {
          value = true;
        }
        veryNewFormData.checked_in = value;
        setFormData(veryNewFormData, () => {
            console.log(formData);
        });
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
            checked_in: false
        });
    }

    return (  
        <>
        <form onSubmit={onSubmit} id="bookings-form">
        <h2>Add a booking</h2>


        <div>
        <label htmlFor="name">Name:</label>
        <input 
        required
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
        required
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
        onChange={onRadioChange}
        type="radio" 
        id="checked_in"
        name="checked_status"
        value="true"
        />
        </div>

        <div>
        <label htmlFor="checked_out">Checked out:</label>
        <input 
        onChange={onRadioChange}
        type="radio" 
        id="checked_out"
        name="checked_status"
        value="false"
        />
        </div>

        <input class="button" type="submit" value="Save" id="save"/>

        </form>

        </>
    );
}
 
export default BookingForm;