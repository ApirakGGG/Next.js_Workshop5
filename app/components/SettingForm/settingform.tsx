"use client";
import { useEffect, useRef, useState } from "react";
import { TextField } from "@radix-ui/themes";
import { Flex, TextArea, Button } from "@radix-ui/themes";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UpdateProfile } from "@/app/action/action";
import { Profile } from "@prisma/client";
import axios from "axios";

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
  // ref input file for button
  const inputfileButton = () => {
    fileInput.current?.click();
  };

  const [file, setFile] = useState<File>();
  const [profileurl, setProfileUrl] = useState("");
  const [uploading, setUpLoading] = useState(false);
  // console.log(profileurl);
  
  //2:25:10
  useEffect(() => {
    const uploadfile = async () => {
      if (file) {
        try {
          const data = new FormData();
          data.set("file", file);
          setUpLoading(true);
          const response = await axios.post(`/api/uploadsfiles`, data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          // เก็บUrl เพื่อดึง image ที่อยู่บน clound
          const ipfsUrl = await response.data
          setProfileUrl(ipfsUrl);
          console.log("imgUrl", ipfsUrl);
          
        } catch (err) {
          console.error("err", err);
        } finally {
          setUpLoading(false);
        }
      }
    };
    uploadfile();
  }, [file]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };
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
        <input type="hidden" name="profileurl" id={profileurl} />
        <Flex direction={"column"} gap={"3"}>
          {/* update profile */}
          <div className="flex justify-center items-center ">
            {profileurl ? (
              // show profile when change profile
              <Image
                src={profileurl}
                alt="profile"
                width={100}
                height={100}
                className="size-30 rounded-full border"
              />
            ) : (
              // current profile
              <Image
                src={profile.avarta as string}
                alt="profile"
                width={100}
                height={100}
                className="rounded-full border-2 object-cover"
              />
            )}
          </div>
          {/* change profile */}
          <div className="flex justify-center">
            <input
              type="file"
              ref={fileInput}
              style={{ display: "none" }}
              onChange={handleChange}
            />
            <Button
              onClick={inputfileButton}
              type="button"
              color="orange"
              variant="soft"
              radius="large"
              size={"2"}
              disabled={uploading}
            >
              <IoCloudUploadOutline className="h-5 w-5" />
              {uploading ? "uploading" : "upload"}
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
          <Button
            color="indigo"
            radius="large"
            size={"4"}
            className="cursor-pointer"
          >
            Update
          </Button>
        </Flex>
      </form>
    </>
  );
}
