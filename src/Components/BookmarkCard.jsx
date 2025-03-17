
const BookmarkCard = ({ bookP, bookI, bookH }) => {
    return (
        <>
            <div className="card-book w-[60%] border-1 border-[#7f7f7f24] rounded-3xl flex overflow-hidden hover:opacity-[.80] duration-200">
                <div className="book-d w-[70%] p-10">
                    <div className="b-c-head">
                        <h2 className="text-[#fafafa] text-[1.3rem] font-bold">{bookH}</h2>
                    </div>

                    <p className="text-[#fafafa] text-[1rem] mt-3">
                        {bookP}
                    </p>
                </div>
                <div className="book-i w-[30%]">
                    <img className="w-[100%] h-[100%] object-cover" src={bookI} alt="" />
                </div>
            </div>
        </>
    )
}

export default BookmarkCard