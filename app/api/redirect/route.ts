import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();
  console.log(data);
  const buttonId = data.untrustedData.buttonIndex;

  let path: string;
  if (buttonId === 1) {
    path = "spacecowboys";
  } else {
    path = "";
  }
  const location = `https://space-cowboys-frame.vercel.app/${path}`;
  console.log(location);
  return NextResponse.redirect(location, { status: 302 });
}

export async function POST(req: NextRequest): Promise<Response> {
  console.log("Managing POST call...");
  return getResponse(req);
}

export const dynamic = "force-dynamic";
