import { TypingText, TitleText, InsightCard } from "../components";
import { insights } from "../constants";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

export const Insights = () => {
	return (
		<section className="relative p-8 z-10 sm:p-16 md:px-6 md:py-12">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="flex flex-col w-full mx-auto 2xl:max-w-[1280px]">
				<TypingText title="| Insight" textStyles="text-center" />
				<TitleText title="Insight about metaverse" textStyles="text-center" />
				<div className="flex flex-col gap-7 mt-12">
					{insights.map((insight, index) => (
						<InsightCard key={`insight-${index}`} index={index + 1} {...insight} />
					))}
				</div>
			</motion.div>
		</section>
	);
};
