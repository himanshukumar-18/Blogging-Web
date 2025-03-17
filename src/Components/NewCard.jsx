
const NewCard = ({ newImg, newTitle, newHead, newAbout, newDes }) => {

    return (
        <>
            <div className="newCard w-[380px]">
                <div className="new-image relative mb-2 hover:translate-y-[-5px] duration-200">
                    <img className="w-[100%] h-[350px] rounded-3xl object-cover" src={newImg} alt="" />
                    <div className="new-i-a absolute top-[10px] left-[10px] text-[#fafafa] bg-[#11131d] px-[20px] rounded-3xl py-[2px] text-[.9rem] hover:underline cursor-pointer"><p>{newTitle}</p></div>
                </div>

                <span className="text-[#fafafa]">
                    {newHead}
                </span>

                <p className="text-[#fafafa] text-[1.3rem] font-bold mt-2">
                    {newAbout}
                </p>

                <p className="text-[#fafafa] text-[1rem] mt-2">
                    {newDes}
                </p>
            </div>
        </>
    )
}

export default NewCard