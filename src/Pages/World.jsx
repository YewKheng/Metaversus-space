import { TypingText, TitleText } from "../components";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

export const World = () => {
	return (
		<section className="relative p-8 z-10 sm:p-16 md:px-6 md:py-12">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="flex flex-col w-full mx-auto 2xl:max-w-[1280px]">
				<TypingText title="| People around the World" textStyles="text-center" />
				<TitleText
					title={
						<>
							Track friends around you and <br className="hidden lg:block" />
							invite them to play together in <br className="hidden lg:block" />
							the same world
						</>
					}
					textStyles="text-center"
				/>
				<motion.div
					variants={fadeIn("up", "tween", 0.3, 1)}
					className="relative hidden w-full h-[550px] mt-16 2xl:flex">
					<img className="w-full h-full object-cover" src="/map.png" alt="Map" />
					<div className="absolute w-[70px] h-[70px] bottom-28 right-32 p-[6px] bg-[#5d6680] rounded-full">
						<img className="w-full h-full" src="people-01.png" alt="People" />
					</div>
					<div className="absolute w-[70px] h-[70px] top-10 left-36 p-[6px] bg-[#5d6680] rounded-full">
						<img className="w-full h-full" src="people-02.png" alt="People" />
					</div>
					<div className="absolute w-[70px] h-[70px] top-1/2 left-[47%] p-[6px] bg-[#5d6680] rounded-full">
						<img className="w-full h-full" src="people-03.png" alt="People" />
					</div>
					<img
						className="absolute w-[30%] h-[60%] bottom-[20%] left-[11.5%]"
						src="/planet-10-hue.png"
						alt="Gradient"
					/>
					<div className="absolute w-[210px] h-[160px] bottom-48 left-[18%] p-2 bg-[#5d6680] rounded-3xl">
						<img className="w-full h-full" src="/planet-10.png" alt="Planet" />
						<div className="absolute flex flex-col w-[85%] h-[85%] justify-end items-end gap-3 bottom-3 left-0 p-[8px]">
							<img
								className="absolute bottom-9 left-7 z-[3]"
								src="/Ellipse 39.png"
								alt="People Icon"
							/>
							<img
								className="absolute bottom-9 left-10 z-[2]"
								src="/Ellipse 40.png"
								alt="People Icon"
							/>
							<img
								className="absolute bottom-9 left-[52px] z-[1]"
								src="/Ellipse 41.png"
								alt="People Icon"
							/>
							<p className="text-white text-[12px] leading-[15px] font-normal">+ 264 has joined</p>
							<p className=" text-white text-[17px] leading-[20px] font-bold">The Upside Down</p>
						</div>
					</div>
					<img
						className="absolute w-[35%] h-[56%] top-0 right-[10%] flex"
						src="/planet-11-hue.png"
						alt="Gradient"
					/>
					<div className="absolute w-[210px] h-[160px] top-12 right-[20%] p-2 bg-[#5d6680] rounded-3xl">
						<img className="w-full h-full" src="/planet-11.png" alt="Planet" />
						<div className="absolute flex flex-col w-[85%] h-[85%] justify-end items-end gap-3 bottom-3 left-0 p-[8px] pl-7">
							<img
								className="absolute bottom-9 left-7 z-[3]"
								src="/Ellipse 39.png"
								alt="People Icon"
							/>
							<img
								className="absolute bottom-9 left-10 z-[2]"
								src="/Ellipse 40.png"
								alt="People Icon"
							/>
							<img
								className="absolute bottom-9 left-[52px] z-[1]"
								src="/Ellipse 41.png"
								alt="People Icon"
							/>
							<p className="text-white text-[12px] leading-[15px] font-normal">+ 264 has joined</p>
							<p className="text-white text-[17px] leading-[20px] font-bold self-start">
								Kadirojo Permai
							</p>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};
