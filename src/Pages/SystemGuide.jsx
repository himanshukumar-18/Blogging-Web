import { Link } from "react-router";
import BookmarkCard from "../Components/BookmarkCard";
import ProductCard from "../Components/ProductCrad";
import Footer from "../Components/footer";


const SystemGuide = () => {
  return (
    <>
      {/* sys header */}
      <div className="sys-header w-full px-[20rem] bg-[#11131d]">
        <div className="sys-g w-full text-center text-[#fafafa] pt-[50px]">
          <h2 className="text-[4rem] all-h font-bold">System Guide</h2>

          <div className="sys-dec w-full text-center pt-[20px] px-[5rem]">
            <p className="all-p-res text-[#fafafa] text-[2rem] leading-10">
              Below are examples of Ghost’s expansive editing toolset designed
              to accommodate the extensive needs of modern creators
            </p>
          </div>
        </div>
      </div>

      {/* sys heading */}
      <div className="sys-heading w-full px-[20rem] bg-[#11131d]">
        <div className="heading-header pt-[5rem]">
          <h2 className="text-[#fafafa] text-[3rem]  all-h">
            Headings
          </h2>

          <p className="h-p-res text-[#fafafa] text-[1.2rem] pr-[30rem] leading-7 all-p-res">
            Header tags are what keep your content away from absolute chaos in terms of visual organization. They help your readers understand your writing, they help search engines determine your content.
          </p>
        </div>
      </div>

      {/* all headings */}
      <div className="all-heading w-full px-[20rem] bg-[#11131d] pt-[5rem]">
        <h1 className="text-[#fafafa] text-[5rem] leading-0 py-[60px]">Heading 1</h1>
        <h2 className="text-[#fafafa] text-[4.2rem] leading-0 py-[60px]">Heading 2</h2>
        <h3 className="text-[#fafafa] text-[3.9rem] leading-0 py-[60px]">Heading 3</h3>
        <h4 className="text-[#fafafa] text-[3rem]
        leading-0 py-[60px]">Heading 4</h4>
        <h5 className="text-[#fafafa] text-[2.8rem] leading-0 py-[60px]">Heading 5</h5>
        <h6 className="text-[#fafafa] text-[2rem] leading-0 py-[60px]">Heading 6</h6>
      </div>


      {/* callouts section */}
      <div className="callout w-full px-[20rem] bg-[#11131d]">
        <div className="callout-content w-full pt-[5rem]">
          <h2 className="text-[#fafafa] text-[3rem] font-bold all-h">Callouts</h2>

          <p className="c-res  all-p-res text-[#fafafa] text-[1.2rem] pr-[30rem]">Ever find yourself wanting to add extra styling to important information in your posts? Well, now you can with callout cards. Each callout card can include an emoji, any length of text with styles and links, and a custom background color.</p>
        </div>

        <div className="callout-card w-full pt-[3rem]">
          <div className="call-card">
            <div className={`cl-crd bg-[#e147ae1c] w-[60%] rounded-3xl`}>
              <p className=" cll-crd-res text-[#fafafa] text-[1.2rem] p-8">
                👻
                <strong>Create your own platform on the web.</strong> Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.
              </p>
            </div>
          </div>

          <div className="call-card pt-[1rem]">
            <div className={`cl-crd bg-[#f0a50f21] w-[60%] rounded-3xl`}>
              <p className="text-[#fafafa] text-[1.1rem] p-8">
                👻
                <strong>Create your own platform on the web.</strong> Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.
              </p>
            </div>
          </div>

          <div className="call-card pt-[1rem]">
            <div className={`cl-crd bg-[#21ace81f] w-[60%] rounded-3xl`}>
              <p className="text-[#fafafa] text-[1.1rem] p-8">
                👻
                <strong>Create your own platform on the web.</strong> Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* quotes section */}
      <div className="quotes w-full px-[20rem] bg-[#11131d]">
        <div className="quotes-header pt-[3rem]">
          <h2 className="text-[#fafafa] text-[3rem] font-bold all-h">Quotes</h2>

          <p className="text-[#fafafa] text-[1.2rem] w-[60%] all-p-res q-p">
            You can make quotes stand out with two types of blockquote styles that can be applied directly in the editor.
          </p>
        </div>

        <div className=" q-2-res text-[#fafafa] text-[1.2rem] w-[60%]">
          <p className=" mt-5 border-l-2 border-[#7D29ff] pl-5 all-p-res">
            Ghost is a fully open source, adaptable platform for building and running a modern online publication. We power blogs, magazines and journalists from Zappos to Sky News.
          </p>
        </div>

        <p className="mt-5 text-[#fafafa] text-[1.2rem] all-p-res">And a second style that you can use for larger quotes:</p>
      </div>


      {/* ghost */}
      <div className="ghost w-full px-[20rem] bg-[#11131d]">
        <div className="ghost-header pt-[3rem] ">
          <h2 className="text-[#fafafa] text-[3rem] font-bold leading-15 all-h">Ghost is a fully open source, adaptable platform for building and running a modern online publication</h2>
        </div>
      </div>


      {/* bookmarks */}
      <div className="bookmarks w-full px-[20rem] bg-[#11131d]">
        <div className="bookmark-header pt-[5rem]">
          <h2 className="text-[#fafafa] text-[3rem] font-bold all-h">Bookmarks</h2>

          <p className="book-p-res text-[#fafafa] text-[1.1rem] w-[60%] all-p-res">
            When using a URL with the right meta information, it can show the page title, excerpt, author, publisher and even a preview image. This is a great way to share links from sites that have automatic embeds.
          </p>
        </div>

        <div className="bookmark-card">
          <div className="book-c pt-[3rem]">
            <BookmarkCard bookH={"Premium Ghost Themes by fueko"} bookP={"Find the premium Ghost themes that are easy-to-use with a creative touch. Each theme is carefully designed with a unique and modern design for any kind of ideas."} bookI={"https://fueko.net/content/images/2023/08/fueko-themes-1.jpg"} />
          </div>

          <div className="book-c pt-[1rem]">
            <BookmarkCard bookH={"Beautiful Free Images & Pictures | Unsplash"} bookP={"Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos."} bookI={"https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1646071206496-0d8288613824%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DMnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ3MzYxMjc3%26ixlib%3Drb-1.2.1%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D424%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fwordmark.png%26blend%3D000000"} />
          </div>
        </div>
      </div>


      {/* product */}
      <div className="product w-full px-[20rem] bg-[#11131d]">
        <div className="product-header pt-[5rem]">
          <h2 className="text-[#fafafa] text-[3rem] font-bold all-h">Products</h2>

          <p className="pro-res text-[#fafafa] text-[1.1rem] w-[60%] all-p-res">Display products beautifully with custom content including an image, description, button or rating, so you can add your favorite recommendations to any post.</p>
        </div>

        <div className="productCard w-full flex justify-center mt-10">
          <ProductCard />
        </div>
      </div>


      {/* image */}
      <div className="images w-full px-[20rem] bg-[#11131d]">
        <div className="images-header pt-[5rem]">
          <h2 className="text-[#fafafa] text-[3rem] font-bold all-h">Images</h2>

          <p className="img-res text-[#fafafa] text-[1.1rem] w-[60%] all-p-res">Once you start mixing text and image cards creatively, the whole narrative of the story changes. Suddenly, you are working in a new format. Once inserted you can blend images beautifully into your content at different sizes (normal, full, and wide) and add captions wherever needed.</p>
        </div>

        <div className="i-i w-full flex justify-center">
          <div className="i-res w-[60%] pt-[3rem]">
            <img className="rounded-3xl" src="https://eihei-dark.fueko.net/content/images/size/w1000/2023/11/mohamed-nohassi-tmq2rSAbVoY-unsplash.jpg" alt="" />

            <div className="iLink text-center mt-2">
              <p className="text-[#fafafa] text-[.9rem]">
                Photo by
                <Link to={"https://unsplash.com/@coopery"} className="px-2 underline">
                  Mohamed Nohassi
                </Link>
                /
                <Link to={"https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"} className="px-2 underline">
                  Unsplash
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* big-i */}
      <div className="big-i w-full h-screen bg-[#11131d]">
        <div className="big w-[100%] h-[100%] pt-10">
          <img className="w-[100%] h-[100%] object-cover " src="https://eihei-dark.fueko.net/content/images/2023/11/ant-rozetsky-KhmJnxGrlWM-unsplash.jpg" alt="" />
        </div>
        <div className="big-l text-center bg-[#11131d]">
          <p className="text-[#fafafa] text-[.9rem] pt-2">
            Photo by
            <Link to={"https://unsplash.com/@rozetsky?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"} className="px-2 underline">
              Ant Rozetsky
            </Link>
            /
            <Link to={"https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"} className="px-2 underline">
              Unsplash
            </Link>
          </p>
        </div>
      </div>

      {/* last img */}
      <div className="last-i w-full flex flex-col items-center bg-[#11131d]">
        <div className="last pt-[5rem] flex justify-center">
          <img className="w-[70%]" src="https://eihei-dark.fueko.net/content/images/size/w1600/2023/11/grigorii-shcheglov-r1CuXSuG3JA-unsplash.jpg" alt="" />
        </div>

        <div className="last-l">
          <p className="text-[#fafafa] text-[.9rem] pt-2">
            Photo by
            <Link to={"https://unsplash.com/@scheglovgr"} className="px-2 underline">
              Grigorii Shcheglov
            </Link>
            /
            <Link to={"https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit"} className="px-2 underline">
              Unsplash
            </Link>
          </p>
        </div>
      </div>


      {/* gallery */}
      <div className="gallery w-full px-[20rem] bg-[#11131d]">
        <div className="gallery-header pt-[5rem]">
          <h2 className="text-[#fafafa] text-[3rem] font-bold all-h">
            Gallery
          </h2>

          <p className="gall-res text-[#fafafa] text-[1.1rem] w-[60%] all-p-res">
            Ghost supports image galleries for up to 9 images at a time, all of which are responsively optimised and organised to look their best no matter how many images you add or remove.
          </p>
        </div>

        <div className="gallery-i mt-10 bg-[#11131d] rounded-3xl overflow-hidden">
          <div className="g-i flex justify-between  bg-[#11131d]">
            <img className="w-[32%] h-[500px] object-cover" src="https://eihei-dark.fueko.net/content/images/size/w1000/2023/11/marea-wellness-7axi7V3QhXE-unsplash.jpg" alt="" />
            <img className="w-[32%] h-[500px] object-cover" src="https://eihei-dark.fueko.net/content/images/size/w1000/2023/11/girl-with-red-hat-0AS8clTY4QQ-unsplash.jpg" alt="" />
            <img className="w-[32%] h-[500px] object-cover" src="https://eihei-dark.fueko.net/content/images/size/w1000/2023/11/delaney-van-m--3yyH2p6Q-unsplash.jpg" alt="" />
          </div>

          <div className="g-i mt-[25px] flex justify-between">
            <img className="w-[49%] h-[800px]" src="https://eihei-dark.fueko.net/content/images/size/w1000/2023/11/omid-armin-G_Qq7-esmys-unsplash.jpg" alt="" />
            <img className="w-[49%] h-[800px]" src="https://eihei-dark.fueko.net/content/images/size/w1000/2023/11/_-cecile-UaSA6VLPODs-unsplash.jpg" alt="" />
          </div>
        </div>
      </div>



      {/* header */}
      <div className="s-header w-full px-[20rem] bg-[#11131d]">
        <div className="s-header-head pt-[3rem]">
          <h2 className="text-[#fafafa] text-[3rem] font-bold all-h">
            Headers
          </h2>

          <p className="header-p-res text-[#fafafa] text-[1.1rem] w-[60%] all-p-res">
            Make a statement with bold section headers in your posts and pages. Insert a header card to add a full width divider that can include a title, subheading, accent color or image background, and a button.
          </p>
        </div>
      </div>

      {/* ghost */}
      <div className="ghost w-full bg-[#11131d] pt-[5rem]">
        <div className="ghost-c bg-[#ffc83f] w-full h-[70vh] flex justify-center items-center">
          <div className="ghost-content text-center">
            <h2 className="text-[#11131d] text-[4rem] font-bold all-h">
              What is Ghost?
            </h2>

            <p className=" g-res text-[#11131d] text-[1.3rem] px-[30rem] all-p-res">
              Ghost is a powerful app for professional publishers to create, share, and grow a business around their content. It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.
            </p>
            <div className="g-btn">
              <button className="bg-[#fafafa] text-[1.1rem] px-15 py-3 mt-10 rounded-3xl hover:opacity-[.90] duration-200">
                <Link to={"https://ghost.org/"}>
                  Try it out free
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* sound */}
      <div className="sound w-full h-[70vh] flex">
        <div className="sound-i w-[50%] h-[100%]">
          <img className="w-[100%] h-[100%] object-cover" src="https://eihei-dark.fueko.net/content/images/2023/11/Daigo.jpeg" alt="" />
        </div>

        <div className="sound-c w-[50%] h-[100%] bg-[#292cf9] flex flex-col items-center justify-center">
          <h2 className="s-res text-[#fafafa] text-[3rem] font-bold all-h">
            Sounds good? Let’s go to themes!
          </h2>

          <p className="s-p-res text-[#fafafa] text-center text-[1.2rem] px-[10rem]all-p-res">
            Themes for any kind of ideas. Each theme is carefully designed with a creative touch, simple to use and easy customize.
          </p>

          <div className="g-btn">
            <button className="bg-[#fafafa] text-[1.1rem] px-15 py-3 mt-10 rounded-3xl hover:opacity-[.90] duration-200">
              <Link to={"https://fueko.net/"}>
                See themes by fueko
              </Link>
            </button>
          </div>
        </div>
      </div>



      {/* toggles */}
      <div className="toggles w-full bg-[#11131d] px-[30rem]">
        <div className="toggles-header pt-[5rem]">
          <h2 className="text-[#fafafa] text-[3rem] font-bold all-h">
            Toggles
          </h2>

          <p className="togg-p-res text-[#fafafa] text-[1.1rem] w-[80%] all-p-res">
            Use the Toggle card to create collapsible sections of text in your posts and pages. Great for creating distinct sections in your content, or adding an FAQ section.
          </p>
        </div>
      </div>



      {/* link */}
      <div className="highlighting w-full bg-[#11131d] px-[30rem]">
        <div className="toggles-header pt-[3rem]">
          <h2 className="text-[#fafafa] text-[3rem] font-bold all-h">
            Highlighting
          </h2>

          <p className="high-res-p text-[#fafafa] text-[1.1rem] w-[80%] all-p-res">
            <span className="text-[#11131d] bg-yellow-400">Highlighting text</span> on a web page can help bring important information immediately to the reader attention. When creating a highlighting text, all you need to do is add a == before and after your text in <strong>Markdown card.</strong>
          </p>
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
  );
};

export default SystemGuide;
