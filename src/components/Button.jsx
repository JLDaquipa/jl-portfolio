/* eslint-disable react/prop-types */

const Button = ({children, className, disabled = false}) => {
  return (
    <button className={`w-fit linear-bg py-3 px-4 font-semibold text-black rounded-xl ${className}`} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button