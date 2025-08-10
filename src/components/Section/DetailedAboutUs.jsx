



// import React from 'react';

// // I'm defining the content data here to make the component dynamic and easy to update.
// const contentData = {
//   rescue: {
//     title: 'RESCUE',
//     description: 'A victim is rescued at the border where she is now safe and being cared for by loving professionals.',
//     link: 'https://www.ourdaughtersinternational.org/rescue',
//   },
//   restore: {
//     title: 'RESTORE',
//     description: 'An overcomer is restored into our daughter at the Safe Home. She is now able to begin healing and experiencing hope for her future.',
//     link: 'https://www.ourdaughtersinternational.org/restore',
//   },
//   empower: {
//     title: 'EMPOWER',
//     description: 'A daughter is empowered as a leader at the Training Center. Here, she will learn the vocational skills required to become employed or launch her own business.',
//     link: 'https://www.ourdaughtersinternational.org/empower',
//   },
//   transform: {
//     title: 'TRANSFORM',
//     description: 'Lives and communities are transformed as our daughter leader goes back to her village to open her own business and start community empowerment groups to combat human-trafficking.',
//     link: 'https://www.ourdaughtersinternational.org/transform',
//   },
//   images: {
//     image1: {
//       url: 'https://static.wixstatic.com/media/cd748e_e064820785c54f40bb9925193ed4849b~mv2.jpg/v1/fill/w_328,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cd748e_e064820785c54f40bb9925193ed4849b~mv2.jpg',
//       alt: 'A victim is rescued at the border.',
//     },
//     image2: {
//       url: 'https://static.wixstatic.com/media/cd748e_f9d409dc96ff418ea2fb23c181499ea0~mv2.jpg/v1/fill/w_328,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cd748e_f9d409dc96ff418ea2fb23c181499ea0~mv2.jpg',
//       alt: 'A girl receiving care at a safe house.',
//     },
//     image3: {
//       url: 'https://static.wixstatic.com/media/cd748e_b317b518dc494616b258c2ca200eecb5~mv2.jpg/v1/fill/w_328,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cd748e_b317b518dc494616b258c2ca200eecb5~mv2.jpg',
//       alt: 'A leader being empowered at the training center.',
//     },
//     image4: {
//       url: 'https://static.wixstatic.com/media/cd748e_823d0d391c8c4fbf9efe59493db570a1~mv2.jpg/v1/fill/w_328,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cd748e_823d0d391c8c4fbf9efe59493db570a1~mv2.jpg',
//       alt: 'A leader going back to her village to open a business.',
//     },
//   },
// };

// // Reusable component for the text and button blocks.
// const ContentBlock = ({ title, description, link }) => (
//   <div className="flex flex-col items-center justify-center p-8 lg:p-12 text-center bg-white rounded-lg shadow-xl">
//     <h2 className="text-6xl md:text-7xl font-['Bebas_Neue'] tracking-wide text-gray-900 mb-4">
//       {title}
//     </h2>
//     <p className="text-sm md:text-base font-['Montserrat'] leading-relaxed text-gray-600 mb-6 max-w-sm">
//       {description}
//     </p>
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="inline-flex items-center px-6 py-3 border-2 border-gray-400 text-gray-700 font-semibold uppercase text-xs tracking-wider rounded-full hover:bg-gray-100 transition-colors duration-200"
//     >
//       <span className="mr-2">Learn More</span>
//       {/* SVG arrow icon */}
//       <svg className="h-4 w-4" viewBox="0 0 60 60">
//         <path fill="currentColor" d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z"></path>
//       </svg>
//     </a>
//   </div>
// );

// // Reusable component for the image blocks.
// const ImageBlock = ({ imageUrl, altText }) => (
//   <div className="relative overflow-hidden w-full rounded-lg shadow-xl aspect-w-4 aspect-h-5 md:aspect-none md:h-full">
//     <img
//       src={imageUrl}
//       alt={altText}
//       className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
//     />
//   </div>
// );

// function DetailedAboutUs() {
//   return (
//     <div className="min-h-screen bg-gray-100 font-sans p-4 md:p-12">
//       {/* Container for the first row of content, now with 4 columns */}
//       <section className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 items-stretch">
//           <ContentBlock {...contentData.rescue} />
//           <ImageBlock imageUrl={contentData.images.image1.url} altText={contentData.images.image1.alt} />
//           <ContentBlock {...contentData.restore} />
//           <ImageBlock imageUrl={contentData.images.image2.url} altText={contentData.images.image2.alt} />
//         </div>
//       </section>

