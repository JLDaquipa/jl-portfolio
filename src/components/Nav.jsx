
// eslint-disable-next-line react/prop-types
const Nav = ({currentSection}) => {
  const sections = {
    "home": "",
    "work": "PORTFOLIO",
    "about": "ABOUT"
  }
  return (
    <div className='flex flex-col bg-primary z-10'>
      <div className='nav-items flex flex-col gap-8 relative left-[-0.0313rem]'>
        {/* Home Nav */}
        <a href="#hero" className='nav-item border-primary-yellow'>
          <svg className="stroke-primary-yellow" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M2.625 14L13.0713 3.55249C13.5847 3.04032 14.4153 3.04032 14.9275 3.55249L25.375 14M5.25 11.375V23.1875C5.25 23.912 5.838 24.5 6.5625 24.5H11.375V18.8125C11.375 18.088 11.963 17.5 12.6875 17.5H15.3125C16.037 17.5 16.625 18.088 16.625 18.8125V24.5H21.4375C22.162 24.5 22.75 23.912 22.75 23.1875V11.375M9.625 24.5H19.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        {/* Work Nav */}
        <div className='nav-item'>
          <svg className="stroke-slate-gray" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M23.625 16.5083V21.4667C23.625 22.743 22.7068 23.842 21.441 24.01C19.0062 24.3332 16.5223 24.5 14 24.5C11.4777 24.5 8.99384 24.3332 6.559 24.01C5.29317 23.842 4.375 22.743 4.375 21.4667V16.5083M23.625 16.5083C23.902 16.2676 24.1237 15.9697 24.2747 15.6352C24.4258 15.3007 24.5026 14.9375 24.5 14.5705V10.157C24.5 8.89583 23.604 7.80617 22.3568 7.6195C21.0354 7.42166 19.7072 7.27106 18.375 7.168M23.625 16.5083C23.3987 16.7008 23.135 16.8525 22.8398 16.9517C19.9888 17.8976 17.0039 18.3782 14 18.375C10.9107 18.375 7.93917 17.8745 5.16017 16.9517C4.87231 16.8559 4.60568 16.7054 4.375 16.5083M4.375 16.5083C4.09797 16.2676 3.87632 15.9697 3.72529 15.6352C3.57425 15.3007 3.49739 14.9375 3.5 14.5705V10.157C3.5 8.89583 4.396 7.80617 5.64317 7.6195C6.96465 7.42165 8.29277 7.27106 9.625 7.168M18.375 7.168V6.125C18.375 5.42881 18.0984 4.76113 17.6062 4.26884C17.1139 3.77656 16.4462 3.5 15.75 3.5H12.25C11.5538 3.5 10.8861 3.77656 10.3938 4.26884C9.90157 4.76113 9.625 5.42881 9.625 6.125V7.168M18.375 7.168C15.4627 6.94292 12.5373 6.94292 9.625 7.168M14 14.875H14.0093V14.8843H14V14.875Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* About Nav */}
        <div className='nav-item'>
          <svg className="stroke-slate-gray" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M21.4796 22.3455C20.6644 21.2662 19.6097 20.3909 18.3986 19.7886C17.1876 19.1863 15.8532 18.8734 14.5006 18.8747C13.148 18.8734 11.8136 19.1863 10.6025 19.7886C9.39146 20.3909 8.33678 21.2662 7.52159 22.3455M21.4796 22.3455C23.0703 20.9305 24.1922 19.0655 24.6986 16.9976C25.205 14.9297 25.0709 12.7568 24.314 10.7669C23.557 8.777 22.2131 7.06423 20.4604 5.8557C18.7077 4.64718 16.629 4 14.5 4C12.371 4 10.2923 4.64718 8.53962 5.8557C6.78691 7.06423 5.44297 8.777 4.68604 10.7669C3.92912 12.7568 3.79496 14.9297 4.30137 16.9976C4.80779 19.0655 5.93084 20.9305 7.52159 22.3455M21.4796 22.3455C19.5593 24.0584 17.0738 25.0033 14.5006 24.9997C11.927 25.0036 9.44219 24.0586 7.52159 22.3455M18.0006 11.8747C18.0006 12.8029 17.6318 13.6932 16.9755 14.3495C16.3191 15.0059 15.4288 15.3747 14.5006 15.3747C13.5723 15.3747 12.6821 15.0059 12.0257 14.3495C11.3693 13.6932 11.0006 12.8029 11.0006 11.8747C11.0006 10.9464 11.3693 10.0562 12.0257 9.39978C12.6821 8.7434 13.5723 8.37466 14.5006 8.37466C15.4288 8.37466 16.3191 8.7434 16.9755 9.39978C17.6318 10.0562 18.0006 10.9464 18.0006 11.8747Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="w-full h-fit my-auto">
        <h3 className="vertical-text mx-auto text-large font-light tracking-[0.2rem]">
          {sections[currentSection]}
        </h3>
      </div>
      <div className='social-items flex flex-col items-center gap-8 mt-auto mb-16'>
        {/* Github */}
        <a href="https://github.com/JLDaquipa" target='_blank' rel="noreferrer">
          <svg className="fill-slate-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/jay-lloyd-daquipa-619787296/" target='_blank' rel="noreferrer">
          <svg className="fill-slate-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"/>
          </svg>
        </a>
        {/* Dribbble */}
        {/* <a href="https://dribbble.com/JLDaquipa" target='_blank' rel="noreferrer">
          <svg className="fill-slate-gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.9887 11.5716C19.9029 9.94513 19.3313 8.44745 18.4163 7.22097C18.1749 7.48407 17.8785 7.7698 17.4957 8.09159C16.5881 8.85458 15.4887 9.54307 14.1834 10.101C14.3498 10.4506 14.5029 10.7899 14.6376 11.1098L14.6388 11.1125C14.6652 11.1742 14.6879 11.2306 14.7321 11.3418C14.7379 11.3562 14.7433 11.3697 14.7485 11.3825C16.2621 11.2122 17.8576 11.2749 19.4049 11.4845C19.6106 11.5123 19.805 11.5415 19.9887 11.5716ZM10.6044 4.1213C10.7783 4.36621 10.9602 4.62859 11.1803 4.95378C11.7929 5.8589 12.396 6.81391 12.9604 7.79507C13.0749 7.99416 13.187 8.19289 13.2964 8.39112C14.5193 7.90993 15.5296 7.30281 16.3438 6.62486C16.6731 6.35063 16.9383 6.093 17.1403 5.86972C15.7501 4.70277 13.9571 4 12 4C11.524 4 11.0576 4.04158 10.6044 4.1213ZM4.25266 9.99755C4.83145 9.98452 5.48467 9.94941 6.29303 9.87518C7.90024 9.72758 9.54141 9.46249 11.1549 9.05274C10.5719 8.03721 9.93888 7.02331 9.29452 6.05378C8.98479 5.58775 8.68357 5.14992 8.45484 4.82642C6.39541 5.84613 4.83794 7.72658 4.25266 9.99755ZM5.78366 17.036C6.17111 16.4693 6.68061 15.8314 7.35797 15.1374C8.81199 13.6478 10.5286 12.4878 12.5139 11.8473C12.5417 11.8391 12.5604 11.8336 12.576 11.829C12.411 11.4651 12.2562 11.1405 12.1003 10.8342C10.2643 11.3687 8.3303 11.703 6.40279 11.8762C5.46319 11.9606 4.62005 11.9981 4 12.0044C4.00102 13.9112 4.66915 15.662 5.78366 17.036ZM15.0045 19.4166C14.9001 18.8745 14.7669 18.2706 14.5899 17.574C14.2689 16.3112 13.8668 15.012 13.373 13.7078C11.3712 14.4343 9.77574 15.4974 8.54309 16.7649C7.94904 17.3757 7.51244 17.9537 7.22642 18.4203C8.55892 19.4127 10.2109 20 12 20C13.0626 20 14.0769 19.7928 15.0045 19.4166ZM16.8778 18.3414C18.4073 17.1632 19.4985 15.444 19.8652 13.4703C19.5253 13.3865 19.094 13.3005 18.6196 13.2346C17.5756 13.0897 16.5014 13.0655 15.4409 13.2018C15.8933 14.4764 16.2642 15.7332 16.5608 16.9361C16.6903 17.4614 16.7958 17.9358 16.8778 18.3414ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"/>
          </svg>
        </a> */}
      </div>
      {/* Contact */}
      <div className='px-[1.625rem]'>
        <svg className="stroke-slate-gray cursor-pointer hover:scale-105 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M8.75 9.625H19.25M8.75 13.125H14M2.625 14.8867C2.625 16.7533 3.93517 18.3797 5.78317 18.6515C7.10033 18.8452 8.4315 18.9933 9.77667 19.0937C10.185 19.124 10.5583 19.3387 10.7858 19.6782L14 24.5L17.2142 19.6782C17.3269 19.5105 17.4764 19.3707 17.6513 19.2694C17.8261 19.1681 18.0218 19.108 18.2233 19.0937C19.5593 18.9939 20.8914 18.8464 22.2168 18.6515C24.0648 18.3797 25.375 16.7545 25.375 14.8855V7.8645C25.375 5.9955 24.0648 4.37034 22.2168 4.0985C19.4961 3.69917 16.7499 3.49914 14 3.5C11.2093 3.5 8.46533 3.70417 5.78317 4.0985C3.93517 4.37034 2.625 5.99667 2.625 7.8645V14.8855V14.8867Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

export default Nav