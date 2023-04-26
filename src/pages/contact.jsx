import React, { useState } from "react";
import "./contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "Gökhan Yıldırım",
    email: "gokhanyildirim@example.com",
    phone: "+90 555 123 4567",
    address: "1234 Example Street, Istanbul, Turkey",
    occupation: "Software Developer",
    socialMedia: {
      twitter: "@gokhanyildirim",
      instagram: "@gokhan.yildirim",
    },
    website: "www.gokhanyildirim.com",
    interests: "Photography, Cooking, Traveling",
    notes: "Available for freelance projects.",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Perform form submission logic here, e.g. send data to server
    console.log("Form Data:", formData);
    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      occupation: "",
      socialMedia: {
        twitter: "",
        instagram: "",
      },
      website: "",
      interests: "",
      notes: "",
    });
  };

  return (
    <div>
      <h1>İletişim</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
        <label htmlFor="twitter">Twitter:</label>
        <input
          type="text"
          id="twitter"
          name="socialMedia.twitter"
          value={formData.socialMedia.twitter}
          onChange={handleChange}
        />
        <label htmlFor="instagram">Instagram:</label>
        <input
          type="text"
          id="instagram"
          name="socialMedia.instagram"
          value={formData.socialMedia.instagram}
          onChange={handleChange}
        />
        <label htmlFor="website">Website:</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <label htmlFor="interests">Interests/Hobbies:</label>
        <input
          type="text"
          id="interests"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
        />
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
