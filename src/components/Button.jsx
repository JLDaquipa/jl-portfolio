
// eslint-disable-next-line react/prop-types
const Button = ({children, onClick, type="outline", className=""}) => {
  const typeStyle = {
    "fill": "bg-primary-yellow border-primary-yellow text-primary",
    "outline": "bg-primary color-white border-slate-gray",
  }
  
  return (
    <button className={`px-[1.625rem] py-4 border-[1px] text-xs font-bold ${typeStyle[type]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button