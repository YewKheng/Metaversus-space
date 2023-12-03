export const NewFeatures = ({ imgUrl, title, subtitle }) => {
	return (
		<div className="flex flex-1 flex-col min-w-[210px] sm:max-w-[250px]">
			<div className="flex w-[70px] h-[70px] justify-center items-center bg-[#FFFFFF14] rounded-3xl">
				<img className="w-[40%] h-[40%] object-contain" src={imgUrl} alt="Icon" />
			</div>
			<h1 className="text-white text-[24px] leading-[30px] font-bold mt-7">{title}</h1>
			<p className="flex-1 text-[#B0B0B0] text-[16px] leading-[29px] font-normal mt-4">
				{subtitle}
			</p>
		</div>
	);
};
