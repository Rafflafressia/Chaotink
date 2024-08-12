import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const serviceId = "service_uh2mw14";
const templateId = "template_l2bt15e";

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
      // Sending the email using EmailJS
      emailjs.send(
        serviceId,       
        templateId,      
        form.current,
        {
          publicKey: 'g19kVGbTY3Yqx-Hou',
        }           
      )
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Form Submitted Successfully");
        setFormState({ name: "", mobile: "", email: "", subject: "", message: "" });
      })
      .catch(err => {
        console.error('FAILED...', err);
        alert("Failed to send the form. Please try again.");
      });
    } else {
      setErrors(validationErrors);
    }
  };

  // The rest of your component remains the same
  const linkedInURL = "https://www.linkedin.com/in/arkaw-banerjee-600181103";
  const goToLinkedIn = () => window.open(linkedInURL, "_blank");

  const githubURL = "https://github.com/Rafflafressia";
  const goToGithub = () => window.open(githubURL, "_blank");

  const instagramURL = "https://www.instagram.com/rafflafressia/";
  const goToInstagram = () => window.open(instagramURL, "_blank");

  const facebookURL = "https://www.facebook.com/arkaw.banerjee/";
  const goToFacebook = () => window.open(facebookURL, "_blank");

  return (
    <div className="[background:#b9bab7] text-white h-full">
      <div className="flex flex-col md:flex-row md:items-start lg:justify-between xl:p-16 xl:mx-40">
        <div className="flex flex-row">
          <div className="p-4">
            <h1 className="text-xl border-b-2 border-white xl:text-5xl">
              Socials
            </h1>
            <ul className="py-4">
              <li><button onClick={goToLinkedIn} className="hover:underline">LinkedIn</button></li>
              <li><button onClick={goToGithub} className="hover:underline">GitHub</button></li>
              <li><button onClick={goToFacebook} className="hover:underline">Facebook</button></li>
              <li><button onClick={goToInstagram} className="hover:underline">Instagram</button></li>
            </ul>
          </div>

          <div className="p-4">
            <h1 className="text-xl border-b-2 border-white xl:text-5xl">Case Studies</h1>
            <ul className="py-4">
              <li><Link to="/Bake" className="hover:underline">Baketomo</Link></li>
              <li><Link to="/Star" className="hover:underline">Star Inventory Logistics</Link></li>
              <li><Link to="/Prem" className="hover:underline">Premium Custom Surfacing</Link></li>
              <li><Link to="/Answ" className="hover:underline">Answerables</Link></li>
            </ul>
          </div>

          <div className="p-4">
            <h1 className="text-xl border-b-2 border-white xl:text-5xl">Portfolio</h1>
            <ul className="py-4">
              <li><Link to="/web-dev" className="hover:underline">Full Stack Web Development</Link></li>
              <li><Link to="/graphic-design" className="hover:underline">Graphic Design</Link></li>
              <li><Link to="/illustrations" className="hover:underline">Illustrations</Link></li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col text-black mx-4 items-center justify-center pb-[100px] space-y-4 md:mx-8">
          <h1 className="text-xl text-white border-b-2 border-white xl:text-5xl">Contact</h1>
          <div className="flex flex-col w-full space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                className="text-center"
                placeholder="Your Full Name"
                value={formState.name}
                onChange={handleChange}
              />
              {errors.name && <span className="text-red-500 text-center">{errors.name}</span>}
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                name="mobile"
                className="text-center"
                placeholder="Phone Number"
                value={formState.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <span className="text-red-500 text-center">{errors.mobile}</span>}
            </div>
          </div>

          <div className="flex flex-col w-full space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div className="flex flex-col">
              <input
                type="text"
                name="subject"
                className="text-center"
                placeholder="Subject Line"
                value={formState.subject}
                onChange={handleChange}
              />
              {errors.subject && <span className="text-red-500 text-center">{errors.subject}</span>}
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                className="text-center"
                placeholder="Your Email Here"
                value={formState.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-red-500 text-center">{errors.email}</span>}
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-center space-y-4">
            <textarea
              name="message"
              className="text-center w-full"
              placeholder="Add a brief message of reason for contact"
              onChange={handleChange}
              value={formState.message}
            ></textarea>
            {errors.message && <span className="text-red-500 text-center">{errors.message}</span>}
            <button type="submit" className="text-black w-full p-2 rounded-lg [background:#d9dcd6]">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
