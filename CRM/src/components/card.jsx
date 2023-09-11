

const card = ({children, fontColor="text-white",borderColor="border-error", dividerColor="bg-gray-100", background="bg-blue-200", status = 50, titleText = "Card", quantity = 50}) => {
  return (
    <div className={`border-b-8 ${borderColor}  w-64 h-44 rounded-md flex flex-col ${background} justify-start items-center py-2 mt-8`}>
           <div className="text-black text-2xl">
               {children} <span>{titleText}</span>
           </div>
           <div className={`divider ${dividerColor} h-0.5  mx-4 rounded-sm`}></div>
           <div className="flex justify-around gap-4 items-center mt-2">
            <div className={` text-7xl ${fontColor}`}  >
                {quantity}
            </div>
            <div className={`radial-progress ${fontColor}`} style={{"--value":status}}>{status}%</div>
           </div>
    </div>
  );
};

export default card;