
const Modal = ({children, className, clickOutside}) => {
  return (
    <>
      <div className={`fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm ${className} translate-y-0`}></div>
      <div className={`fixed top-0 left-0 bottom-0 right-0 px-6  z-50 flex justify-center items-center ${className}`}>
        <div className={`fixed top-0 left-0 bottom-0 right-0 w-full h-full ${className} translate-y-0`} onClick={clickOutside}></div>
        {children}
      </div>
    </>
  )
}

export default Modal