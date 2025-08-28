import { motion } from "framer-motion";
import { Navbar, Footer, Card } from "../components/index.js";

const projects = [
	{
		title: "Portfolio Website",
		desc: "Personal portfolio website made using ReactJS and tailwind.",
		live: "https://www.arbabansari.com",
		githubLink: "https://github.com/ArbAnk007/my-website",
	},
	{
		title: "Backend API",
		desc: "RestAPI made using Golang, SQL. Features authentication, users and posts.",
		live: null,
		githubLink: "https://github.com/ArbAnk007/auth-backend-golang",
	},
	{
		title: "myBlog",
		desc: "A full fledged blog application with CRUD operations made using ReactJS, Appwrite and Redux.",
		live: "https://blog.arbabansari.com",
		githubLink: "https://github.com/ArbAnk007/myBlog",
	},
	{
		title: "Rock Paper Scissors",
		desc: "A fun to play rock paper scissors game with bot. Also features auto play mode.",
		live: "https://arbank007.github.io/Rock-Paper-Scissors/",
		githubLink: "https://github.com/ArbAnk007/Rock-Paper-Scissors",
	},
	{
		title: "TikTacToe",
		desc: "TicTacToe game made using HTML, CSS and JS",
		live: "https://arbank007.github.io/TicTacToe/",
		githubLink: "https://github.com/ArbAnk007/TicTacToe",
	},
	{
		title: "Todo Manager",
		desc: "A todo manager on the web uses local storage, made using ReactJS.",
		live: "https://todo-react-eight-dusky.vercel.app/",
		githubLink: "https://github.com/ArbAnk007/todo-react",
	},
];

function Home() {
	return (
		<div className="min-h-screen bg-neutral-950 text-white font-mono">
			<Navbar />
			<section className="flex flex-col justify-center items-center text-center min-h-screen px-6" id="home">
				<div className="h-16 w-42 bg-teal-400 blur-3xl absolute top-0 left-0 z-40"></div>
				<div className="h-16 w-42 bg-teal-400 blur-3xl absolute bottom-0 right-0 z-40"></div>
				<motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold leading-snug max-w-4xl">
					<i>Hello,</i> I am <span className="relative inline-block bg-gradient-to-r from-teal-400 via-white to-teal-400 bg-[length:500%_100%] bg-clip-text text-transparent animate-shine">Arbab Ansari</span>
					<br /> I write <span className="text-teal-400 italic">code</span>.
				</motion.h1>

				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-10">
					<a href="#projects">
						<button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-black font-semibold rounded-2xl shadow-lg cursor-pointer ease-in-out duration-200 hover:scale-110">Check My Work</button>
					</a>
				</motion.div>
			</section>
			<section className="flex justify-center items-center flex-wrap gap-12 text-center min-h-screen bg-neutral-950 relative" id="projects">
				<div className="text-teal-400 md:text-4xl text-2xl font-bold">Projects</div>
				<div className="flex justify-center flex-wrap gap-6">
					{projects.map((item) => (
						<Card title={item.title} desc={item.desc} githubLink={item.githubLink} live={item.live} />
					))}
				</div>
			</section>
			<section className="flex flex-col justify-center items-center text-center min-h-screen bg-neutral-950 relative" id="contact">
				<div className="h-16 w-42 bg-teal-400 blur-3xl absolute top-0 left-0 z-40"></div>
				<div className="h-16 w-42 bg-teal-400 blur-3xl absolute bottom-0 right-0 z-40"></div>
				Under Construction
			</section>
			<Footer />
		</div>
	);
}

export default Home;
