// import { useState, useEffect } from "react";
// import NavBar from "./components/Layout/NavBar";
// import HeroSection from "./components/Home/HeroSection";
// // import PaperCut from "./components/Section/PaperCut";
// import Aboutus from "./components/Section/Aboutus";
// import Worldwide from "./components/Section/Worldwide";
// import Myth from "./components/Section/Myth";
// import ContactPage from "./components/Section/ContactUs";
// import Footer from "./components/Layout/Footer";
// import Work from "./components/Section/Work";
// import Popup from "./components/Section/Popup";
// // import Account from "./components/Section/Account";
// import Donate from "./components/Section/Donate";
// import Account from "./components/pages/Account";
// import { BeatLoader } from "react-spinners";

// const HomePage = () => {
 
// //  const [users, setUsers] = useState([]);       // data
//   const [loading, setLoading] = useState(true); // loading state

// //   useEffect(() => {
// //     setLoading(true); // start loading

// //     fetch('https://jsonplaceholder.typicode.com/users')
// //       .then(res => res.json())
// //       .then(data => {
// //         setUsers(data);       // set the data
// //         setLoading(false);    // done loading
// //       })
// //       .catch(err => {
// //         console.error(err);
// //         setLoading(false);    // even on error, stop loading
// //       });
// //   }, []);

// //   // console.log(users)

// // if (loading) {
// //   return (
// //     <div className="min-h-screen flex items-center justify-center">
// //       <div className="text-blue-500 text-lg">Loading...</div>
// //     </div>
// //   );
// // }


// return (
//   <div className="min-h-screen">
//     <BeatLoader loading={true} color="black"/>
//     {/* Your normal content */}
//     {/* <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">User List</h1>
//       <ul className="list-disc pl-6">
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div> */}

//     {/* <Popup />
//     <NavBar />
//     <HeroSection />
//     <Worldwide />
//     <Myth />
//     <Work />
//     <ContactPage />
//     <Donate /> */}
//   </div>
// );
// }

// export default HomePage;











import { useState, useEffect } from "react";
import NavBar from "./components/Layout/NavBar";
import HeroSection from "./components/Home/HeroSection";
import Aboutus from "./components/Section/Aboutus";
import Worldwide from "./components/Section/Worldwide";
import Myth from "./components/Section/Myth";
import ContactPage from "./components/Section/ContactUs";
import Footer from "./components/Layout/Footer";
import Work from "./components/Section/Work";
import Popup from "./components/Section/Popup";
import Donate from "./components/Section/Donate";
import Account from "./components/pages/Account";
import { BeatLoader } from "react-spinners";

const HomePage = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(() => {
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <BeatLoader loading={true} color="black" />
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen">
      <Popup />
      <NavBar />
      <HeroSection />
      <Worldwide />
      <Myth />
      <Work />
      <ContactPage />
      <Donate />
    </div>
  );
};

export default HomePage;
