import "../styles/Home.css"
import { substituteImage, pythonIcon, htmlIcon, cssIcon, javascriptIcon, reactIcon, nodejsIconDark, nodejsIconLight, expressjsIcon, mongodbIcon, myBlogThumbnail } from "../images"
import { TechCard, FeaturedProjectCard } from "./index"

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
      <div className="md:flex md:flex-row sm:flex sm:flex-col flex-col">
        <div className="flex-1">
          <p className="md:text-2xl sm:text-lg text-sm my-6">
            Hello, I am <br /> <span id="name" className="leading-8">Arbab Ansari</span>
          </p>
          <p className="md:text-2xl sm:text-lg text-sm my-6">
            A creative Web Developer who loves the idea of
            turning pieces of code into
            fascinating and functional websites. I am a life long learner and tries to be a better version of
            myself every day.
          </p>
          <p className="md:text-2xl sm:text-lg text-sm my-6">
            Other than developing websites I enjoy reading books and explore the never ending world of
            technologies.
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img src={substituteImage} alt="substitute profile picture" className="md:max-w-[400px] md:max-h-[400px] sm:max-w-[300px] sm:max-h-[300px] max-w-[150px] max-h-[150px]" />
        </div>
      </div>
      <hr className="mt-7" />
      <h1 className="md:text-3xl md:font-bold sm:text-2xl sm:font-semibold text-lg my-7 text-center">Technologies I Use</h1>
      <div className="grid sm:grid-cols-4 grid-cols-3 gap-y-6 mb-7">
        {techUsed.map( (tech) => (<TechCard image={tech.image} techName={tech.techName} altText={tech.altText} key={tech.techName} />) )}
      </div>
      <hr />
      <div className="flex flex-col justify-center items-center">
        <h1 className="sm:text-center sm:text-3xl my-7">Featured Projects</h1>
        <FeaturedProjectCard
          imageSrc={myBlogThumbnail}
          title={"myBlog"}
          description={"A full fledged blog application with CRUD operations"}
          tags={["React","Appwrite","FullStack"]}
          slug={"https://blog.arbabansari.com"}
        />
      </div>
    </div>
   );
}

export default Home;