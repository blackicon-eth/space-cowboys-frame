import { getFrameHtmlResponse } from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  const idAsNumber = parseInt(id);

  const nextId = idAsNumber + 1;

  if (idAsNumber === 3) {
    return new NextResponse(
      getFrameHtmlResponse({
        buttons: [
          {
            label: "See you Space Cowboy...",
            action: "post_redirect",
          },
        ],
        image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmR5nbUdQN5H1s28Tuuk62KAeFfD6eq5sSiXbR6thqUg7q/3.jpg`,
        post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/end`,
      })
    );
  } else {
    return new NextResponse(
      getFrameHtmlResponse({
        buttons: [
          {
            label: "Next one",
            action: "post",
          },
        ],
        image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmR5nbUdQN5H1s28Tuuk62KAeFfD6eq5sSiXbR6thqUg7q/${id}.jpg`,
        post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}`,
      })
    );
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmR5nbUdQN5H1s28Tuuk62KAeFfD6eq5sSiXbR6thqUg7q/${id}.jpg" />
    <meta property="fc:frame:button:1" content="Next one" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
