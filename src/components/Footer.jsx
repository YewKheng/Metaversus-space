import { socials } from "../constants";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

export const Footer = () => {
	return (
		<motion.footer
			variants={footerVariants}
			initial="hidden"
			whileInView="show"
			className="relative p-8 z-10 sm:p-16 md:px-6 md:py-12">
			<div className="footer-gradient z-0" />
			<div className="flex flex-col w-full gap-8 mx-auto 2xl:max-w-[1280px]">
				<div className="flex flex-wrap justify-between items-center gap-5">
					<h2 className="text-white text-[44px] leading-[60px] font-bold md:text-[64px] md:leading-[80px]">
						Enter the Metaverse
					</h2>
					<button
						type="button"
						className="flex h-fit items-center gap-3 px-6 py-4 bg-[#25618B] rounded-[50px]">
						<img className="w-6 h-6 object-contain" src="/headset.svg" alt="VR Headset" />
						<span className="text-white text-[16px] leading-5 font-normal uppercase">
							Enter the Metaverse
						</span>
					</button>
				</div>

				<div className="flex flex-col">
					<div className="bg-white h-[2px] mb-12 opacity-10" />
				</div>
				<div className="flex flex-wrap justify-between items-center gap-4">
					<h3 className="text-white text-[24px] leading-[30px] font-extrabold uppercase">
						Metaversus
					</h3>
					<p className="text-white/70 text-[14px] leading-[21px] font-normal">
						Copyright © 2021 - 2022 Metaversus. All rights reserved.
					</p>
					<div className="flex gap-4">
						{socials.map((social) => (
							<img
								key={social.name}
								src={social.url}
								alt={social.name}
								className="w-6 h-6 object-contain cursor-pointer"
							/>
						))}
					</div>
				</div>
			</div>
		</motion.footer>
	);
};
