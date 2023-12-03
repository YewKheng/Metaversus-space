export const StartSteps = ({ number, text }) => {
	return (
		<div className="flex justify-center items-center">
			<div className="flex w-[70px] h-[70px] justify-center items-center bg-[#323f5d] rounded-3xl">
				<p className="text-white text-[20px] leading-[25px] font-bold">0{number}</p>
			</div>
			<p className="flex-1 text-[#b0b0b0] text-[18px] leading-8 font-normal ml-7">{text}</p>
		</div>
	);
};
