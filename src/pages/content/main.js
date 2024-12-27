import { useRouter } from "next/router";
import Image from "next/image";
import Highlighter from "react-highlight-words";
import Arrowleft from "../../../svgs/arrow";
import Arrowdown from "../../../svgs/arrowdown";
import Hero from "./hero";
import Hero2 from "./hero2";
import { useTranslation } from "react-i18next";

export default function Main() {
  const router = useRouter();
  const { t } = useTranslation();
  const steps = [
    { src: "/ivf-1.png", label: t("main.steps.0") },
    { src: "/ivf-2.png", label: t("main.steps.1") },
    { src: "/ivf-3.png", label: t("main.steps.2") },
    { src: "/ivf-4.png", label: t("main.steps.3") },
    { src: "/ivf-5.png", label: t("main.steps.4") },
    { src: "/ivf-6.png", label: t("main.steps.5") },
    { src: "/ivf-7.png", label: t("main.steps.6") },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <Hero2></Hero2>
      {/* Hero Image Section */}
      {/* Steps Section */}
      <div className="block xllg:hidden bg-blue-50 py-8 sm:py-16 w-full">
        <div className="flex flex-col items-center w-full">
          {/* Title */}
          <h2 className="text-gray-800 font-bold text-3xl sm:text-5xl mb-8 sm:mb-16 text-left px-4">
            <Highlighter
              highlightClassName="bg-blue-500 text-white  px-1 md:px-2  "
              searchWords={["Sismedikal"]}
              autoEscape={true}
              textToHighlight={t("main.highlight")}
            />
          </h2>

          {/* Steps */}
          <div className="block md:flex  justify-center flex-wrap gap-2 px-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col text-center text-gray-700 items-center"
              >
                {/* Step Image */}
                <div className="flex  items-center">
                  <div className="hidden 2xl:flex">
                    <Image
                      src={step.src}
                      alt={step.label}
                      width={160}
                      height={160}
                    />
                  </div>
                  <div className="flex 2xl:hidden">
                    <Image
                      src={step.src}
                      alt={step.label}
                      width={122}
                      height={122}
                    />
                  </div>
                  <div className="hidden md:flex">
                    {index < steps.length - 1 && (
                      <div className="ml-2  w-12">
                        <Arrowleft />
                      </div>
                    )}{" "}
                  </div>
                </div>

                {/* Step Label */}
                <div className="flex justify-left w-full">
                  <div className="flex justify-center  w-[122px] 2xl:w-[160px]  font-semibold mt-2">
                    {step.label}
                  </div>{" "}
                </div>
                {/* phone mode arrow */}
                <div className="flex md:hidden">
                  {index < steps.length - 1 && (
                    <div className="  w-12">
                      <Arrowdown />
                    </div>
                  )}{" "}
                </div>

                {/* Arrow Icon (except for the last step) */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-blue-100 py-8 sm:py-16 w-full">
        <div className="flex flex-col px-1 sm:px-8 lg:px-16 xl:px-48 items-center w-full">
          <div className="hidden md:flex  justify-center w-full text-right items-top space-x-4 md:space-x-12">
            <div>
              <div className="text-5xl text-gray-800 mb-1 sm:mb-4 font-bold">
                {t("main.ewitness.title")}
              </div>

              <div className="space-y-2 text-2xl text-gray-700 ml-1">
                <div className=" ">{t("main.ewitness.details.0")}</div>
                <div className=" ">{t("main.ewitness.details.1")}</div>
                <div className=" ">{t("main.ewitness.details.2")}</div>
                <div className=" ">{t("main.ewitness.details.3")}</div>
              </div>
            </div>
            <div className="items-center flex">
              <div className="flex flex-shrink-0 ">
                <Image
                  src={"/ewitness2.png"}
                  alt={"lazer"}
                  width={250}
                  height={250}
                  layout="intrinsic" // Ensures the image does not shrink
                  className="object-contain "
                />
              </div>
              <div className="xl:flex hidden flex-shrink-0  mt-[7px] ml-4">
                <Image
                  src={"/hero_images/ewitness.jpg"}
                  alt={"lazer"}
                  width={250}
                  height={250}
                  layout="intrinsic" // Ensures the image does not shrink
                  className="object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center md:hidden justify-center w-full items-top overflow-x-auto whitespace-nowrap ">
            <div className="flex w-full justify-center text-center">
              <div className="flex-col justify-center space-x-4">
                {" "}
                <div className="flex justify-center flex-shrink-0 mb-4">
                  <Image
                    src={"/ewitness2.png"}
                    alt={"lazer"}
                    width={200}
                    height={200}
                    layout="intrinsic" // Ensures the image does not shrink
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl text-gray-800   font-bold">
                    {t("main.ewitness.title")}
                  </div>

                  <div className=" text-xl text-gray-700 ml-1">
                    <div className=" ">{t("main.ewitness.details.0")}</div>
                    <div className=" ">{t("main.ewitness.details.1")}</div>
                    <div className=" ">{t("main.ewitness.details.2")}</div>
                    <div className=" ">{t("main.ewitness.details.3")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-59 py-8 sm:py-16 w-full">
        <div className="flex flex-col px-1 sm:px-8 lg:px-16 xl:px-48 items-center w-full">
          <div className="hidden md:flex justify-center w-full items-top space-x-4 md:space-x-12">
            <div className="hidden lg:flex flex-shrink-0">
              <Image
                src={"/octax_parca.png"}
                alt={"lazer"}
                width={300}
                height={300}
                layout="intrinsic" // Ensures the image does not shrink
                className="object-contain"
              />
            </div>
            <div className="flex flex-shrink-0">
              <Image
                src={"/octaxlazer.png"}
                alt={"lazer"}
                width={200}
                height={200}
                layout="intrinsic" // Ensures the image does not shrink
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-5xl text-gray-800 mb-1 sm:mb-4 font-bold">
                {t("main.octax.title")}
              </div>
              <div className="space-y-2 text-2xl text-gray-700 ml-1">
                <div className=" "> {t("main.octax.details.0")}</div>
                <div className=" "> {t("main.octax.details.1")}</div>
                <div className=" "> {t("main.octax.details.2")}</div>
                <div className=" "> {t("main.octax.details.3")} </div>
              </div>
            </div>
          </div>
          <div className="flex items-center md:hidden justify-center w-full items-top overflow-x-auto whitespace-nowrap ">
            <div className="flex-col justify-left xslg:justify-center text-center space-x-4">
              {" "}
              <div className="flex justify-center flex-shrink-0 mb-4">
                <Image
                  src={"/octaxlazer.png"}
                  alt={"lazer"}
                  width={200}
                  height={200}
                  layout="intrinsic" // Ensures the image does not shrink
                  className="object-contain"
                />
              </div>
              <div>
                <div className="sm:text-4xl text-3xl text-gray-800   font-bold">
                  {t("main.octax.title")}
                </div>
                <div className="space-y-0 sm:text-2xl text-xl text-gray-700 ">
                  <div className=" "> {t("main.octax.details.0")}</div>
                  <div className=" "> {t("main.octax.details.1")}</div>
                  <div className=" "> {t("main.octax.details.2")}</div>
                  <div className=" "> {t("main.octax.details.3")} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 py-8 sm:py-16 w-full">
        <div className="flex flex-col px-1 sm:px-8 lg:px-16 xl:px-48 items-center w-full">
          <div className="hidden md:flex  justify-center w-full text-right items-top space-x-4 md:space-x-12">
            <div>
              <div className="text-5xl text-gray-800 mb-1 sm:mb-4 font-bold">
                {t("main.embryoscope.title1")}
              </div>
              <div className="text-5xl text-gray-800 mb-1 sm:mb-4 font-bold">
                {t("main.embryoscope.title2")}
              </div>
              <div className="space-y-2 text-2xl text-gray-700 ml-1">
                <div className=" "> {t("main.embryoscope.details.0")}</div>
                <div className=" "> {t("main.embryoscope.details.1")}</div>
                <div className=" "> {t("main.embryoscope.details.2")}</div>
                <div className=" "> {t("main.embryoscope.details.3")} </div>
              </div>
            </div>
            <div className="items-start flex">
              <div className="flex flex-shrink-0 ">
                <Image
                  src={"/embryoscope.png"}
                  alt={"lazer"}
                  width={300}
                  height={300}
                  layout="intrinsic" // Ensures the image does not shrink
                  className="object-contain"
                />
              </div>
              <div className="xl:flex hidden flex-shrink-0  mt-[7px] ml-4">
                <Image
                  src={"/embryoscope1.png"}
                  alt={"lazer"}
                  width={290}
                  height={290}
                  layout="intrinsic" // Ensures the image does not shrink
                  className="object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center md:hidden justify-center w-full items-top overflow-x-auto whitespace-nowrap ">
            <div className="flex w-full justify-center text-center">
              <div className="flex-col justify-center space-x-4">
                {" "}
                <div className="flex justify-center flex-shrink-0 mb-4">
                  <Image
                    src={"/embryoscope.png"}
                    alt={"lazer"}
                    width={200}
                    height={200}
                    layout="intrinsic" // Ensures the image does not shrink
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl text-gray-800   font-bold">
                    {t("main.embryoscope.title1")}
                  </div>
                  <div className="text-3xl sm:text-4xl text-gray-800  font-bold">
                    {t("main.embryoscope.title2")}
                  </div>
                  <div className=" text-xl text-gray-700 ml-1">
                    <div className=" "> {t("main.embryoscope.details.0")}</div>
                    <div className=" "> {t("main.embryoscope.details.1")}</div>
                    <div className=" "> {t("main.embryoscope.details.2")}</div>
                    <div className=" "> {t("main.embryoscope.details.3")} </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
