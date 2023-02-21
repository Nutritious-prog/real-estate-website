import React, { useState } from "react";
import { send } from "emailjs-com";

import "./Contact.css";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    phone_number: "",
    email_address: "",
    subject: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_492o64a", "template_dhbtg9c", toSend, "J07gu0P6KsaZL9Fdu")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full lg:h-[75vh] h-fit flex mt-10">
      <div className="w-full h-[100%] my-auto contact-bg flex">
        <div className="lg:w-[45%] w-[100%] h-fit min-h-[110%] bg-[#C28563] -mt-[2%] lg:ml-[5%] flex mx-auto lg:mx-0">
          <div className="w-[80%] mx-auto my-auto tracking-widest">
            <p className="text-white text-lg montserrat-font pt-4">
              QUOTE FROM
            </p>
            <h1 className="font-bold text-5xl py-2 text-white">
              REQUEST A VISIT
            </h1>
            <form
              onSubmit={onSubmit}
              className="flex flex-col w-full montserrat-font text-sm tracking-widest mt-4"
            >
              <div className="w-full flex lg:flex-row flex-col">
                <input
                  className="lg:w-[48%] w-full mr-1 my-2 text-black"
                  type="text"
                  name="from_name"
                  placeholder="YOUR NAME"
                  value={toSend.from_name}
                  onChange={handleChange}
                />
                <input
                  className="lg:w-[48%] w-full ml-auto"
                  type="text"
                  name="phone_number"
                  placeholder="PHONE NUMBER"
                  value={toSend.to_name}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="email_address"
                placeholder="EMAIL ADDRESS"
                value={toSend.reply_to}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="SUBJECT"
                value={toSend.reply_to}
                onChange={handleChange}
              />
              <input
                type="text"
                name="message"
                placeholder="WRITE YOUR MESSAGE"
                value={toSend.message}
                onChange={handleChange}
              />
              <div className="flex w-full pb-4">
                <button
                  type="submit"
                  className="flex w-fit mt-4 bg-[#19130B] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]"
                >
                  <p className="p-2 font-bold tracking-widest">WYŚLIJ WIADOMOŚĆ</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
