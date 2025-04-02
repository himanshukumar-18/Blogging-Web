import { Link } from "react-router";
import ArticlesCard from "../Components/ArticlesCard";
import NewCard from "../Components/NewCard";
import JoinBtn from "../Components/joinBtn";
import Footer from "../Components/footer";

const Home = () => {
  const blogType = [
    {
      img: "https://eihei-dark.fueko.net/content/images/size/w600/format/webp/2024/06/rodion-kutsaiev--tgTipG2t_g-unsplash.jpg",

      title: "blockchain",

      head: "Nichole Becker & Daryl Wehner",

      about: "Understanding the power of bitcoin and blockchain.",
    },

    {
      img: "https://eihei-dark.fueko.net/content/images/size/w600/format/webp/2024/06/zoo-monkey-3IoF4r_G-oE-unsplash.jpg",
      title: "design",
      head: "Daryl Wehner",
      about: "The color of cherry blossoms a symbol of branding",
    },

    {
      img: "https://eihei-dark.fueko.net/content/images/size/w600/format/webp/2024/06/charlesdeluvio-r3Dae5EUDvA-unsplash.jpg",
      title: "inspiration",
      head: "Brenda Reichel",
      about: "Comfort and simplicity are two keys",
    },

    {
      img: "https://eihei-dark.fueko.net/content/images/size/w600/format/webp/2023/11/photo-1682846133858-c0599bc99874.jpeg",
      title: "design",
      head: "Damian Erdman",
      about: "Being unique is better than being perfect",
    },

    {
      img: "https://images.unsplash.com/photo-1604076947037-d909e2f10fca?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDk1fHxncmFkaWVudHxlbnwwfHx8fDE3MTQwNDA3Nzd8MA&ixlib=rb-4.0.3&q=80&w=600",
      title: "design",
      head: "Breana Flatly",
      about: "Problem are not stop signs, they are guidelines",
    },
  ];

  const newCardUserFirst = [
    {
      Img: "https://eihei-dark.fueko.net/content/images/size/w600/format/webp/2024/06/marea-wellness-7axi7V3QhXE-unsplash.jpg",
      Title: "lifestyle",
      head: "Daryl Wehner",
      about: "The extraordinary everyday life",
      des: "In the age of technological innovation, mobile applications have become gateways to virtual realms, offering users immersive experiences that often blur the lines between reality and the digital landscape.",
    },
    {
      Img: "https://eihei-dark.fueko.net/content/images/size/w600/format/webp/2024/06/emmanuel-akinte-UJvcm4GxPDk-unsplash.jpg",
      Title: "lifestyle",
      head: "Damian Erdman",
      about: "We are stronger as a group than an individual",
      des: "Praesent imperdiet pulvinar gravida. Mauris feugiat sapien est, non mattis tellus tempus nec. Nunc in mi sodales, finibus massa sed,...",
    },
    {
      Img: "https://eihei-dark.fueko.net/content/images/size/w600/format/webp/2024/06/isaac-macdonald-XS9YlWVKGv8-unsplash.jpg",
      Title: "lifestyle",
      head: "Breana Flatley",
      about:
        "The trick to getting more done is to have the freedom to roam around",
      des: "Morbi ac nulla felis. Vestibulum maximus, mi eget finibus commodo, tellus ligula ultrices mauris, at condimentum erat risus id ante....",
    },
  ];

  const newCardUserMiddel = [
    {
      Img: "https://eihei-dark.fueko.net/content/images/size/w600/format/webp/2024/06/rodion-kutsaiev--tgTipG2t_g-unsplash.jpg",
      Title: "blockchain",
      head: "Nichole Becker & Daryl Wehner",
      about: "Understanding the power of bitcoin and blockchain",
      des: "Bitcoin and blockchain technology have emerged as transformative forces in the realm of finance and beyond. Understanding the synergy between these two innovations is essential for grasping their collective impact on our global economy.",
    },
    {
      Img: "https://eihei-dark.fueko.net/content/images/size/w600/format/webp/2024/06/google-deepmind-qITnJecNF80-unsplash.jpg",
      Title: "innovation",
      head: "Breana Flatley",
      about:
        "Discover how artificial intelligence is reshaping the employment landscape. Explore the impact of AI on job markets, from automation to the emergence of new roles.",
    },
    {
      Img: "https://eihei-dark.fueko.net/content/images/size/w600/format/webp/2024/06/photo-1718197482866-1ab3e032ca9b.jpeg",
      Title: "nature",
      head: "Breana Flatley & Damian Erdman",
      about: "I believe the world is one big family",
      des: "From societal expectations to the curated images on social media, the pursuit of perfection has become an omnipresent force shaping our lives.",
    },
  ];

  const newCardUserLast = [
    {
      Img: "https://eihei-dark.fueko.net/content/images/size/w600/format/webp/2024/06/zoo-monkey-3IoF4r_G-oE-unsplash.jpg",
      Title: "innovation",
      about: "Understanding the power of bitcoin and blockchain",
      des: "Discover how artificial intelligence is reshaping the employment landscape. Explore the impact of AI on job markets, from automation to the emergence of new roles.",
    },
    {
      Img: "https://eihei-dark.fueko.net/content/images/size/w600/format/webp/2024/06/google-deepmind-qITnJecNF80-unsplash.jpg",
      Title: "innovation",
      about:
        "Discover how artificial intelligence is reshaping the employment landscape. Explore the impact of AI on job markets, from automation to the emergence of new roles.",
    },
  ];

  return (
    <>
      {/* home header */}
      <div id="home_header" className="w-full h-auto bg-[#11131d]">
        <div
          id="header_content"
          className="text-[#fafafa] text-center text-[5rem] lg:px-[20rem] leading-[80px] py-[50px]"
        >
          <h1 className="hero_head">
            Hey 👋 we’re Eihei. Join the Club and explore what’s making waves in
            our community.
          </h1>
        </div>
        <div id="sub" className="flex flex-col items-center px-[2rem]">
          <div
            id="hero_inputs"
            className="w-[600px] h-[80px] flex items-center justify-between bg-[#1c2028] rounded-[50px] p-5"
          >
            <input
              type="text"
              placeholder="Your Email Address"
              className="text-[#fafafa] text-xl placeholder:text-[#fafafa] email-i outline-0"
            />

            <button className="text-[#fafafa] text-2xl bg-[#7D29ff] px-[50px] py-[15px] rounded-4xl hover:bg-[#7f29ffdf] duration-200 sub-btn" 
            onClick={() => {
              alert("Thanks Wait For Response")
            }}>
              <Link>Subscribe</Link>
            </button>
          </div>

          <div className="check flex gap-2 mt-5">
            <input className="text-[#fafafa]" type="checkbox" />
            <p className="text-[#fafafa] text-[.9rem] check-p">
              You have read and agreed to the
              <Link target="blank" to={"https://fueko.net/privacy/"} className="ml-1.5 underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>

      {/* about blog */}
      <div className="about-container w-full px-[3rem]  bg-[#11131d] pt-[5rem]">
        <div className="about-content rounded-3xl p-[3rem]">
          <div className="articles flex gap-10 justify-center">
            {blogType.map((Details) => {
              return (
                <>
                  <ArticlesCard
                    cardBg={Details.img}
                    topTitle={Details.title}
                    cardHead={Details.head}
                    cardAbout={Details.about}
                  />
                </>
              );
            })}
          </div>

          <div className="about-articles text-center px-[14rem] mt-[5rem] text-[2rem] text-[#fafafa]">
            <p>
              <span className="font-bold">
                Our mission is to create a community that inspires, informs, and
                empowers its members
              </span>
              . Through a diverse range of articles, we delve into the realms of
              health, design, and web-related subjects. Whether its exploring
              the latest trends in wellness, discussing innovative design
              concepts, or unraveling the intricacies of the digital landscape,
              we strive to provide content that not only informs but also sparks
              creativity and fosters a sense of well-being. Join us on this
              journey of positivity, knowledge, and inspiration!
            </p>
          </div>
        </div>
      </div>

      {/* what's new section */}
      <div className="new w-full bg-[#11131d] py-[50px]">
        <div className="new-container w-full">
          <div className="new-head px-[20rem] pt-[20px]">
            <h2 className="text-[#fafafa] text-[3rem]">What New</h2>
          </div>

          <div className="new-content w-full px-[20rem] mt-[20px]">
            <div className="new-row flex justify-between">
              {newCardUserFirst.map((nd, kkk) => {
                return (
                  <>
                    <NewCard
                      key={kkk}
                      newImg={nd.Img}
                      newTitle={nd.Title}
                      newHead={nd.head}
                      newAbout={nd.about}
                      newDes={nd.des}
                    />
                  </>
                );
              })}
            </div>

            <div className="new-row flex justify-between mt-[20px]">
              {newCardUserMiddel.map((md) => {
                return (
                  <>
                    <NewCard
                      newImg={md.Img}
                      newTitle={md.Title}
                      newHead={md.head}
                      newAbout={md.about}
                      newDes={md.des}
                    />
                  </>
                );
              })}
            </div>

            <div className="new-row flex gap-20 mt-[20px]">
              {newCardUserLast.map((ld) => {
                return (
                  <>
                    <NewCard
                      newImg={ld.Img}
                      newTitle={ld.Title}
                      newAbout={ld.about}
                      newDes={ld.des}
                    />
                  </>
                );
              })}
            </div>
          </div>
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

      {/* about sub */}
      <div className="about-sub w-full px-[20rem] bg-[#11131d]">
        <div className="res-ab pt-[2rem] flex justify-between">
          <div className="about-row flex">
            <div className="mr-[5rem]">
              <ul className="text-[#fafafa] text-[1.3rem] res-about-ul">
                <li># Join 1000+ happy members</li>
                <li># Access to members only posts</li>
                <li># Access to comments</li>
              </ul>
            </div>

            <div>
              <ul className="text-[#fafafa] text-[1.2rem] res-about-ul">
                <li># No spam ever, we promise!</li>
                <li># Weekly email newsletter</li>
                <li># Free forever</li>
              </ul>
            </div>
          </div>

          <div className="about-join">
            <JoinBtn />

            <p className="text-center text-[#fafafa] text-[.8rem] mt-[.4rem]">
              Pssst! No credit card required
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footer-con w-full px-[20rem] bg-[#11131d]">
        <Footer />
      </div>
    </>
  );
};

export default Home;
