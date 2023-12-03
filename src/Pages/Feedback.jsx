import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";

export const Feedback = () => {
	return (
		<section className="relative p-8 z-10 sm:p-16 md:px-6 md:py-12">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="flex flex-col w-full gap-6 mx-auto lg:flex-row 2xl:max-w-[1280px]">
				<motion.div
					variants={fadeIn("right", "tween", 0.2, 1)}
					className="relative flex flex-[0.5] gradient-05 flex-col justify-end border border-[#6a6a6a] rounded-3xl p-4 sm:p-8 lg:max-w-[370px]">
					<div className="feedback-gradient" />
					<div>
						<h3 className="text-white text-[24px] leading-[32px] sm:text-[32px] sm:leading-[40px] font-bold">
							Samantha
						</h3>
						<h5 className="text-white text-[14px] leading-[19px] mt-1 sm:text-[18px] sm:leading-[23px] font-normal">
							Founder Metaverus
						</h5>
					</div>
					<p className="text-white text-[18px] leading-[38px] mt-5 sm:text-[24px] sm:leading-[46px] font-normal">
						“With the development of today's technology, metaverse is very useful for today's work,
						or can be called web 3.0. by using metaverse you can use it as anything”
					</p>
				</motion.div>
				<motion.div
					variants={fadeIn("right", "tween", 0.2, 1)}
					className="relative flex flex-1 justify-center items-center">
					<img
						className="w-full min-h-[250px] h-auto object-cover rounded-[40px] lg:h-[610px]"
						src="/planet-09.png"
						alt="Planet"
					/>
					<motion.div
						variants={zoomIn(0.4, 1)}
						className="absolute -left-[8%] top-[8%] hidden lg:flex">
						<img className="w-[155px] h-[155px] object-contain" src="/stamp.png" alt="Stamp" />
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
};
