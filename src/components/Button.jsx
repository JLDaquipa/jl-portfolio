/* eslint-disable react/prop-types */

const Button = ({children, className}) => {
  return (
    <button className={`linear-bg py-3 px-4 font-semibold text-black rounded-xl ${className}`}>
      {children}
    </button>
  )
}

export default Button