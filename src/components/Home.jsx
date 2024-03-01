import "../styles/Home.css"
import { substituteImage, pythonIcon, htmlIcon, cssIcon, javascriptIcon, reactIcon, nodejsIconDark, nodejsIconLight, expressjsIcon, mongodbIcon } from "../images"
import { TechCard } from "./index"

function Home() {

  const techUsed = [
    {
      image: pythonIcon,
      altText: "python icon",
      techName: "Python"
    },
    {
      image: htmlIcon,
      altText: "html icon",
      techName: "HTML"
    },
    {
      image: cssIcon,
      altText: "css icon",
      techName: "CSS"
    },
    {
      image: javascriptIcon,
      altText: "javascript icon",
      techName: "JavaScript"
    },
    {
      image: reactIcon,
      altText: "react icon",
      techName: "React"
    },
    {
      image: nodejsIconDark,
      altText: "nodejs icon",
      techName: "Node.JS"
    },
    {
      image: expressjsIcon,
      altText: "expressjs icon",
      techName: "Express.js"
    },
    {
      image: mongodbIcon,
      altText: "mongodb icon",
      techName: "MongoDB"
    },
  ]
  
  return (
    <div className="overflow-hidden">
      <div className="flex sm:flex-row flex-col">
        <div>
          <p className="sm:text-2xl text-sm my-6">
            Hello, I am <br /> <span id="name" className="text-lg">Arbab Ansari</span>
          </p>
          <p className="sm:text-2xl text-sm my-6">
            A creative Web Developer who loves the idea of
            turning pieces of code into
            fascinating and functional websites. I am a life long learner and tries to be a better version of
            myself every day.
          </p>
          <p className="sm:text-2xl text-sm my-6">
            Other than developing websites I enjoy reading books and explore the never ending world of
            technologies.
          </p>
        </div>
          <div className="flex justify-center items-center">
            <img src={substituteImage} alt="substitute profile picture" className="sm:max-w-[400px] sm:max-h-[400px] max-w-[150px] max-h-[150px]" />
          </div>
      </div>
      <hr />
      <h1 className="sm:text-3xl text-lg my-7 text-center">Technologies I Use</h1>
      <div className="grid sm:grid-cols-4 grid-cols-3 gap-y-6">
        {techUsed.map( (tech) => (<TechCard image={tech.image} techName={tech.techName} altText={tech.altText} key={tech.techName} />) )}
      </div>
    </div>
   );
}

export default Home;