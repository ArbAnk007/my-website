import { motion } from "framer-motion";
import { Navbar, Footer, Card } from "../components/index.js";

const projects = [
	{
		title: "Portfolio Website",
		desc: "Personal portfolio website made using ReactJS and tailwindcss.",
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
		title: "TicTacToe",
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
				<div className="md:h-16 md:w-42 h-12 w-20 bg-teal-400 blur-3xl absolute top-0 left-0 z-40"></div>
				<div className="md:h-16 md:w-42 h-12 w-20 bg-teal-400 blur-3xl absolute bottom-0 right-0 z-40"></div>
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
			<section className="flex justify-center items-center flex-wrap gap-12 text-center min-h-screen pt-12 bg-neutral-950 relative" id="projects">
				<div className="text-teal-400 md:text-4xl text-2xl font-bold">Projects</div>
				<div className="flex justify-center flex-wrap gap-6">
					{projects.map((item) => (
						<Card title={item.title} desc={item.desc} githubLink={item.githubLink} live={item.live} key={item.title} />
					))}
				</div>
			</section>
			<section className="flex flex-col justify-center items-center text-center min-h-screen pt-12 bg-neutral-950 relative" id="contact">
				<div className="md:h-16 md:w-42 h-12 w-20 bg-teal-400 blur-3xl absolute top-0 left-0 z-40"></div>
				<div className="md:h-16 md:w-42 h-12 w-20 bg-teal-400 blur-3xl absolute bottom-0 right-0 z-40"></div>
				<div className="flex flex-col gap-6">
					<p className="md:text-3xl text-xl">Connect with me on</p>
					<div className="flex justify-center gap-6 items-center">
						<a href="https://www.linkedin.com/in/arbab-ansari/" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="h-8 w-8">
								<path d="M20.447 20.452H16.894V14.85c0-1.337-.024-3.059-1.863-3.059-1.864 0-2.149 1.454-2.149 2.957v5.704H9.329V9h3.4v1.561h.047c.474-.9 1.632-1.85 3.358-1.85 3.591 0 4.256 2.362 4.256 5.436v6.305zM5.337 7.433a1.977 1.977 0 1 1 0-3.954 1.977 1.977 0 0 1 0 3.954zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.277V1.723C24 .771 23.2 0 22.225 0z" />
							</svg>
						</a>
						<a href="https://github.com/ArbAnk007" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24" className="h-8 w-8">
								<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61 -.546-1.387-1.333-1.757-1.333-1.757 -1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605 -2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.405 1.02.006 2.047.139 3.006.405 2.291-1.552 3.297-1.23 3.297-1.23 .653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .317.218.687.825.57 C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a href="https://www.instagram.com/__._arbab/" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Instagram" className="h-9 w-9">
								<rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="white" strokeWidth="1.6" />
								<circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.6" />
								<circle cx="17.5" cy="6.5" r="0.9" fill="white" />
							</svg>
						</a>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Home;
