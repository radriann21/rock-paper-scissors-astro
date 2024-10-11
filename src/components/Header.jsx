const Header = () => {
	return (
		<header className="w-full lg:w-[60%] h-fit md:py-4 py-2 px-4 md:px-8 flex items-center justify-between rounded-xl border-2 border-neutral-header-outline">
			<section className="flex-1 text-lg md:text-2xl font-bold uppercase leading-none">
				<p className="m-0 p-0 leading-none">Rock</p>
				<p className="m-0 p-0 leading-none">Paper</p>
				<p className="m-0 p-0 leading-none">Scissors</p>
			</section>

			<section className="flex-0">
				<div className="w-24 md:w-[110px] h-fit bg-white rounded-xl py-2">
					<p className="text-neutral-score-text uppercase tracking-wide font-bold text-center">Score</p>
					<p className="text-neutral-dark-text font-bold text-xl md:text-4xl text-center">0</p>
				</div>
			</section>
		</header>
	)
}

export default Header