//       {/* Container for the second row of content */}
//       <section className="container mx-auto mt-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 items-stretch">
//           <ImageBlock imageUrl={contentData.images.image3.url} altText={contentData.images.image3.alt} />
//           <ContentBlock {...contentData.empower} />
//           <ImageBlock imageUrl={contentData.images.image4.url} altText={contentData.images.image4.alt} />
//           <ContentBlock {...contentData.transform} />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default DetailedAboutUs;













import React from 'react';

const contentData = {
  rescue: {
    title: 'RESCUE',
    description: 'A victim is rescued at the border where she is now safe and being cared for by loving professionals.',
    link: 'https://www.ourdaughtersinternational.org/rescue',
  },
  restore: {
    title: 'RESTORE',
    description: 'An overcomer is restored into our daughter at the Safe Home. She is now able to begin healing and experiencing hope for her future.',
    link: 'https://www.ourdaughtersinternational.org/restore',
  },
  empower: {
    title: 'EMPOWER',
    description: 'A daughter is empowered as a leader at the Training Center. Here, she will learn the vocational skills required to become employed or launch her own business.',
    link: 'https://www.ourdaughtersinternational.org/empower',
  },
  transform: {
    title: 'TRANSFORM',
    description: 'Lives and communities are transformed as our daughter leader goes back to her village to open her own business and start community empowerment groups to combat human-trafficking.',
    link: 'https://www.ourdaughtersinternational.org/transform',
  },
  images: {
    image1: {
      url: 'https://static.wixstatic.com/media/cd748e_e064820785c54f40bb9925193ed4849b~mv2.jpg/v1/fill/w_328,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cd748e_e064820785c54f40bb9925193ed4849b~mv2.jpg',
      alt: 'A victim is rescued at the border.',
    },
    image2: {
      url: 'https://static.wixstatic.com/media/cd748e_f9d409dc96ff418ea2fb23c181499ea0~mv2.jpg/v1/fill/w_328,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cd748e_f9d409dc96ff418ea2fb23c181499ea0~mv2.jpg',
      alt: 'A girl receiving care at a safe house.',
    },
    image3: {
      url: 'https://static.wixstatic.com/media/cd748e_b317b518dc494616b258c2ca200eecb5~mv2.jpg/v1/fill/w_328,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cd748e_b317b518dc494616b258c2ca200eecb5~mv2.jpg',
      alt: 'A leader being empowered at the training center.',
    },
    image4: {
      url: 'https://static.wixstatic.com/media/cd748e_823d0d391c8c4fbf9efe59493db570a1~mv2.jpg/v1/fill/w_328,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cd748e_823d0d391c8c4fbf9efe59493db570a1~mv2.jpg',
      alt: 'A leader going back to her village to open a business.',
    },
  },
};

const ContentBlock = ({ title, description, link }) => (
  <div className="flex flex-col items-center justify-center p-6 md:p-8 text-center bg-white rounded-lg shadow-lg h-full">
    <h2 className="text-4xl font-Rolf tracking-wider mb-10 sm:text-5xl md:text-6xl   text-gray-900 mb-4 leading-tight">
      {title}
    </h2>
    <p className="text-xs sm:text-sm md:text-base font-['Montserrat'] leading-relaxed text-gray-600 mb-6 max-w-xs sm:max-w-sm md:max-w-md">
      {description}
    </p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-5 py-2 border-2 border-gray-400 text-gray-700 font-semibold uppercase text-xs tracking-wider rounded-full hover:bg-gray-100 transition-colors duration-200"
    >
      <span className="mr-2">Learn More</span>
      <svg className="h-4 w-4" viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z" />
      </svg>
    </a>
  </div>
);

const ImageBlock = ({ imageUrl, altText }) => (
  <div className="rounded-lg shadow-lg overflow-hidden w-full h-64 sm:h-80 md:h-full">
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
      loading="lazy"
    />
  </div>
);

function DetailedAboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4 md:p-12">
      <section className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 items-stretch">
          <ContentBlock {...contentData.rescue} />
          <ImageBlock imageUrl={contentData.images.image1.url} altText={contentData.images.image1.alt} />
          <ContentBlock {...contentData.restore} />
          <ImageBlock imageUrl={contentData.images.image2.url} altText={contentData.images.image2.alt} />
        </div>
      </section>

      <section className="container mx-auto max-w-7xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 items-stretch">
          <ImageBlock imageUrl={contentData.images.image3.url} altText={contentData.images.image3.alt} />
          <ContentBlock {...contentData.empower} />
          <ImageBlock imageUrl={contentData.images.image4.url} altText={contentData.images.image4.alt} />
          <ContentBlock {...contentData.transform} />
        </div>
      </section>
    </div>
  );
}

export default DetailedAboutUs;
