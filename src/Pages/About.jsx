import { TypingText } from "../components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

export const About = () => {
	return (
		<section className="relative p-8 z-10 sm:p-16 md:px-6 md:py-12">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="flex flex-col w-full justify-center items-center mx-auto 2xl:max-w-[1280px]">
				<TypingText title="| About Metaversus" textStyles="text-center" />
				<div className="gradient-02 z-0" />
				<motion.p
					variants={fadeIn("up", "tween", 0.2, 1)}
					className="text-secondary-white text-[20px] leading-9 font-normal text-center mt-2 sm:text-[32px] sm:leading-[58px]">
					<span className="text-white font-extrabold">Metaverse</span> is a new thing in the future,
					where you can enjoy the virtual world by feeling like it's really real, you can feel what
					you feel in this metaverse world, because this is really the{" "}
					<span className="text-white font-extrabold">madness of the metaverse</span> of today,
					using only <span className="text-white font-extrabold">VR</span> devices you can easily
					explore the metaverse world you want, turn your dreams into reality. Let's{" "}
					<span className="text-white font-extrabold">explore</span> the madness of the metaverse by
					scrolling down
				</motion.p>
				<motion.img
					variants={fadeIn("up", "tween", 0.3, 1)}
					className="w-[18px] h-7 mt-7 object-contain"
					src="/arrow-down.svg"
					alt="Arrow Down"
				/>
			</motion.div>
		</section>
	);
};
