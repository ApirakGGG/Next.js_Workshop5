import { FaChevronLeft } from "react-icons/fa6";
import { CiSettings, CiCircleCheck } from "react-icons/ci";
import Image from "next/image";
export default async function Profile() {
  return (
    <main>
      <section>
        <div className="flex justify-between px-8 py-5 items-center">
          <button>
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <div className="items-center"> Your Profile</div>
          <button>
            <CiSettings className="w-8 h-8" />
          </button>
        </div>
      </section>
      <div className="flex justify-center">
        <div className="items-center">
          {/* profile image */}
          <Image
            src={"/asset/js.png"}
            alt="profile"
            width={100}
            height={100}
            className="size-40 object-cover overflow-hidden rounded-full items-center  "
          />
          {/* username */}
          <div className="mt-3 gap-2 flex items-center">
            <p className=" font-bold"> Apirak jansawang</p>
            <CiCircleCheck className="w-5 h-5 items-center " />
          </div>
        </div>
      </div>
    </main>
  );
}

// 43:00
