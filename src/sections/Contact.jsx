import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Button from "../components/Button";
import { ring2 } from 'ldrs'

const Contact = () => {
  const form = useRef();
  const [onSend,setOnSend] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  ring2.register()

  const sendEmail = (e) => {
    e.preventDefault();
    setOnSend(true)
    setSent(false)
    setError(false)
    emailjs.sendForm('service_v8zpsca', 'template_3jdy69b', form.current, 'SshgGdjNiriKxXE3u')
      .then((result) => {
          e.target.reset();
          setOnSend(false)
          setSent(true)
          console.log(result.text);
      }, (error) => {
          setOnSend(false)
          setError(true)
          console.log(error.text);
      });
  };

  return (
    <section id="contact" className='section'>
      <div className='box-row'>
        <div className='bento-box'>
          <h3 className='w-full text-center text-[2rem] leading-none'>
            Contact <span className='highlight'> Me</span>
          </h3>
        </div>
      </div>
      <div className='box-row lg:flex-row'>
        <div className='box-col flex-col'>
          {/* Email */}
          <div className='bento-box flex-col pt-20'>
            <span className='text-xl font-semibold text-primary-orange mb-3'>Email</span>
            <span className='text-lg font-semibold mb-5'>daquipajaylloyd95@gmail.com</span>
            <a 
              href="mailto:daquipajaylloyd95@gmail.com"
              className='text-slate-gray font-semibold text-base flex items-center gap-3 w-fit leading-none'
            >
              Write Me
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.75 7L18 13M18 13L11.75 19M18 13H3" stroke="#666666" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          {/* Phone */}
          <div className='bento-box flex-col justify-end pt-20 lg:h-full'>
            <span className='text-xl font-semibold text-primary-orange mb-3'>Phone</span>
            <span className='text-lg font-semibold'>+63 995 965 9169</span>
          </div>
          {/* Email */}
          <div className='bento-box flex-col pt-20'>
            <span className='text-xl font-semibold text-primary-orange mb-3'>Messenger</span>
            <span className='text-lg font-semibold mb-5'>jaylloyd.daquipa</span>
            <a 
              href="https://m.me/jaylloyd.daquipa"
              className='text-slate-gray font-semibold text-base flex items-center gap-3 w-fit leading-none'
            >
              Write Me
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M11.75 7L18 13M18 13L11.75 19M18 13H3" stroke="#666666" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        <div className='box-col flex-1 flex-col'>
          <div className='bento-box flex-col gap-10 h-full'>
            <h5 className='text-white text-xl font-semibold'>
              Write me your project
            </h5>
            <form 
              className='flex flex-col gap-10' 
              ref={form} 
              onSubmit={sendEmail}
            >
              <div className='relative '>
                <label className='text-primary-orange bg-light-black font-medium absolute top-[-0.75rem] left-4 px-2' htmlFor="name">Name</label>
                <input 
                  className='w-full h-full px-6 py-5 text-lg text-white font-medium bg-transparent border border-slate-gray rounded-xl outline-none placeholder:text-slate-gray' 
                  type="text" 
                  id='name'
                  name="name"
                  placeholder='Insert your name' 
                  required
                />
              </div>
              <div className='relative'>
                <label className='text-primary-orange bg-light-black font-medium absolute top-[-0.75rem] left-4 px-2' htmlFor="email">Email</label>
                <input 
                  className='w-full h-full px-6 py-5 text-lg text-white font-medium bg-transparent border border-slate-gray rounded-xl outline-none placeholder:text-slate-gray' 
                  type="email" 
                  id='email'
                  name="email" 
                  placeholder='Insert your email' 
                  required
                />
              </div>
              <div className='relative'>
                <label className='text-primary-orange bg-light-black font-medium absolute top-[-0.75rem] left-4 px-2' htmlFor="project">Project</label>
                <textarea 
                  className='w-full h-full px-6 py-5 text-lg text-white font-medium bg-transparent border border-slate-gray rounded-xl outline-none placeholder:text-slate-gray resize-none min-h-[9.375rem]'
                  id='project'
                  name="project" 
                  placeholder='Write your project' 
                  required
                />
              </div>
              <div className="flex items-center gap-4">
                  <Button className="flex justify-center items-center gap-2 w-[183px] h-[48px]" disabled={onSend}>
                    { onSend ? 
                      <l-ring-2
                        size="25"
                        stroke="2"
                        stroke-length="0.25"
                        bg-opacity="0.1"
                        speed="0.8" 
                        color="black" 
                      ></l-ring-2> 
                      : 
                      <>
                        <span>Send Message</span> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2199 21.9354C13.0399 21.9354 11.3699 21.1054 10.0499 17.1354L9.32988 14.9754L7.16988 14.2554C3.20988 12.9354 2.37988 11.2654 2.37988 10.0854C2.37988 8.91549 3.20988 7.23549 7.16988 5.90549L15.6599 3.07549C17.7799 2.36549 19.5499 2.57549 20.6399 3.65549C21.7299 4.73549 21.9399 6.51549 21.2299 8.63549L18.3999 17.1254C17.0699 21.1054 15.3999 21.9354 14.2199 21.9354ZM7.63988 7.33549C4.85988 8.26549 3.86988 9.36549 3.86988 10.0854C3.86988 10.8054 4.85988 11.9054 7.63988 12.8254L10.1599 13.6654C10.3799 13.7354 10.5599 13.9154 10.6299 14.1354L11.4699 16.6554C12.3899 19.4354 13.4999 20.4254 14.2199 20.4254C14.9399 20.4254 16.0399 19.4354 16.9699 16.6554L19.7999 8.16549C20.3099 6.62549 20.2199 5.36549 19.5699 4.71549C18.9199 4.06549 17.6599 3.98549 16.1299 4.49549L7.63988 7.33549Z" fill="black"/>
                        <path d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z" fill="black"/>
                        </svg>
                      </>
                    }
                  </Button>
                
                {sent && <p className="font-semibold text-green-500">Message sent!</p>}
                {error && <p className="font-semibold text-red-500">Message not sent!</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact