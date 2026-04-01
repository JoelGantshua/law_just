import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      <p className="text-center mb-4">
        We are here to assist you. Please fill out the form below to get in touch.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary-500"
        />

        <button
          type="submit"
          className="bg-primary-600 text-white p-2 rounded-md hover:bg-primary-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;