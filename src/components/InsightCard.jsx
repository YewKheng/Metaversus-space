import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export const InsightCard = ({ imgUrl, title, subtitle, index }) => {
	return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.5, 1)}
			className="flex flex-col gap-4 md:flex-row">
			<img
				className="w-full h-[250px] md:w-[270px] rounded-3xl object-cover"
				src={imgUrl}
				alt="Planet 1"
			/>
			<div className="flex w-full justify-between items-center pl-3 md:pl-0">
				<div className="flex flex-1 flex-col max-w-[650px] md:ml-14">
					<h3 className="text-white text-[26px] leading-[36px] font-normal lg:text-[42px] lg:leading-[52px]">
						{title}
					</h3>
					<p className="text-secondary-white text-[14px] leading-[28px] font-normal lg:text-[20px] lg:leading-[40px]">
						{subtitle}
					</p>
				</div>
				<div className="w-[100px] h-[100px] justify-center items-center bg-transparent border-2 rounded-full border-[#f5f5f5] hidden lg:flex">
					<img className="w-[40px] h-[40px] object-contain" src="/arrow.svg" alt="Arrow" />
				</div>
			</div>
		</motion.div>
	);
};
