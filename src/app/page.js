import Image from "next/image";
import Hero from "../../public/img/Hero.png";
import { FaLinkedin, FaTwitterSquare, FaSkype, FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <table className="max-w-lg mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
        <tbody>
          <tr>
            <td className="text-center pt-6">
              <h1 className="text-5xl text-[#171046] font-bold">Welcome!</h1>
            </td>
          </tr>
          <tr>
            <td className="flex justify-center mt-6">
              <Image
                alt="hero"
                src={Hero}
                className="object-cover rounded-full w-[250px] h-[250px] shadow-md"
              />
            </td>
          </tr>
          <tr>
            <td className="pt-10 flex flex-col px-5 gap-6 mb-14">
              <p className="text-lg text-[#868686] text-center">
                We're excited to have you get started! First, confirm your account by clicking the button below.
              </p>
              <div className="flex justify-center">
                <button className="bg-[#181147] text-base w-[320px] h-[56px] text-white rounded-lg shadow hover:bg-[#232c56] transition duration-200">
                  Confirm Your Account
                </button>
              </div>
              <p className="text-base text-[#868686] text-center">
                If you have any questions, please feel free to reach out - we're always here to help!
              </p>
              <p className="text-lg text-[#868686]">Cheers,</p>
              <p className="text-lg text-[#868686] font-bold">The Team Name.</p>
            </td>
          </tr>
          <tr className="bg-[#181147]">
            <td className="py-10">
              <p className="text-3xl text-center text-white font-semibold border-b-[3px] border-b-white pb-5 w-[380px] mx-auto">
                Get In Touch
              </p>
              <div className="flex justify-center gap-4 mt-4 mb-5">
                <FaLinkedin className="text-white w-8 h-8 hover:text-gray-300 transition duration-200" />
                <FaTwitterSquare className="text-white w-8 h-8 hover:text-gray-300 transition duration-200" />
                <FaSkype className="text-white w-8 h-8 hover:text-gray-300 transition duration-200" />
                <FaInstagramSquare className="text-white w-8 h-8 hover:text-gray-300 transition duration-200" />
              </div>
              <p className="text-base text-white text-center px-5">
                Questions regarding your data? Visit our Privacy Policy.
                <br />
                Want to change how you receive these emails? Update your preferences or unsubscribe.
              </p>
            </td>
          </tr>
          <tr>
            <td className="bg-[#f7d845] rounded-b-lg text-center py-4">
              <p className="text-sm">© 2024 Future DevOps. All rights reserved.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
