// import React from "react";
// import MapEmbed from "./MapEmbeed";

// const ContactPage = () => {
//   return (
//     <div>
//       <hr className="h-px bg-gray-300 border-0" />
//       <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
//         {/* Page Heading */}
//        <div className="mb-12 text-center relative">
//   <h1
//     style={{ color: "var(--color-pprimary)" }}
//     className="text-4xl md:text-5xl font-bold inline-block relative"
//   >
//     Contact Us
//   </h1>

//   {/* Underline */}
//   <div
//     style={{ backgroundColor: "var(--color-ssecondary)" }}
//     className="h-1 w-70 mt-2 mx-auto"
//   ></div>
// </div>

//         {/* Contact Card */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="md:flex md:items-stretch">
//             {/* Contact Info Section */}
//             {/* <div className="md:w-1/2 p-8 md:p-10">
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 pt-1">
//                     <svg
//                       className="h-6 w-6 text-cyan-500"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                       Rupendehi, Butwal
//                     </h3>
//                     <div className="space-y-1 text-gray-600">
//                       <p className="hover:text-cyan-600 transition-colors">9857055535, 9807209805</p>
//                       <p className="hover:text-cyan-600 transition-colors">assn2063@gmail.com</p>
//                       <p>PO Box 95 Rupendehi</p>
//                       <p>Postal code 32900 - NEPAL</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//             <div className="md:w-1/2 p-8 md:p-10 flex items-center justify-center">
//               <div className="space-y-6 w-full max-w-xs">
//                 <div className="flex items-start justify-center w-full">
//   <div className="ml-4 text-center">
//     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//       <i className="fa fa-map-marker mr-2 text-cyan-500" aria-hidden="true"></i>
//       Rupendehi, Butwal
//     </h3>
//     <ul className="space-y-2 text-gray-600">
//       <li className="hover:text-cyan-600 transition-colors">
//         <i className="fa fa-phone mr-2 text-cyan-500" aria-hidden="true"></i>
//         9857055535, 9807209805
//       </li>
//       <li className="hover:text-cyan-600 transition-colors">
//         <i className="fa fa-envelope mr-2 text-cyan-500" aria-hidden="true"></i>
//         assn2063@gmail.com
//       </li>
//       <li>
//         <i className="fa fa-archive mr-2 text-cyan-500" aria-hidden="true"></i>
//         PO Box 95 Rupendehi
//       </li>
//       <li>
//         <i className="fa fa-paper-plane mr-2 text-cyan-500" aria-hidden="true"></i>
//         Postal code 32900 - NEPAL
//       </li>
//     </ul>
//   </div>
// </div>

//               </div>
//             </div>

//             {/* img */}
//             <div>
//               <img src="images/cartoonImg.png" alt="" />
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;






























// import React, { useState } from "react";
// import MapEmbed from "./MapEmbeed";
// import Footer from "../Layout/Footer";
// import ContactForm from "./FormContactUs";
// import HeroLikeSection from "./HeroLikeSection";




// const ContactPage = () => {


//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: '',
//     subject: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     setTimeout(() => {
//       setIsSubmitting(false);
//       alert('Message sent successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         number: '',
//         subject: '',
//         message: ''
//       });
//     }, 2000);
//   };

//   const regionalContacts = [
//     { location: 'Thori', phones: ['9818087143', '9829028377'] },
//     { location: 'Butwal', phones: ['9867366115', '9817407009'] },
//     { location: 'Maheshpur', phones: ['9827437612', '9827273705'] },
//     { location: 'Sarlahi', phones: ['9807693461', '9814890003'] },
//     { location: 'Chitwan', phones: ['9857055535', '9804267111'] }
//   ];





//   return (
//     <div className="pt-20">
//       <HeroLikeSection
//         src="images/heroLikeContactUsImg.jpg"
//         alt="Hero Image"
//         className="h-screen "
//         text="CONTACT US"
//       />
//       {/* <div className="min-h-screen mb-[-70px] flex flex-col items-start px-8 mt py-12 ">
//         <div className="w-full max-w-4xl mx-auto  mb-8">
//           <h2 
//           className="text-4xl  tracking-widest font-bold  text-orange-500 mb-8 "
//           >
//             CONTACT <span className="text-orange-500">US</span>
//           </h2>

