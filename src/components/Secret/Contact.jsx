import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
        <div className=" w-full sm:w-2/3 bg-gray-100 dark:bg-gray-900 flex justify-center py-4 transition-colors duration-400 ">
            <div className="w-full max-w-7xl px-4 transition-colors duration-400 ">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Contact me</h1>
                <div className="w-full flex justify-between bg-gray-300.">
                    <div className="w-full max-w-md bg-gray-600">
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md bg-gray-500">
                        <input type="hidden" name="time"
                            value={new Date().toLocaleString()}
                        />
                        <input type="hidden" name="title"
                            value="Website Contact"
                        />
                        <input type="text" name="name" placeholder="Your Name"
                            className="w-full p-3 border rounded"
                            required
                        />
                        <input type="email" name="user_email" placeholder="Your Email"
                            className="w-full p-3 border rounded"
                            required
                        />
                        <textarea name="message"  placeholder="Your Message"
                            className="w-full p-3 border rounded"
                            rows="5"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </article>
  );
}

export default Contact