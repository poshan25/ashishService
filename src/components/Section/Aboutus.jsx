




// // // import React from "react";
// // // import Footer from "../Layout/Footer";
// // // import { useRef } from "react";
// // // import { useEffect } from "react";
// // // import HeroLikeSection from "./HeroLikeSection";

// // // const Aboutus = () => {

// // //   //page load hudha khari top dakhi show garna ko lagi
// // //   useEffect(() => {
// // //     window.scrollTo(0, 0);
// // //   }, []);

// // //   return (
// // //     <div className="w-full pt-20">
// // //       <HeroLikeSection src="images/newHeroImage.jpeg" />
// // //       {/* About Us Section */}
// // //       <div className="bg-gradient-to-r from-[#3b84b8] to-[#2c439f] text-white py-20 px-6">
        
// // //         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
// // //           <img
// // //             src="images/newHeroImage.jpeg"
// // //             alt="About us"
// // //             className="rounded w-full h-[400px] object-cover"
// // //           />
// // //           <div className="space-y-6">
// // //             <h2 className="text-4xl font-bold">Who We Are</h2>
// // //             <p className="text-lg leading-relaxed">
// // //               Ashish Social Service Nepal (ASSN) is a registered non-profit NGO
// // //               that has been working in Nepal since 2006 to fight against human
// // //               trafficking and empower vulnerable women and girls with skills for a
// // //               brighter future.
// // //             </p>
// // //             <p className="text-lg leading-relaxed">
// // //               Our head office is in Butwal-Rupandehi with a secondary office in
// // //               Bharatpur, Chitwan. The open border between Nepal and India is known
// // //               as one of the busiest human trafficking highways in the world.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Mission Section */}
// // //       <div className="bg-[#eee8f5] text-gray-800 py-20 px-6">
// // //         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
// // //           <div className="space-y-6">
// // //             <h2 className="text-4xl font-bold text-blue-800">Our Mission</h2>
// // //             <p className="text-lg leading-relaxed">
// // //               Our mission is to rescue, rehabilitate, and empower women and girls
// // //               who are victims or at risk of human trafficking. We aim to build a
// // //               safe and just society by creating awareness, providing education,
// // //               and offering skill-based training to help them lead independent lives.
// // //             </p>
// // //           </div>
// // //            <img
// // //             src="images/ourMission.png"
// // //             alt="About us"
// // //             className="rounded w-full h-[400px] object-cover"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* Vision Section */}
// // //       <div className="bg-gradient-to-r from-[#2982b1] to-[#2d45a8] text-white py-20 px-6">
// // //         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
// // //           <img
// // //             src="images/newHeroImage.jpeg"
// // //             alt="About us"
// // //             className="rounded w-full h-[400px] object-cover"
// // //           />
// // //           <div className="space-y-6">
// // //             <h2 className="text-4xl font-bold">Our Vision</h2>
// // //             <p className="text-lg leading-relaxed">
// // //               We envision a Nepal where every woman and girl is safe, valued, and
// // //               empowered to realize her full potential. A nation free from human
// // //               trafficking, where survivors become leaders and change-makers in their
// // //               communities.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //     </div>
// // //   );
// // // };

// // // export default Aboutus;






// // import React, { useEffect } from "react";
// // import Footer from "../Layout/Footer";
// // import HeroLikeSection from "./HeroLikeSection";

// // const Aboutus = () => {
// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   return (
// //     <div className="w-full pt-20">
// //       {/* Hero Section */}
// //       <HeroLikeSection
// //         src="images/newHeroImage.jpeg"
// //         alt="Hero Image"
// //         className="h-screen"
// //         text="About Us"
// //       />

// //       {/* About Us Section */}
// //       <div className="bg-gradient-to-r from-[#3b84b8] to-[#2c439f] text-white py-20 px-6">
// //         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
// //           <HeroLikeSection
// //             src="images/newHeroImage.jpeg"
// //             alt="About Us"
// //             className="rounded h-[400px]"
// //           />
// //           <div className="space-y-6">
// //             <h2 className="text-4xl font-bold">Who We Are</h2>
// //             <p className="text-lg leading-relaxed">
// //               Ashish Social Service Nepal (ASSN) is a registered non-profit NGO...
// //             </p>
// //             <p className="text-lg leading-relaxed">
// //               Our head office is in Butwal-Rupandehi...
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mission Section */}
// //       <div className="bg-[#eee8f5] text-gray-800 py-20 px-6">
// //         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
// //           <div className="space-y-6">
// //             <h2 className="text-4xl font-bold text-blue-800">Our Mission</h2>
// //             <p className="text-lg leading-relaxed">
// //               Our mission is to rescue, rehabilitate, and empower women...
// //             </p>
// //           </div>
// //           <HeroLikeSection
// //             src="images/ourMission.png"
// //             alt="Our Mission"
// //             className="rounded h-[400px]"
// //           />
// //         </div>
// //       </div>

