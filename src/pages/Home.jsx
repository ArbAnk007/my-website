import { motion } from "framer-motion";
import { Navbar, Footer } from "../components/index.js";

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
			<section className="flex flex-col justify-center items-center text-center min-h-screen bg-neutral-950 relative" id="projects">
				Under Construction
			</section>
			<section className="flex flex-col justify-center items-center text-center min-h-screen bg-neutral-950 relative" id="contact">
				Under Construction
			</section>
			<Footer />
		</div>
	);
}

export default Home;
