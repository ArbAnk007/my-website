function Navbar() {
	return (
		<nav className="flex justify-end items-center px-8 py-4 fixed right-0 left-0 backdrop-blur-lg z-10">
			<div className="flex gap-6 text-sm">
				<a href="#home" className="hover:text-teal-400">
					Home
				</a>
				<a href="#projects" className="hover:text-teal-400">
					Projects
				</a>
				<a href="#contact" className="hover:text-teal-400">
					Contact
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
