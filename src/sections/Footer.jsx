import Button from "../components/Button"

const Footer = () => {
  return (
    <footer className="flex w-full">
      <div className='bento-box w-full flex-col justify-center gap-10 '>
        <h3 className="text-center text-[2rem] text-white font-semibold">Jay Lloyd</h3>
        <div className='flex gap-8 justify-center'>
          <a href="https://www.facebook.com/jaylloyd.daquipa/" target='_blank' rel="noreferrer">
            <Button className="px-[0.625rem] py-[0.5rem]">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0709 13.8919H16.5769L17.5793 9.88217H14.0709V7.87733C14.0709 6.84546 14.0709 5.87249 16.0757 5.87249H17.5793V2.50445C17.2529 2.4611 16.0186 2.36401 14.7153 2.36401C11.9943 2.36401 10.0612 4.02489 10.0612 7.0751V9.88217H7.05392V13.8919H10.0612V22.4124H14.0709V13.8919Z" fill="black"/>
              </svg>
            </Button>
          </a>
          <a href="https://github.com/JLDaquipa" target='_blank' rel="noreferrer">
            <Button className="px-[0.625rem] py-[0.5rem]">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2509 2.36401C6.71255 2.36401 2.22672 6.84985 2.22672 12.3882C2.22672 16.8239 5.09615 20.5705 9.08077 21.8987C9.58198 21.9864 9.76994 21.6857 9.76994 21.4225C9.76994 21.1845 9.75741 20.3951 9.75741 19.5555C7.23882 20.0192 6.58725 18.9416 6.38676 18.3777C6.27399 18.0895 5.78531 17.1998 5.35928 16.9618C5.00843 16.7738 4.50722 16.3102 5.34675 16.2977C6.13616 16.2851 6.70002 17.0244 6.88797 17.3252C7.79015 18.8413 9.23113 18.4153 9.80753 18.1521C9.89524 17.5006 10.1584 17.062 10.4466 16.8114C8.21618 16.5608 5.88555 15.6962 5.88555 11.862C5.88555 10.7718 6.27399 9.86964 6.91303 9.16795C6.81279 8.91734 6.46195 7.88986 7.01328 6.51153C7.01328 6.51153 7.8528 6.2484 9.76994 7.53901C10.5719 7.31347 11.424 7.2007 12.276 7.2007C13.1281 7.2007 13.9801 7.31347 14.7821 7.53901C16.6992 6.23587 17.5387 6.51153 17.5387 6.51153C18.0901 7.88986 17.7392 8.91734 17.639 9.16795C18.278 9.86964 18.6664 10.7593 18.6664 11.862C18.6664 15.7087 16.3233 16.5608 14.0929 16.8114C14.4563 17.1247 14.7695 17.7261 14.7695 18.6659C14.7695 20.0066 14.757 21.0842 14.757 21.4225C14.757 21.6857 14.945 21.9989 15.4462 21.8987C19.5265 20.5212 22.2741 16.6949 22.2752 12.3882C22.2752 6.84985 17.7893 2.36401 12.2509 2.36401Z" fill="black"/>
              </svg>
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/jay-lloyd-daquipa-619787296" target='_blank' rel="noreferrer">
            <Button className="px-[0.625rem] py-[0.5rem]">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.3623 5.37123C7.36193 6.18751 6.86671 6.92207 6.11014 7.22852C5.35357 7.53498 4.48675 7.35213 3.91841 6.76622C3.35006 6.18029 3.19371 5.3083 3.52305 4.56141C3.85241 3.81453 4.6017 3.3419 5.41761 3.36639C6.5013 3.39892 7.3628 4.28705 7.3623 5.37123ZM7.42245 8.85966H3.41276V21.4099H7.42245V8.85966ZM13.7578 8.85966H9.76812V21.4099H13.7177V14.824C13.7177 11.1552 18.4992 10.8143 18.4992 14.824V21.4099H22.4588V13.4607C22.4588 7.27583 15.3817 7.50639 13.7177 10.5437L13.7578 8.85966Z" fill="black"/>
              </svg>
            </Button>
          </a>
        </div>
        <p className="font-semibold text-center">© Jay Lloyd. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer