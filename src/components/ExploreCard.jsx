import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export const ExploreCard = ({ id, imgUrl, title, index, active, handleclick }) => {
	return (
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className={`relative ${
				active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
			} flex min-w-[170px] h-[700px] items-center justify-center  transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
			onClick={() => handleclick(id)}>
			<img
				src={imgUrl}
				alt="planet-04"
				className="absolute w-full h-full object-cover rounded-3xl"
			/>
			{active !== id ? (
				<h3 className="absolute text-white text-2xl font-bold z-0 sm:text-[32px] sm:leading-10 lg:bottom-28 lg:-rotate-90 lg:origin-[0,0]">
					{title}
				</h3>
			) : (
				<div className="absolute flex flex-col w-full justify-start bottom-0 p-8 bg-black/50 rounded-b-3xl">
					<div className="flex w-[60px] h-[60px] justify-center items-center rounded-3xl glassmorphism mb-4">
						<img src="/headset.svg" alt="VR Headset" className="w-[45%] h-[45%] object-contain" />
					</div>
					<p className="text-white text-[16px] font-normal uppercase leading-5 tracking-[0.5] mb-6">
						Enter Metaverse
					</p>
					<h2 className="text-white text-2xl font-bold sm:text-[32px] sm:leading-10">{title}</h2>
				</div>
			)}
		</motion.div>
	);
};
