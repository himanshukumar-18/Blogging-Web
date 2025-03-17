import { Link } from "react-router"

const JoinBtn = () => {
  return (
    <>

      <button className="bg-[#7D29ff] text-[#fafafa] px-[3rem] py-[1rem] rounded-[50px] text-[1.5rem] hover:bg-[#7f29ffdf] duration-200 res-join cursor-pointer">
        <Link to={"/Contact"}>
          Join The Club
        </Link>
      </button>

    </>
  )
}

export default JoinBtn