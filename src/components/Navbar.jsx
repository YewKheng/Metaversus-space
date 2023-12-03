import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

export const Navbar = () => {
	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			className="relative py-8 px-6 sm:px-16">
			<div className="absolute w-[50%] gradient-01 inset-0" />
			<div className="flex w-full justify-between gap-8 mx-auto 2xl:max-w-[1280px]">
				<img className="w-6 h-6 object-contain" src="/search.svg" alt="Search Icon" />
				<h2 className="text-white text-[24px] leading-[30px] font-extrabold">METAVERSUS</h2>
				<img className="w-6 h-6 object-contain" src="/menu.svg" alt="Menu Icon" />
			</div>
		</motion.nav>
	);
};
