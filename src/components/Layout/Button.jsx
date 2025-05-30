// import React from 'react'

// const Button = ({text, primaryColor, hoverColor, onClick, style, }) => {
//   return (
//         <button onClick={onClick}
//         //   onMouseEnter={(e) =>
//         //     (e.currentTarget.style.backgroundColor = "var(--color-hover)")
//         //   }
//         //   onMouseLeave={(e) =>
//         //     (e.currentTarget.style.backgroundColor = "var(--color-first)")
//         //   }
//         //   style={{ backgroundColor: {background} }}
//           className={style}
//         >
//           {text}
//         </button>
//   )
// }


// export default Button;











import React from 'react';

const Button = ({ text, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      className={`transition-all duration-300 transform hover:scale-80 hover:text-xl ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
