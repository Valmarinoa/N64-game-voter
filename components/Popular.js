import Image from "next/image";

function Popular() {
  return (
    <center>
      <div className="grid grid-cols-3 md:grid-cols-7 md:px-2 items-center mt-40 md:mt-20">
        <div className="h-40 md:col-start-3 lg:mt-20 rounded-lg border border-white dropShadow-xl hover:scale-105 hover:-translate-x-6 -rotate-12 transition transform ease-in-out duration-300 ">
          <Image
            src="https://www.businessinsider.nl/wp-content/uploads/2016/09/305cddcf2ad1e57389a5c1029987ed366974f3be-800x558.jpg"
            layout="fill"
            objectFit="cover"
            className="h-64 pt-2 object-cover hover:z-0 rounded-lg transition transform ease-in-out duration-300"
          />
        </div>
        <div className="h-52 lg:mt-10 rounded-lg border border-white z-10 dropShadow-xl hover:scale-105 transition transform ease-in-out duration-300 ">
          <Image
            src="https://www.businessinsider.nl/wp-content/uploads/2016/09/85811fcae4fe734c517c07b6e177be2171779d9f-800x555.jpg"
            layout="fill"
            objectFit="cover"
            className="h-64 w-64 pt-2 object-cover hover:z-0 rounded-lg transition transform ease-in-out duration-300"
          />
        </div>
        <div className="h-40 lg:mt-20 rounded-lg border border-white -right-20 dropShadow-xl hover:scale-105 hover:translate-x-6 rotate-12 transition transform ease-in-out duration-300 ">
          <Image
            src="https://www.businessinsider.nl/wp-content/uploads/2016/09/49242865468e758a572a4cf39c1185231e8d811f-800x581.jpg"
            layout="fill"
            objectFit="cover"
            className="h-5 pt-2 object-cover hover:z-0 rounded-lg transition transform ease-in-out duration-300"
          />
        </div>
      </div>
    </center>
  );
}

export default Popular;
