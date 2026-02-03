import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7sfajgl",
        "template_ixdn1kn",
        form.current,
        "MfXiOqXLZm3SCHBoy"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
        }
      );
  };

  return (
    <article className=" bg-slate-100 dark:bg-gray-900 transition-colors duration-400 flex flex-col items-center">
       <div className="md:flex justify-between w-full md:max-w-7xl p-4 transition-colors duration-400 ">
           <div className="w-full md:w-1/2 pb-5 space-y-4 text-gray-700 dark:text-white transition-colors duration-400 ">
               <h1 className="text-4xl font-bold ">Contact Information</h1>
               <p>We are committed to processing the information in order to contact you and talk about your project.</p>
               <div className="mt-10 flex items-center justify-start"> 
                   <MdEmail size={25} className="mr-2"/>
                   <p>chaydouble0@gmail.com</p>
               </div>
               <div className="flex items-center justify-start"> 
                   <IoMdPin size={25} className="mr-2"/>
                   <p>334 Kampong Rou, Svay Rieng</p>
               </div>
               <div className="flex items-center justify-start"> 
                   <FaPhoneSquareAlt size={25} className="mr-2"/>
                   <p>(855) 60446580</p>
               </div>
           </div>
           <div className="w-full md:w-1/2 md:flex justify-end">
               <form ref={form} onSubmit={sendEmail} className="w-full space-y-4 md:max-w-sm p-4 border border-gray-900 dark:border-gray-100 rounded bg-white dark:bg-gray-800 transition-colors duration-400 ">                       
                   <input type="hidden" name="time"
                       value={new Date().toLocaleString()}
                   />
                   <input type="hidden" name="title"
                       value="Website Contact"
                   />
                   <input type="text" name="name" placeholder="Name"
                       className="w-full p-3 border rounded border-gray-900 dark:border-gray-100 text-gray-700 dark:text-white transition-colors duration-400"
                       required
                   />
                   <input type="email" name="user_email" placeholder="Email"
                       className="w-full p-3 border rounded border-gray-900 dark:border-gray-100 text-gray-700 dark:text-white transition-colors duration-400"
                       required
                   />
                   <textarea name="message"  placeholder="Message"
                       className="w-full p-3 border rounded border-gray-900 dark:border-gray-100 text-gray-700 dark:text-white transition-colors duration-400"
                       rows="5"
                       required
                   ></textarea>
                   <button
                       type="submit"
                       className="w-full bg-purple-600 text-white px-6 py-2 rounded cursor-pointer hover:bg-purple-700 transition-colors duration-400"
                   >
                       Send Message
                   </button>
               </form>
           </div>
          
       </div>
       <footer className="w-full bg-white dark:bg-gray-900 shadow z-50 text-gray-700 dark:text-white transition-colors duration-400">
           <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center">
           <p className="font-medium">© 2026 Meas Vanchay. All Rights Reserved.</p>
           </div>
       </footer>
   </article>

  );
}

export default Contact