// //       {/* Vision Section */}
// //       <div className="bg-gradient-to-r from-[#2982b1] to-[#2d45a8] text-white py-20 px-6">
// //         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
// //           <HeroLikeSection
// //             src="images/newHeroImage.jpeg"
// //             alt="Our Vision"
// //             className="rounded h-[400px]"
// //           />
// //           <div className="space-y-6">
// //             <h2 className="text-4xl font-bold">Our Vision</h2>
// //             <p className="text-lg leading-relaxed">
// //               We envision a Nepal where every woman and girl is safe...
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Aboutus;




// import React, { useEffect } from "react";
// import HeroLikeSection from "./HeroLikeSection";
//    import React from "react";
// import { useState, useEffect } from "react";
// // import OurWorkOne from "./OurWorkOne";
// // import OurWorkTwo from "./OurWorkTwo";
// import Footer from "../Layout/Footer";
// import OurWorkOne from "../Section/OurWorkOne";
// import OurWorkTwo from "../Section/OurWorkTwo";
// import OurWork from "../pages/OurWork";

// const Aboutus = () => {
//   // scroll to top when page loads
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//     <div className="w-full pt-20">
//          <HeroLikeSection
//         src="images/newHeroImage.jpeg"
//         alt="Hero Image"
//         className="h-screen"
//         text="About Us"
//       />

//       {/* <div className="bg-gradient-to-r from-[#3b84b8] to-[#2c439f] text-white py-20 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           <img
//             src="images/newHeroImage.jpeg"
//             alt="About us"
//             className="rounded w-full h-[400px] object-cover"
//           />
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold">Who We Are</h2>
//             <p className="text-lg leading-relaxed">
//               Ashish Social Service Nepal (ASSN) is a registered non-profit NGO
//               that has been working in Nepal since 2006 to fight against human
//               trafficking and empower vulnerable women and girls with skills for a
//               brighter future.
//             </p>
//             <p className="text-lg leading-relaxed">
//               Our head office is in Butwal-Rupandehi with a secondary office in
//               Bharatpur, Chitwan. The open border between Nepal and India is known
//               as one of the busiest human trafficking highways in the world.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#eee8f5] text-gray-800 py-20 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold text-blue-800">Our Mission</h2>
//             <p className="text-lg leading-relaxed">
//               Our mission is to rescue, rehabilitate, and empower women and girls
//               who are victims or at risk of human trafficking. We aim to build a
//               safe and just society by creating awareness, providing education,
//               and offering skill-based training to help them lead independent lives.
//             </p>
//           </div>
//           <img
//             src="images/ourMission.png"
//             alt="About us"
//             className="rounded w-full h-[400px] object-cover"
//           />
//         </div>
//       </div>

//       <div className="bg-gradient-to-r from-[#2982b1] to-[#2d45a8] text-white py-20 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           <img
//             src="images/newHeroImage.jpeg"
//             alt="About us"
//             className="rounded w-full h-[400px] object-cover"
//           />
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold">Our Vision</h2>
//             <p className="text-lg leading-relaxed">
//               We envision a Nepal where every woman and girl is safe, valued, and
//               empowered to realize her full potential. A nation free from human
//               trafficking, where survivors become leaders and change-makers in their
//               communities.
//             </p>
//           </div>
//         </div>
//       </div> */}

   

//     <div className="pt-20">
//       <div 
//         style={{ color: "var(--color-pprimary)" }}
//         className="text-center text-[40px] font-bold mt-15"
//       >
//         OUR WORK 
//         <div
//           style={{ color: "var(--color-ssecondary)" }}
//           className="mt-[-50px] "
//         >
//           ______________
//         </div>
//       </div>

//       {/* <OurWorkOne/> */}
//       <OurWorkOne
//         title1={"EMPOWERMENT"}
//         description1={
//           " ASSN helps rescued girls heal emotionally, learn about humanrights, and build leadership skills. They also offer job training like sewing, embroidery, and craft-making to help them become independent. Finance and admin teams support these programs."
//         }
//         image1={"/images/empowerment.jpg"}
//       />
//       {/* <  title1={"EMPOWERMENT"} description1={" ASSN helps rescued girls heal emotionally, learn about humanrights, and build leadership skills. They also offer job training like sewing, embroidery, and craft-making to help them become independent. Finance and admin teams support these programs."} image1={"/images/empowerment.jpg"}></OurWorkImg1> */}
//       {/* <OurWorkOne title1={"EMPOWERMENT"} description1={" ASSN helps rescued girls heal emotionally, learn about humanrights, and build leadership skills. They also offer job training like sewing, embroidery, and craft-making to help them become independent. Finance and admin teams support these programs."} image1={"/images/empowerment.jpg"}/> */}
//       <OurWorkTwo
//         title2={"PROTECTION"}
//         description2={
//           "ASSN provides Emergency Shelter Homes near border booths for rescued girls, offering care and counselling. They can return home if safe or stay in Safe Houses for skill and personal development training."
//         }
//         image2={"/images/protection.jpg"}
//       />

