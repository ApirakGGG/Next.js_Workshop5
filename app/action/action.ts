'use server'
import {prisma} from "@/utils/db"
export async function UpdateProfile(form: FormData, session: string) {
    const newUserDataInfo = {
      // create from client
      username: (form.get("username") as string) || "",
      name: (form.get("name") as string) || "",
      subtitle: (form.get("subtitle") as string) || "",
      bio: (form.get("bio") as string) || "",
    };
    await prisma.profile.upsert({
      where: {
        email: session,
      },
      // update
      update:
        // update to newuserdatainfo
        newUserDataInfo,
      //create
      create: {
        email: session,
        // clone object จาก newuserdatainfo
        ...newUserDataInfo,
      },
    });
}