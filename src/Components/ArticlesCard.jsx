

const ArticlesCard = ({cardBg, topTitle, cardHead, cardAbout}) => {
  return (
    <>
        <div className="w-[280px] h-[450px] rounded-3xl relative overflow-hidden hover:translate-y-[20px] duration-200 card-a">
          <img className="w-[100%] h-[100%] object-cover " src={cardBg} alt="" />
            <div className="c-name bg-[#11131d] px-[18px] py-[5px] rounded-3xl absolute top-4 left-4 text-[#fafafa]">
                <span className="hover:underline duration-100 cursor-pointer text-[.9rem]">
                  {topTitle}
                </span>
            </div>

            <div className="card-details absolute w-[90%] py-[25px] bg-[#11131d] bottom-[1rem] left-[50%] translate-x-[-50%] rounded-3xl p-[1rem]">
                <span className="text-[#fafafa] text-[.9rem] hover:underline duration-200 cursor-pointer">
                    {cardHead}
                </span>

                <p className="text-[#fafafa] text-[1.2rem] leading-[25px] mt-2 font-bold hover:underline duration-200 cursor-pointer" >
                    {cardAbout}
                </p>
            </div>
        </div>
    </>
  )
}

export default ArticlesCard