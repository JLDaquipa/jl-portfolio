
// eslint-disable-next-line react/prop-types
const Button = ({children, onClick, type="outline"}) => {
  const typeStyle = {
    "fill": "bg-primary-yellow text-primary border-opacity-0",
    "outline": "bg-primary color-white border-slate-gray",
  }
  
  return (
    <button className={`px-[1.625rem] py-4 border-[1px] ${typeStyle[type]}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button