import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Banner from "../../assets/sticker-banner.png";

const serviceId = "service_uh2mw14";
const templateId = "template_59cry7q";

// Modal Component
const Modal = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white flex flex-col justify-center items-center p-8 rounded-md shadow-md">
      <p className="text-black">{message}</p>
      <button onClick={onClose} className="mt-4 p-2 bg-blue-500 text-white rounded-md">
        Close
      </button>
    </div>
  </div>
);

const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [modalMessage, setModalMessage] = useState(""); // State to hold the modal message
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formState.name) errors.name = "Name is required";
    if (!formState.mobile) errors.mobile = "Mobile is required";
    if (!formState.email) errors.email = "Email is required";
    if (!formState.subject) errors.subject = "Subject is required";
    if (!formState.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const templateParams = {
        name: formState.name,
        mobile: formState.mobile,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, "g19kVGbTY3Yqx-Hou")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setModalMessage("Form Submitted Successfully");
          setIsModalOpen(true);
          setFormState({
            name: "",
            mobile: "",
            email: "",
            subject: "",
            message: "",
          });
        })
        .catch((err) => {
          console.error("FAILED...", err);
          setModalMessage("Failed to send the form. Please try again.");
          setIsModalOpen(true);
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="[background:#b9bab7] text-white h-full">
      <div className="flex flex-col md:flex-row md:items-start lg:justify-between xl:p-16 xl:mx-40">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row">
            <div className="p-4">
              <h1 className="text-xl border-b-2 border-white xl:text-5xl">
                Socials
              </h1>
              <ul className="py-4">
                <li>
                  <button onClick={() => window.open("https://www.linkedin.com/in/arkaw-banerjee-600181103", "_blank")} className="hover:underline">
                    LinkedIn
                  </button>
                </li>
                <li>
                  <button onClick={() => window.open("https://github.com/Rafflafressia", "_blank")} className="hover:underline">
                    GitHub
                  </button>
                </li>
                <li>
                  <button onClick={() => window.open("https://www.facebook.com/arkaw.banerjee/", "_blank")} className="hover:underline">
                    Facebook
                  </button>
                </li>
                <li>
                  <button onClick={() => window.open("https://www.instagram.com/rafflafressia/", "_blank")} className="hover:underline">
                    Instagram
                  </button>
                </li>
              </ul>
            </div>

            <div className="p-4">
              <h1 className="text-xl border-b-2 border-white xl:text-5xl">
                Case Studies
              </h1>
              <ul className="py-4">
                <li>
                  <Link to="/Bake" className="hover:underline">
                    Baketomo
                  </Link>
                </li>
                <li>
                  <Link to="/Star" className="hover:underline">
                    Star Inventory Logistics
                  </Link>
                </li>
                <li>
                  <Link to="/Prem" className="hover:underline">
                    Premium Custom Surfacing
                  </Link>
                </li>
                <li>
                  <Link to="/Answ" className="hover:underline">
                    Answerables
                  </Link>
                </li>
              </ul>
            </div>

            <div className="p-4">
              <h1 className="text-xl border-b-2 border-white xl:text-5xl">
                Portfolio
              </h1>
              <ul className="py-4">
                <li>
                  <Link to="/web-dev" className="hover:underline">
                    Full Stack Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/graphic-design" className="hover:underline">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link to="/illustrations" className="hover:underline">
                    Illustrations
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <img src={Banner} alt="Banner of illustrations" className="w-4/6 mx-auto" />
            <p className="text-center text-xl invisible fixed">Check out my stickers!</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="contact flex flex-col text-black mx-4 items-center justify-center pb-[100px] space-y-4 md:mx-8"
        >
          <h1 className="text-xl text-white border-b-2 border-white xl:text-5xl">
            Contact
          </h1>
          <div className="flex flex-col w-full space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                className="text-center bg-transparent border-2 rounded-md p-2 placeholder-white"
                placeholder="Your Full Name"
                value={formState.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="text-red-500 text-center">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                name="mobile"
                className="text-center bg-transparent border-2 rounded-md p-2 placeholder-white"
                placeholder="Phone Number"
                value={formState.mobile}
                onChange={handleChange}
              />
              {errors.mobile && (
                <span className="text-red-500 text-center">
                  {errors.mobile}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div className="flex flex-col">
              <input
                type="text"
                name="subject"
                className="text-center bg-transparent border-2 rounded-md p-2 placeholder-white"
                placeholder="Subject Line"
                value={formState.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <span className="text-red-500 text-center">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                className="text-center bg-transparent border-2 rounded-md p-2 placeholder-white"
                placeholder="Your Email Here"
                value={formState.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-500 text-center">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-center space-y-4 text-white">
            <textarea
              name="message"
              className="text-center w-full bg-transparent border-2 rounded-md p-2 placeholder-white"
              placeholder="Add a brief message of reason for contact"
              onChange={handleChange}
              value={formState.message}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-center">{errors.message}</span>
            )}
            <button
              type="submit"
              className="text-white w-full p-2 rounded-lg [background:#16425b]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Render the modal when it's open */}
      {isModalOpen && (
        <Modal
          message={modalMessage}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Contact;
