import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneSquareAlt, FaTelegram } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bkgcsd8",
        "template_mvyb4lu",
        form.current,
        "7csjX-OvJvgUzwv97",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
        },
      );
  };

  return (
    <article className=" bg-slate-100  dark:bg-gray-900 transition-colors duration-400 flex flex-col items-center py-6 ">
      <div className="md:flex justify-between w-full md:max-w-7xl px-4 pt-16 transition-colors duration-400 ">
        <div className="w-full md:w-1/2 pb-5 space-y-4 text-gray-700 dark:text-white transition-colors duration-400 ">
          <h1 className="animate-wiggle-left opacity-0 [animation-delay:0ms] mb-6 text-2xl sm:text-6xl font-bold text-gray-700 dark:text-gray-300  ">Contact Information</h1>
          <p className="animate-wiggle-left opacity-0 [animation-delay:50ms]">
            I’m currently free and open to new opportunities, so please feel
            free to reach me anytime if you’d like to work together, share an
            idea, or simply start a conversation.
          </p>
          <div className="animate-wiggle-left opacity-0 [animation-delay:100ms] mt-10 flex items-center justify-start">
            <MdEmail size={25} color="#FFD803" className="mr-2" />
            <p>chaydouble0@gmail.com</p>
          </div>
          <div className="animate-wiggle-left opacity-0 [animation-delay:125ms] flex items-center justify-start">
            <IoMdPin size={25} color="#FFD803" className="mr-2" />
            <p>334 Kampong Rou, Svay Rieng</p>
          </div>
          <div className="animate-wiggle-left opacity-0 [animation-delay:150ms] flex items-center justify-start">
            <FaPhoneSquareAlt color="#FFD803" size={25} className="mr-2" />
            <p>(855) 60446580</p>
          </div>
          <div className="animate-wiggle-left opacity-0 [animation-delay:200ms] flex items-center py-4 space-x-4">
            <a
              className="hover:scale-130 transition duration-75"
              href="https://www.linkedin.com/in/meas-vanchay-9799b036a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={37} color="#FFD803" />
            </a>
            <a
              className="hover:scale-130 transition duration-75"
              href="https://www.facebook.com/vanchay.21/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={37} color="#FFD803" />
            </a>
            <a
              className="hover:scale-130 transition duration-75"
              href="https://github.com/Vanchay01"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={37} color="#FFD803" />
            </a>
            <a
              className="hover:scale-130 transition duration-75 "
              href="https://t.me/vanchayyy"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram size={37} color="#FFD803" />
            </a>
          </div>
        </div>
        <div className=" w-full md:w-1/2 md:flex justify-end  ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full space-y-4 md:max-w-sm p-4 border-gray-900 dark:border-gray-100 rounded transition-colors duration-400 text-gray-700 dark:text-gray-300"
          >
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />
            <input type="hidden" name="title" value="Website Contact" />
            <label htmlFor="" className="animate-wiggle-right opacity-0 [animation-delay:350ms]">Name</label>
            <input
              type="text"
              name="name"
              className="animate-wiggle-right opacity-0 [animation-delay:0ms] w-full  p-3 border rounded border-gray-900 dark:border-gray-100 text-gray-700 dark:text-white transition-colors duration-400"
              required
            />
            <label htmlFor="" className="animate-wiggle-right opacity-0 [animation-delay:450ms]">Email</label>
            <input
              type="email"
              name="user_email"
              className="animate-wiggle-right opacity-0 [animation-delay:50ms] w-full p-3 border rounded border-gray-900 dark:border-gray-100 text-gray-700 dark:text-white transition-colors duration-400"
              required
            />
            <label htmlFor="" className="animate-wiggle-right opacity-0 [animation-delay:550ms]">Message</label>
            <textarea
              name="message"
              className="animate-wiggle-right opacity-0 [animation-delay:100ms] w-full p-3 border rounded border-gray-900 dark:border-gray-100 text-gray-700 dark:text-white transition-colors duration-400"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className=" animate-wiggle-right opacity-0 [animation-delay:150ms] hover:blur-5 w-full  box-button px-6 py-2 rounded cursor-pointer transition duration-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Contact;