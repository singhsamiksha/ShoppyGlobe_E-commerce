import { useState } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/OrderForm.css';

const OrderForm = ({ onSave }) => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    landmark: '',
  });

  // Handle input field changes
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form className='order-form' onSubmit={handleSubmit}>
      {/* Input fields for user details */}
      <input
        type='text'
        name='fullName'
        placeholder='Full Name'
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='phoneNumber'
        placeholder='Phone Number'
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='streetAddress'
        placeholder='Street Address'
        value={formData.streetAddress}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='apartment'
        placeholder='Apartment/Suite/Floor Number'
        value={formData.apartment}
        onChange={handleChange}
      />
      <input
        type='text'
        name='city'
        placeholder='City/Town'
        value={formData.city}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='state'
        placeholder='State'
        value={formData.state}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='country'
        placeholder='Country'
        value={formData.country}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='zipcode'
        placeholder='Zipcode'
        value={formData.zipcode}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='landmark'
        placeholder='Landmark'
        value={formData.landmark}
        onChange={handleChange}
      />
      {/* Submit button */}
      <button type='submit'>Save Address</button>
    </form>
  );
};

// Prop validation
OrderForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default OrderForm;
