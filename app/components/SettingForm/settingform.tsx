"use client";
import { useRef } from "react";
import { TextField } from "@radix-ui/themes";
import { Flex, TextArea, Button } from "@radix-ui/themes";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UpdateProfile } from "@/app/action/action";
import { Profile } from "@prisma/client";
export default function SettingForm({
  session,
  profile,
}: {
  session: string;
  profile: Profile; // profile from pisma
}) {
  const router = useRouter();
  //for input files change profile
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <>
      {/* update form data */}
      <form
        action={async (form: FormData) => {
          await UpdateProfile(form, session);
          // before update profile
          router.push("/profile");
          router.refresh();
        }}
      >
        <Flex direction={"column"} gap={"3"}>
          {/* update profile */}
          <div className="flex justify-center items-center ">
            <Image
              src={"/asset/js.png"}
              alt="profile"
              width={100}
              height={100}
              id="profile"
              className="size-30 rounded-full border"
            />
          </div>
          {/* change profile */}
          <div className="flex justify-center">
            <input type="file" ref={fileInput} />
            <Button
              onClick={() => fileInput.current?.files}
              type="button"
              color="orange"
              variant="soft"
              radius="large"
              size={"2"}
            >
              <IoCloudUploadOutline className="h-5 w-5" />
              Change Profile
            </Button>
          </div>

          <p className=" text-lg">Username</p>
          <TextField.Root
            radius="large"
            size={"3"}
            name="username"
            defaultValue={profile.username as string}
            placeholder="Enter your new username"
          />
          <p className=" text-lg">Name</p>
          <TextField.Root
            radius="large"
            size={"3"}
            name="name"
            defaultValue={profile.name as string}
            placeholder="Enter your new name"
          />
          <p className=" text-lg">Subtitle</p>
          <TextField.Root
            radius="large"
            size={"3"}
            name="subtitle"
            defaultValue={profile.subtitle as string}
            placeholder="Enter your subtitle"
          />
          <p className=" text-lg">Bio</p>
          <TextArea
            radius="large"
            size={"3"}
            name="bio"
            defaultValue={profile.bio as string}
            placeholder="Enter your bio"
          />
          <Button color="indigo" radius="large" size={"4"}>
            Update Profile
          </Button>
        </Flex>
      </form>
    </>
  );
}
