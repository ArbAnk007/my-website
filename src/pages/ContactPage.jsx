import emailjs from "@emailjs/browser"
import { useEffect, useState } from "react"

function ContactPage() {

  useEffect( () => {
    emailjs.init({
      publicKey: "xaGc5UMvHniqtTWWB"
    })
  }, [] )

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [message, setMessage] = useState("")

  const templateParams = {
    user_name: userName,
    user_email: userEmail,
    message: message
  }

  const sendMail = () => {
    if(userName && userEmail && message){
      emailjs.send("contact_service","contact_form",templateParams)
      .then( () => {
        setUserName("")
        setUserEmail("")
        setMessage("")
      } )
      .catch( (error) => {console.log(error);} )
    }
  }

  return ( 
    <div className="md:flex md:flex-col md:justify-center md:items-center md:gap-y-4 md:mt-2 sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-4 sm:mt-2 flex flex-col justify-center items-center gap-y-2 mt-2">
      <p className="md:text-2xl font-bold sm:text-xl text-base text-center">Got an idea, Let's make it reality</p>
      <form onSubmit={(e) => {e.preventDefault(); sendMail()}} className="md:flex md:flex-col md:items-center md:gap-y-4 sm:flex sm:flex-col sm:items-center sm:gap-y-4 flex flex-col items-center gap-y-2">
        <input type="text" value={userName}  onChange={(e) => {setUserName(e.target.value)}} placeholder="Enter your name" className="md:h-10 md:w-[600px] md:p-2 md:text-lg md:rounded-lg sm:h-10 sm:w-[400px] sm:text-lg sm:rounded-lg sm:p-2 h-10 w-72 text-base rounded-md p-2" />
        <input type="email" value={userEmail} onChange={(e) => {setUserEmail(e.target.value)}} placeholder="Enter your email" className="md:h-10 md:w-[600px] md:p-2 md:text-lg md:rounded-lg sm:h-10 sm:w-[400px] sm:text-lg sm:rounded-lg sm:p-2 h-10 w-72 text-base rounded-md p-2" />
        <textarea rows="10" value={message} onChange={(e) => {setMessage(e.target.value)}} placeholder="Enter message" className="md:w-[600px] md:p-2 md:text-lg md:rounded-lg sm:w-[400px] sm:text-lg sm:rounded-lg sm:p-2 w-72 text-base rounded-md p-2" />
        <input type="submit" className="bg-blue-500 md:py-2 md:px-4 md:rounded-lg text-white md:text-lg sm:px-4 sm:py-2 sm:rounded-lg sm:text-lg px-4 py-2 rounded-lg text-base md:hover:scale-105 transition-all duration-300 cursor-pointer" value="Let's Collaborate" />
      </form>
      <p className="md:text-xl sm:text-xl text-lg text-center">OR Connect with me on <a href="https://www.linkedin.com/in/arbab-ansari-74ab232b7" target="_blank" className="md:font-bold md:text-blue-600 md:hover:text-blue-800 sm:text-blue-800">LinkedIn</a></p>
    </div>
   );
}

export default ContactPage;