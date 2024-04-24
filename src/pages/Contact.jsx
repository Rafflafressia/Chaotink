import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="h-[740px] md:h-[720px] lg:h-[780px] xl:h-[883px] flex justify-center lg:relative lg:left-[10px] lg:top-[35px]">
      <div className="my-auto lg:mx-auto md:my-[100px] md:py-[100px] w-[300px] flex flex-col space-y-2 justify-center md:text-center rounded-xl md:w-[800px]">
      <h1 className="text-3xl mx-auto text-cyan-300 font-extrabold">Contact <span className="text-white">Me!</span></h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 col-span-full mx-auto place-content-center">
        <div className="grid w-[50px] py-2">
          <input
            type="text"
            name="name"
            className="my-2 py-1 bg-transparent border-cyan-300 border-2 rounded-md px-2 lg:mr-2 lg:w-[200px] placeholder-white"
            placeholder="Your Full Name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>

        <div className="grid w-[50px] py-2">
          <input
            type="text"
            name="mobile"
            className="my-2 py-1 bg-transparent border-cyan-300 border-2 rounded-md px-2 lg:ml-4 lg:w-[200px] placeholder-white"
            placeholder="Your Phone Number"
            value={formState.mobile}
            onChange={handleChange}
          />
        </div>

        <div className="grid w-[50px] py-2">
          <input
            type="text"
            name="subject"
            className="my-2 py-1 bg-transparent border-cyan-300 border-2 rounded-md px-2 lg:mr-2 lg:w-[200px] placeholder-white"
            placeholder="Subject Line Goes Here"
            value={formState.subject}
            onChange={handleChange}
          />
        </div>

        <div className="grid w-[50px] py-2">
          <input
            type="email"
            name="email"
            className="my-2 py-1 bg-transparent border-cyan-300 border-2 rounded-md px-2 lg:ml-4 lg:w-[200px] placeholder-white"
            placeholder="Your Email Here"
            value={formState.email}
            onChange={handleChange}
          />
        </div>

        <div className="mx-auto grid w-[200px] py-2">
          <textarea
            name="message"
            className="my-2 py-1 bg-transparent border-cyan-300 border-2 rounded-md px-2 h-[200px] md:w-[400px] lg:w-[500px] placeholder-white"
            placeholder="Add a brief message of reason for contact"
            onChange={handleChange}
            value={formState.message}
          ></textarea>
           <button type="submit" className="mx-auto mt-4 p-2 rounded-lg bg-cyan-300 w-[100px] lg:h-[50px] lg:w-[175px]">Submit</button>
        </div>
       
      </form>
      </div>
    </div>
  );
};

export default Contact;
