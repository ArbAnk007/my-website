import { ProjectCard } from "../components";
import { myBlogThumbnail, ticTacToeThumbnail, rockPaperScissorThumbnail, currencyConverterThumbnail, todoThumbnail } from "../images"

function ProjectPage() {

  const projects = [
    {
      imageSrc: myBlogThumbnail,
      title: "myBlog",
      description: "A full fledged blog application with CRUD operations",
      slug: "https://blog.arbabansari.com"
    },
    {
      imageSrc: currencyConverterThumbnail,
      title: "Currency Converter",
      description: "A real time currency converter app",
      slug: "https://currency-converter-seven-tau.vercel.app/"
    },
    {
      imageSrc: todoThumbnail,
      title: "Todo App",
      description: "A simple yet effective app to manage all your todos",
      slug: "https://todo-react-eight-dusky.vercel.app/"
    },
    {
      imageSrc: ticTacToeThumbnail,
      title: "Tic Tac Toe",
      description: "A fun two player tic tac toe game",
      slug: "https://arbank007.github.io/TicTacToe"
    },
    {
      imageSrc: rockPaperScissorThumbnail,
      title: "Rock Paper Scissor",
      description: "A fun to play game with computer",
      slug: "https://arbank007.github.io/Rock-Paper-Scissors"
    },
  ]

  return ( 
    <div className="flex justify-center items-center pt-8 gap-6 flex-wrap">
      {
        projects.map( (proj,index) => (
          <ProjectCard 
            imageSrc={proj.imageSrc}
            title={proj.title}
            description={proj.description}
            slug={proj.slug}
            key={index}
          />
        ) )
      }
    </div>
   );
}

export default ProjectPage;