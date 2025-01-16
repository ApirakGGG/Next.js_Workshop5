import { pinata } from "@/utils/config";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};
export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json(
        { error: "Incalid file format" },
        { status: 400 }
      );
    }

    const uploadData = await pinata.upload.file(file);
    const url = await pinata.gateways.convert(uploadData.IpfsHash);
    return NextResponse.json(url, { status: 200 });
  } catch (err) {
    console.error("err", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
