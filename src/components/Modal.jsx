
const Modal = ({children, className, clickOutside}) => {
  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 px-6  z-50 flex justify-center items-center ${className}`}>
      <div className="absolute w-full h-full bg-black bg-opacity-50 backdrop-blur-sm" onClick={clickOutside}></div>
      {children}
    </div>
  )
}

export default Modal