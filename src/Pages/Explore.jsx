import { TypingText, TitleText, ExploreCard } from "../components";
import { exploreWorlds } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

export const Explore = () => {
	const [active, setActive] = useState("world-2");

	return (
		<section className="p-8 sm:p-16 md:px-6 md:py-12" id="explore">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="flex flex-col w-full mx-auto 2xl:max-w-[1280px]">
				<TypingText title="| The World" textStyles="text-center" />
				<TitleText
					title={
						<>
							Choose the world you want <br className="hidden md:block" />
							to explore
						</>
					}
					textStyles="text-center"
				/>
				<div className="flex flex-col min-h-[70vh] gap-5 mt-[50px] lg:flex-row">
					{exploreWorlds.map((world, index) => (
						<ExploreCard
							key={world.id}
							{...world}
							index={index}
							active={active}
							handleclick={setActive}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};
