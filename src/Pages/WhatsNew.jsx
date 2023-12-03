import { TypingText, TitleText, NewFeatures } from "../components";
import { newFeatures } from "../constants";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

export const WhatsNew = () => {
	return (
		<section className="relative p-8 z-10 sm:p-16 md:px-6 md:py-12">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="flex flex-col w-full gap-8 mx-auto lg:flex-row 2xl:max-w-[1280px]">
				<motion.div
					variants={fadeIn("right", "tween", 0.2, 1)}
					className="flex flex-[0.95] flex-col justify-center">
					<TypingText title="| What's New?" />
					<TitleText title={<>What's new about Metaversus?</>} />
					<div className="flex flex-wrap justify-start gap-6 mt-12">
						{newFeatures.map((feature) => (
							<NewFeatures key={feature.title} {...feature} />
						))}
					</div>
				</motion.div>
				<motion.div
					variants={planetVariants("right")}
					className="flex flex-1 justify-center items-center">
					<img
						className="w-[80%] h-[80%] object-contain md:w-[60%] md:h-[60%] lg:w-[80%] lg:h-[80%]"
						src="/whats-new.png"
						alt="What's New"
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};