//           <form className="w-full mx-auto max-w-5xl space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <label className="mb-1 text-sm">First Name</label>
//                 <input
//                   type="text"
//                   className="border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="mb-1 text-sm">Last Name</label>
//                 <input
//                   type="text"
//                   className="border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <label className="mb-1 text-sm">Email *</label>
//               <input
//                 type="email"
//                 className="border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="mb-1 text-sm">Message</label>
//               <textarea
//                 rows="4"
//                 className="border rounded-2xl px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="text-white rounded-full py-2 px-6 w-full hover:opacity-80 transition"
//               style={{ backgroundColor: "#24a69a" }}
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div> */}
// <div className="bg-white">
//       {/* <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
//           <p className="text-xl text-blue-100">Ready to make a difference? Get in touch with us</p>
//         </div>
//       </div> */}

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
//           <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
//             <div className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                   placeholder="Your Full Name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                   placeholder="your.email@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="number"
//                   name="number"
//                   value={formData.number}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                   placeholder="Your Phone Number"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                   placeholder="Message Subject"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-vertical"
//                   placeholder="Tell us how we can help you..."
//                 />
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className="w-full bg-[#24a69a] text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <span className="flex items-center justify-center">
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Sending...
//                   </span>
//                 ) : (
//                   'Send Message'
//                 )}
//               </button>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
//             <div className="  rounded-lg p-6 mb-8">
//               <h3 className="text-lg font-semibold text-blue-900 mb-2">Yubaraj Bishwokarma</h3>
//               <p className="text-blue-800 mb-2">Executive Director</p>
//               <div className="flex items-center text-blue-700">
//                 <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
//                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
//                 </svg>
//                 <a href="mailto:rasailiyubaraj66@gmail.com" className="hover:underline">
//                   rasailiyubaraj66@gmail.com
//                 </a>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
//                   <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900 mb-1">Head Office</h3>
//                   <p className="text-gray-600">
//                     Rupendehi, Butwal<br/>
//                     P.O Box 95<br/>
//                     Postal code 32900 - NEPAL
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
//                   <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900 mb-1">Phone Numbers</h3>
//                   <div className="space-y-1">
//                     <a href="tel:9857055535" className="text-gray-600 hover:text-blue-600 block transition duration-200">
//                       9857055535
//                     </a>
//                     <a href="tel:9807209805" className="text-gray-600 hover:text-blue-600 block transition duration-200">
//                       9807209805
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
//                   <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
//                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
//                   <a href="mailto:assn2063@gmail.com" className="text-gray-600 hover:text-blue-600 transition duration-200">
//                     assn2063@gmail.com
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
//             Counselling and Information Centers
//           </h2>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//             {regionalContacts.map((contact, index) => (
//               <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">{contact.location}</h3>
//                 <div className="space-y-2">
//                   {contact.phones.map((phone, phoneIndex) => (
//                     <div key={phoneIndex} className="flex items-center justify-center">
//                       <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
//                       </svg>
//                       <a
//                         href={`tel:${phone}`}
//                         className="text-gray-600 hover:text-blue-600 transition duration-200 font-medium"
//                       >
//                         {phone}
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
//           <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
//             <h2 className="text-xl font-semibold text-gray-900">Our Location</h2>
//           </div>
//           <div className="h-96">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56522.299158869304!2d85.30192792654009!3d27.69740520177342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1620992118229!5m2!1sen!2snp"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div> */}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ContactPage;











import React, { useState } from "react";
import MapEmbed from "./MapEmbeed";
import Footer from "../Layout/Footer";
import ContactForm from "./FormContactUs";
import HeroLikeSection from "./HeroLikeSection";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const regionalContacts = [
    { location: 'Thori', phones: ['9818087143', '9829028377'] },
    { location: 'Butwal', phones: ['9867366115', '9817407009'] },
    { location: 'Maheshpur', phones: ['9827437612', '9827273705'] },
    { location: 'Sarlahi', phones: ['9807693461', '9814890003'] },
    { location: 'Chitwan', phones: ['9857055535', '9804267111'] }
  ];

  return (
    <div className="pt-20">
      <HeroLikeSection
        src="images/heroLikeContactUsImg.jpg"
        alt="Hero Image"
        className="h-screen "
        text="CONTACT US"
      />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            <div className="bg-white border  border-gray-200 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#24a69a] focus:border-transparent transition duration-200"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#24a69a] focus:border-transparent transition duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#24a69a] focus:border-transparent transition duration-200"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#24a69a] focus:border-transparent transition duration-200"
                    placeholder="Message Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#24a69a] focus:border-transparent transition duration-200 resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-[#24a69a] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#1e8a80] focus:ring-2 focus:ring-[#24a69a] focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Yubaraj Bishwokarma</h3>
                <p className="text-gray-800 mb-2">Executive Director</p>
                <div className="flex items-center text-[#24a69a]">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <a href="mailto:rasailiyubaraj66@gmail.com" className="hover:underline">
                    rasailiyubaraj66@gmail.com
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#e5f5f4] rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#24a69a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Head Office</h3>
                    <p className="text-gray-600">
                      Rupendehi, Butwal<br/>
                      P.O Box 95<br/>
                      Postal code 32900 - NEPAL
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a href="tel:9857055535" className="text-gray-600 hover:text-[#24a69a] block transition duration-200">
                        9857055535
                      </a>
                      <a href="tel:9807209805" className="text-gray-600 hover:text-[#24a69a] block transition duration-200">
                        9807209805
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#dbfce7] rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#24a69a] " fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                    <a href="mailto:assn2063@gmail.com" className="text-gray-600 hover:text-[#24a69a] transition duration-200">
                      assn2063@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Counselling and Information Centers
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {regionalContacts.map((contact, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{contact.location}</h3>
                  <div className="space-y-2">
                    {contact.phones.map((phone, phoneIndex) => (
                      <div key={phoneIndex} className="flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                        <a
                          href={`tel:${phone}`}
                          className="text-gray-600 hover:text-[#24a69a] transition duration-200 font-medium"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
