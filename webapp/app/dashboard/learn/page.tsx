
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "../../../components/DefaultLayout";
import React from "react";
import { MdOutlineReadMore } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "E-learning materials",
  description: "This is the page for the Kahawa Yetu E-learning page",
};

const Elearning = () => {
  return (
    <DefaultLayout>
            
      <section className="grid min-h-screen p-8 place-items-center">
        <div className="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2">
          <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
              <img
                src="https://bucket.material-tailwind.com/magic-ai/06b38f84f9669f766048c469ce861b81880378273a11ae9badaedfc32868ef44.jpg"
                alt="Revolutionizing Our Production Process"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 px-2 sm:pr-6 sm:pl-4">
              <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4">
                Technology
              </p>
              <a
                href="#"
                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
              >
                Revolutionizing Our Production Process
              </a>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
                Learn how our recent investment in new technology has
                revolutionized our production process, leading to improved
                efficiency and product quality.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://bucket.material-tailwind.com/magic-ai/6b1c5941d417a2a32baee89c2f3d1975d7d4fb81e486ed43dc1082ac54b0658b.jpg"
                  className="inline-block relative object-cover object-center !rounded-full w-12 h-12 "
                />
                <div>
                  <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5">
                    John Doe
                  </p>
                  <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">
                    2022-08-15
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
              <img
                src="https://bucket.material-tailwind.com/magic-ai/e7aa235a7bc5f504db1c66e27ece08f8118b1da6b21c013500391afcd572cf7d.jpg"
                alt="Expanding Our Service Network"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 px-2 sm:pr-6 sm:pl-4">
              <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4">
                Expansion
              </p>
              <a
                href="#"
                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
              >
                Expanding Our Service Network
              </a>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
                Discover how our expansion investment has allowed us to enhance
                our service network, providing better support and customer
                experience.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://bucket.material-tailwind.com/magic-ai/16d71aaeda38d7aea4412875984357949ff12e7f2c502bb20c4c1bcf6c661607.jpg"
                  className="inline-block relative object-cover object-center  w-12 h-12 rounded-lg"
                />
                <div>
                  <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5">
                    Jane Smith
                  </p>
                  <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">
                    2022-09-02
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">
              <img
                src="https://bucket.material-tailwind.com/magic-ai/e7aa235a7bc5f504db1c66e27ece08f8118b1da6b21c013500391afcd572cf7d.jpg"
                alt="Expanding Our Service Network"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 px-2 sm:pr-6 sm:pl-4">
              <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4">
                Expansion
              </p>
              <a
                href="#"
                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
              >
                Expanding Our Service Network
              </a>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
                Discover how our expansion investment has allowed us to enhance
                our service network, providing better support and customer
                experience.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://bucket.material-tailwind.com/magic-ai/16d71aaeda38d7aea4412875984357949ff12e7f2c502bb20c4c1bcf6c661607.jpg"
                  className="inline-block relative object-cover object-center  w-12 h-12 rounded-lg"
                />
                <div>
                  <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5">
                    Jane Smith
                  </p>
                  <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">
                    2022-09-02
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-1/3">
            <div className="flex px-3 py-3">
              <div className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <a href="#!">
                  <video controls className="w-full rounded-t-lg">
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4"/>
                    <source src="movie.ogg" type="video/ogg"/>
                    Your browser does not support the video tag.
                  </video>
                </a>
                <div className="px-6 py-4">
                  <div className="font-bold text-darkgreen text-xl mb-2">The Coldest Sunset</div>
                  <p className="text-sidegreen text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                    perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-darkgreen mr-2">#photography</span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-darkgreen mr-2">#travel</span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-darkgreen">#winter</span>
                </div>
                <div className="absolute bottom-4 right-4 z-20">
                  <FaPlayCircle className="fill-red" size={24} />
                </div>
              </div>
    </div>
    </div>


        </div>
      </section>
      
    </DefaultLayout>
  );
};

export default Elearning;
