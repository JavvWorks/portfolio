import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "../components/SocialLinks";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const form = e.target;
      const formData = new FormData(form);
      await form.submit();

      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        timer: 2000,
        timerProgressBar: true,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#6366f1',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
      <div className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0" id="Contact">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10 max-w-xl w-full">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Get in Touch</h2>
              <p className="text-gray-400">Have something to discuss? Send me a message and let's talk.</p>
            </div>
            <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
          </div>

          <form
            action="https://formsubmit.co/sliceruk564@gmail.com" 
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="relative group">
              <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1]" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all"
              />
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1]" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all"
              />
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1]" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 h-[9.9rem]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
