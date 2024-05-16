import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white my-20">
      <div className="bg-opacity-60 pt-10 bg-black">
        <SectionTitle
          subHeading={"Check It Out"}
          heading={"From Our Menu"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center pt-12 pb-20 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              atque eos vel voluptates quaerat asperiores ab molestiae quas
              fugit doloremque eum delectus laudantium ratione repellat cum
              placeat est maxime saepe molestias! Ab nihil dolore ex aut culpa
              enim, omnis consequatur doloribus. Totam accusantium ipsa labore
              tempore porro aliquam laboriosam blanditiis.
            </p>
            <button className="btn border-0 rounded-none border-b-4 btn-outline">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
