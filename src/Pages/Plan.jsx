import Footer from "../Components/footer"
import PlanCard from "../Components/PlanCard"

const Plan = () => {

  return (
    <>
      {/* header */}
      <div className="plane-header w-full bg-[#11131d] text-center">
        <h2 className="p-head-res text-[4rem] all-h font-bold text-[#fafafa] pt-10">
          Plans
        </h2>

        <p className="all-p-res c-p-res text-[#fafafa] text-[2rem] leading-10 px-[25rem] pt-5">
          Start your journey with a free registration, and when you love it, take the next step and upgrade your membership
        </p>
      </div>


      {/* plan */}
      <div className="plan w-full px-[20rem] bg-[#11131d] pt-30">
        <div className="about-plane w-full p-10 rounded-3xl flex justify-between">
          <PlanCard price={"$79"} date={"/per month"} about={"Get access to the library of paid-members only posts"} ser1={"Access to Premium posts"} ser2={"Weekly email newsletter"} ser3={"Support indie publishing"} ser4={"Simple, secure card payment"} btn={"Choose"} />

          <PlanCard price={"$149"} date={"/per year"} about={"Get access to everything"} ser1={"Access to Premium Plus posts"} ser2={"Weekly email newsletter"} ser3={"Support indie publishing"} ser4={"Weekly email newsletter"} ser5={"- Members-only Q&A"} btn={"Choose"} />
        </div>
      </div>


      {/* register members */}
      <div className="members w-full px-[20rem] bg-[#11131d]">
        <div className="members-con pt-[3rem]">
          <div className="members-dec w-full relative">
            <img
              className="w-full object-cover h-80 rounded-3xl"
              src="https://eihei-dark.fueko.net/content/images/size/w1200/format/webp/2024/06/don-kaveen-F0CTHqaZth0-unsplash.jpg"
              alt=""
            />
            <div className="members-about absolute bottom-[20px] left-[20px] ">
              <h2 className="text-[3rem] w-[65%] text-[#fafafa] bg-[#11131d] rounded-3xl p-5">
                Join Eihei members. Register for free, and upgrade when you love
                it.
              </h2>
            </div>
          </div>
        </div>
      </div>




     {/* footer */}
     <div className="footer-con w-full px-[20rem] bg-[#11131d]">
        <Footer />
      </div>
    </>
  )
}

export default Plan