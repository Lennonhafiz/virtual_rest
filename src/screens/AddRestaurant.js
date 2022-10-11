import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContext"

function AddRestaurant() {
  const Navigate = useNavigate();

  const { success, loading, AuthAddRestaurant } = useContext(AuthContext);
  const [restaurantname, setRestaurantname] = useState("");
  const [location, setLocation] = useState("");
  const [booking, setBooking] = useState("");
  const [rating, setRating] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (success) {
      Navigate("/addmenu");
    }
  },);

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthAddRestaurant(restaurantname,location,rating, booking,contact);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="col-sm12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 bg-info">
        <div className="form-group m-2">
          <label htmlFor="restaurantname">restaurantname</label>
          <input
            type="text"
            className="form-control"
            placeholder="restaurantname"
            value={restaurantname}
            onChange={(e) => setRestaurantname(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="location">location</label>
          <input
            type="location"
            className="form-control"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-group m-2">
          <label htmlFor="booking">booking</label>
          <input
            type="booking"
            className="form-control"
            placeholder="booking"
            value={booking}
            onChange={(e) => setBooking(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="rating">rating</label>
          <input
            type="rating"
            className="form-control"
            placeholder="add rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="contact">contact</label>
          <input
            type="booking"
            className="form-control"
            placeholder="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary m-2">
          {loading ? "Loading..." : "Register restaurant"}
        </button>
        <div className="row">
          I already have an account
          <Link to="/" className="raf">Login</Link>
        </div>
        <div className="row">
          I don't have an account
          <Link to="/signup" className="raf">sign up</Link>
        </div>

        <div className="row">
          I am restaurant owner
          <Link to="/addrestaurant" className="raf">
            Register restaurant
          </Link>
        </div>
      </div>
    </form>
  );
}

export default AddRestaurant;
