import React, { useState } from "react";
import { send } from "emailjs-com";
import Alert from "@mui/material/Alert";

function ContactForm() {
  const [toSend, setToSend] = useState({
    from_name: "",
    phone_number: "",
    email_address: "",
    subject: "",
    message: "",
  });

  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_492o64a", "template_dhbtg9c", toSend, "J07gu0P6KsaZL9Fdu")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSuccessVisible(true);

      })
      .catch((err) => {
        console.log("FAILED...", err);
        setIsErrorVisible(true);

      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full xl:w-[60%] h-full">
      <div className="w-[80%] mx-auto my-auto tracking-widest">
        <p className="text-[#C28563] text-lg montserrat-font pt-4">
          QUOTE FROM
        </p>
        <h1 className="font-bold text-5xl py-2 text-black">REQUEST A VISIT</h1>
        <p className="text-black py-2 text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
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
              value={toSend.phone_number}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            name="email_address"
            placeholder="EMAIL ADDRESS"
            value={toSend.email_address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="SUBJECT"
            value={toSend.subject}
            onChange={handleChange}
          />
          <input
            type="text"
            name="message"
            placeholder="WRITE YOUR MESSAGE"
            value={toSend.message}
            onChange={handleChange}
          />
          <div className="flex w-full pb-4 mt-auto">
            <button
              type="submit"
              className="flex w-fit mt-4 bg-[#19130B] text-white tracking-widest p-3 ease-in duration-500 hover:bg-[#19130B]"
            >
              <p className="p-2 font-bold tracking-widest">WYŚLIJ WIADOMOŚĆ</p>
            </button>
          </div>
        </form>
        <div className="relative mb-5">
              <Alert
                severity="success"
                className={
                  isSuccessVisible ? "absolute top-0 left-0 w-full" : "invisible"
                }
              >
                Dziękujemy za wysłanie wiadomości!
              </Alert>
              <Alert
                severity="warning"
                className={
                  isErrorVisible ? "absolute top-0 left-0 w-full" : "invisible"
                }
              >
                Coś poszło nie tak podczas wysyłania wiadomości...
              </Alert>
            </div>
      </div>
    </div>
  );
}

export default ContactForm;
