import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

export const Hero = () => {
	return (
		<section className="py-8 sm:py-16 md:py-12">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="flex w-full flex-col mx-auto 2xl:max-w-[1280px]">
				<div className="relative flex flex-col justify-center items-center z-10">
					<motion.h1
						variants={textVariant(1.1)}
						className="text-white text-[44px] uppercase font-bold leading-[64px] sm:text-[60px] sm:leading-[74px] md:text-[100px] md:leading-[114px] lg:text-[144px] lg:leading-[158px]">
						Metaverse
					</motion.h1>
					<motion.div
						variants={textVariant(1.3)}
						className="flex flex-row justify-center items-center">
						<h1 className="text-white text-[44px] uppercase font-bold leading-[64px] sm:text-[60px] sm:leading-[74px] md:text-[100px] md:leading-[114px] lg:text-[144px] lg:leading-[158px]">
							Ma
						</h1>
						<div className="w-[60px] h-[38px] border-white border-[9px] rounded-r-[50px] mx-[6px] sm:w-20 sm:h-[50px] sm:mx-2 md:w-[150px] md:h-20 md:border-[18px] lg:w-[220px] lg:h-[118px] lg:border-[22px]" />
						<h1 className="text-white text-[44px] uppercase font-bold leading-[64px] sm:text-[60px] sm:leading-[74px] md:text-[100px] md:leading-[114px] lg:text-[144px] lg:leading-[158px]">
							Ness
						</h1>
					</motion.div>
				</div>
				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className="relative w-full -mt-3 md:-mt-5 pl-6 sm:pl-16 2xl:pl-0">
					<div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] -top-[30px] z-0 2xl:rounded-t-[140px]" />
					<img
						className="relative w-full h-[350px] rounded-tl-[140px] z-10 object-cover sm:h-[500px] 2xl:rounded-t-[140px]"
						src="/cover.png"
						alt="Cover"
					/>
					<a href="#explore">
						<div className="relative flex w-full justify-end -mt-[70px] pr-10 z-10 md:-mt-[50px]">
							<img
								className="w-[100px] h-[100px] object-contain sm:w-[155px] sm:h-[155px]"
								src="/stamp.png"
								alt="Stamp"
							/>
						</div>
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
};
