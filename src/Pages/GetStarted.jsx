import { TypingText, TitleText, StartSteps } from "../components";
import { startingFeatures } from "../constants";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

export const GetStarted = () => {
	return (
		<section className="relative p-8 z-10 sm:p-16 md:px-6 md:py-12">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="flex flex-col w-full gap-8 mx-auto lg:flex-row 2xl:max-w-[1280px]">
				<motion.div
					variants={planetVariants("left")}
					className="flex flex-1 justify-center items-center">
					<img
						className="w-[80%] h-[80%] object-contain md:w-[60%] md:h-[60%] lg:w-[80%] lg:h-[80%]"
						src="/get-started.png"
						alt="Get Started"
					/>
				</motion.div>
				<motion.div
					variants={fadeIn("left", "tween", 0.2, 1)}
					className="flex flex-[0.75] flex-col justify-center">
					<TypingText title="| How Metaversus Works" />
					<TitleText title="Get started with just a few clicks" />
					<div className="flex flex-col max-w-[370px] gap-6 mt-8">
						{startingFeatures.map((feature, index) => (
							<StartSteps key={feature} number={index + 1} text={feature} />
						))}
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};
