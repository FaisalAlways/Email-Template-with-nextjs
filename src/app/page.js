import Image from "next/image";
import Hero from "../../public/img/Hero.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <table className="max-w-[600px] mx-auto bg-white border">
        <tr>
          <td>
            <h1 className="text-[50px] text-[#171046] font-bold text-center pt-6">
              Welcome!
            </h1>
          </td>
        </tr>

        <tr>
          <td className="flex justify-center mt-6">
            <Image
              alt="hero"
              src={Hero}
              className="object-cover w-[300px] h-[300px]"
            />
          </td>
        </tr>
        <tr>
          <td className="pt-10 flex flex-col px-5 gap-10 mb-14">
            <p className="text-[22px] text-[#868686] text-center">
              We're excited to have you get started! First you need to confirm
              your account. Just click the button below.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#181147] text-base w-[320px] h-[56px] text-white">
                Confirm Your Account
              </button>
            </div>
            <p className="text-base text-[#868686]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              voluptate velit esse cillum dolore eu fugiat nulla pariatur enim
              ad minim veniam.
            </p>
            <p className="text-base text-[#868686]">
              If you have any questions. Please feel free to inform - We're
              always ready to help out.
            </p>

            <td>
              <p className="text-lg text-[#868686]">Cheers,</p>
              <p className="text-lg text-[#868686] font-bold">The Team Name.</p>
            </td>
          </td>
        </tr>

        <tr className="bg-[#181147]">
          <td className="py-10">
            <p className="text-4xl text-center text-white border-b-[3px] border-b-white pb-5 w-[380px] mx-auto">
              Get In Touch
            </p>
            <td className="flex justify-center gap-3 mt-4 mb-5">
              <FaLinkedin className="text-white w-[30px] h-[30px]" />
              <FaSquareTwitter className="text-white w-[30px] h-[30px]" />
              <FaSkype className="text-white w-[30px] h-[30px]" />
              <FaSquareInstagram className="text-white w-[30px] h-[30px]" />
            </td>
            <p className="text-base text-white px-5">
              If you have questions regarding your Data, please visit our
              Privacy Policy
            </p>
            <p className="text-base text-white px-5">
              Want to change how you receive these emails?
            </p>
            <p className="text-base text-white px-5">
              You can update your preferences or unsubscribe from this list.
            </p>
          </td>
        </tr>
        <tr>
          <td className="bg-[#f7d845]">
            <p className="text-sm text-center py-4">
              © 20XX Company. All Rights Reserved.
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