//       <OurWorkOne
//         title1={"PREVENTION"}
//         description1={
//           "ASSN runs border booths to stop trafficking by identifying at-risk girls and offering help before it's too late. They also raise awareness through dramas, school programs, and community events to educate people about trafficking."
//         }
//         image1={"/images/prevention.webp"}
//       />
//       {/* <OurWorkTwo title2={"PROTECTION"} description2={"ASSN provides Emergency Shelter Homes near border booths for rescued girls, offering care and counselling. They can return home if safe or stay in Safe Houses for skill and personal development training."} image2={"/images/protection.jpg"}/> */}
//       <OurWorkTwo
//         title2={"REHABILITATION & REINTEGRATION"}
//         description2={
//           "To prepare girls for their return to the community, they are given the opportunity to become self-sufficient by being part of our micro finance scheme and starting their own small business."
//         }
//         image2={"/images/rehab.jpg"}
//       />

    

//     </div>
//     </>
//   );
// };  
// export default Aboutus;










import React, { useEffect } from "react";
import HeroLikeSection from "./HeroLikeSection";
import Footer from "../Layout/Footer";
import OurWorkOne from "../Section/OurWorkOne";
import OurWorkTwo from "../Section/OurWorkTwo";
import DetailedAboutUs from "./DetailedAboutUs";

const Aboutus = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full pt-20">
        <HeroLikeSection
          src="images/AboutUsDemoImg.jpg"
          alt="Hero Image"
          className="h-screen"
          text="About Us"
        />
        <DetailedAboutUs/>

        {/* <div className="bg-gradient-to-r from-[#3b84b8] to-[#2c439f] text-white py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <img
              src="images/newHeroImage.jpeg"
              alt="About us"
              className="rounded w-full h-[400px] object-cover"
            />
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Who We Are</h2>
              <p className="text-lg leading-relaxed">
                Ashish Social Service Nepal (ASSN) is a registered non-profit
                NGO that has been working in Nepal since 2006 to fight against
                human trafficking and empower vulnerable women and girls with
                skills for a brighter future.
              </p>
              <p className="text-lg leading-relaxed">
                Our head office is in Butwal-Rupandehi with a secondary office
                in Bharatpur, Chitwan. The open border between Nepal and India
                is known as one of the busiest human trafficking highways in the
                world.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#eee8f5] text-gray-800 py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-blue-800">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                Our mission is to rescue, rehabilitate, and empower women and
                girls who are victims or at risk of human trafficking. We aim to
                build a safe and just society by creating awareness, providing
                education, and offering skill-based training to help them lead
                independent lives.
              </p>
            </div>
            <img
              src="images/ourMission.png"
              alt="Mission"
              className="rounded w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2982b1] to-[#2d45a8] text-white py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <img
              src="images/newHeroImage.jpeg"
              alt="Vision"
              className="rounded w-full h-[400px] object-cover"
            />
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                We envision a Nepal where every woman and girl is safe, valued,
                and empowered to realize her full potential. A nation free from
                human trafficking, where survivors become leaders and
                change-makers in their communities.
              </p>
            </div>
          </div>
        </div> */}

        {/* Our Work Section */}
        <div className="pt-20">
          {/* <div
            style={{ color: "var(--color-pprimary)" }}
            className="text-center text-[40px] font-bold"
          >
            OUR WORK
            <div
              style={{ color: "var(--color-ssecondary)" }}
              className="mt-[-50px]"
            >
              ______________
            </div>
          </div> */}

          <OurWorkOne
            title1="Who We Are"
            description1=" Ashish Social Service Nepal (ASSN) is a registered non-profit
                NGO that has been working in Nepal since 2006 to fight against
                human trafficking and empower vulnerable women and girls with
                skills for a brighter future."
            image1="/images/empowerment.jpg"
          />

          <OurWorkTwo
            title2="Our Mission"
            description2="Our mission is to rescue, rehabilitate, and empower women and
                girls who are victims or at risk of human trafficking. We aim to
                build a safe and just society by creating awareness, providing
                education, and offering skill-based training to help them lead
                independent lives."
            image2="/images/protection.jpg"
          />

          <OurWorkOne
            title1="Our Vision"
            description1="We envision a Nepal where every woman and girl is safe, valued,
                and empowered to realize her full potential. A nation free from
                human trafficking, where survivors become leaders and
                change-makers in their communities."
            image1="/images/prevention.webp"
          />

       
        </div>

      </div>
    </>
  );
};

export default Aboutus;
