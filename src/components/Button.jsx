/* eslint-disable react/prop-types */

const Button = ({children, className, disabled = false}) => {
  return (
    <button className={`w-fit linear-bg py-[10px] px-4 font-semibold text-black rounded-xl focus:outline outline-2 outline-offset-2 outline-white ${className}`} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button