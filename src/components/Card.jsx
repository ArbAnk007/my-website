function Card({ title, desc, live = null, githubLink }) {
	return (
		<div className="md:h-100 md:w-100 h-72 w-72 bg-neutral-900 rounded-2xl p-6">
			<div className="flex flex-col items-start justify-between h-full rounded-2xl">
				<div className="flex flex-col items-start gap-y-4">
					<p className="md:text-3xl text-xl font-semibold text-teal-400">{title}</p>
					<p className="text-sm text-gray-300 leading-relaxed text-start">{desc}</p>
				</div>

				<div className="mt-6 flex justify-end w-full gap-3">
					{live ? (
						<a href={live} target="_blank" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-black bg-teal-400 hover:bg-teal-300 active:scale-[0.98] transition cursor-pointer">
							Live
						</a>
					) : (
						""
					)}
					<a href={githubLink} target="_blank" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-teal-300 border border-teal-500/40 hover:border-teal-400/80 hover:text-white transition cursor-pointer">
						GitHub
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
