import React from 'react'

const Button = ({text, primaryColor, hoverColor, onClick, style, }) => {
  return (
        <button onClick={onClick}
        //   onMouseEnter={(e) =>
        //     (e.currentTarget.style.backgroundColor = "var(--color-hover)")
        //   }
        //   onMouseLeave={(e) =>
        //     (e.currentTarget.style.backgroundColor = "var(--color-first)")
        //   }
        //   style={{ backgroundColor: {background} }}
          className={style}
        >
          {text}
        </button>
  )
}

export default Button;