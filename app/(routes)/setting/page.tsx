import { TextField } from "@radix-ui/themes";
import { Flex, TextArea, Button } from "@radix-ui/themes";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import Link from "next/link";

export default async function Setting() {
  return (
    <>
      <div className="mx-auto max-w-max-w-5xl md:max-w-3xl mt-5">
        <button className="mb-10" >
          <Link href={"/profile"} className="flex space-x-2">
            <FaChevronLeft className="w-5 h-5" />
            <p className="font-bold hover:underline">back</p>
          </Link>
        </button>
        <form action="">
          <Flex direction={"column"} gap={"3"}>
            <div className="flex justify-center items-center ">
              <Image
                src={"/asset/js.png"}
                alt="profile"
                width={100}
                height={100}
                className="size-30 rounded-full border"
              />
            </div>
            <div className="flex justify-center">
              <Button color="orange" variant="soft" radius="large" size={"2"}>
                <IoCloudUploadOutline className="h-5 w-5" />
                Change Profile
              </Button>
            </div>

            <p className=" text-lg">Username</p>
            <TextField.Root
              radius="large"
              size={"3"}
              name="username"
              placeholder="Enter your new username"
            />
            <p className=" text-lg">Name</p>
            <TextField.Root
              radius="large"
              size={"3"}
              name="name"
              placeholder="Enter your new name"
            />
            <p className=" text-lg">Subtitle</p>
            <TextField.Root
              radius="large"
              size={"3"}
              name="subtitle"
              placeholder="Enter your subtitle"
            />
            <p className=" text-lg">Bio</p>
            <TextArea
              radius="large"
              size={"3"}
              name="bio"
              placeholder="Enter your bio"
            />
            <Button color="indigo" radius="large" size={"4"}>
              Update Profile
            </Button>
          </Flex>
        </form>
      </div>
    </>
  );
}
