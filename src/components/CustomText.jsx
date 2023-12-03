import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
	<motion.p
		variants={textContainer}
		className={`text-secondary-white/50 text-[14px] leading-[18px] font-normal ${textStyles}`}>
		{Array.from(title).map((letter, index) => (
			<motion.span variants={textVariant2} key={index}>
				{letter === " " ? "\u00A0" : letter}
			</motion.span>
		))}
	</motion.p>
);

export const TitleText = ({ title, textStyles }) => (
	<motion.h2
		variants={textVariant2}
		initial="hidden"
		whileInView="show"
		className={`text-white text-[40px] font-bold mt-2 md:text-[64px] ${textStyles}`}>
		{title}
	</motion.h2>
);
