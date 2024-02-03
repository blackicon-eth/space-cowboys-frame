import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
  const data = await req.json();
  console.log(data);
  const buttonId = data.untrustedData.buttonIndex;

  let path: string;
  if (buttonId === 1) {
    path = "spacecowboys";
  } else {
    path = "";
  }

  return new NextResponse(null, {
    headers: { Location: `${process.env.NEXT_PUBLIC_BASE_URL}/${path}` },
    status: 302,
  });
}

export const dynamic = "force-dynamic";
