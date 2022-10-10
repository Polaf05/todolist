import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

export default function Section1() {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Traindings</h1>
        {Slide()}
      </div>
    </section>
  );
}

const Slide = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image src={"/images/img1.jpg"} width={600} height={600} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              Business, Travel
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">July 3,2022</a>
          </Link>
        </div>
        <div className="title">
          <Link href={"#"}>
            <a className="text-3xl md:text-6xl hover:text-gray-600 font-bold">
              Your most unhappy customers are your greates assets.
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even by all means, always make them regret coming to your store. Make
          their lives misreable as much as posible with your best and brightess
          product! #staytoxic!
        </p>
        <Author></Author>
      </div>
    </div>
  );
};
