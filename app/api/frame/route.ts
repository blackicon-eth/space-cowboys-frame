import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  const idAsNumber = parseInt(id);

  const nextId = idAsNumber + 1;

  if (idAsNumber === 3) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 3</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmR5nbUdQN5H1s28Tuuk62KAeFfD6eq5sSiXbR6thqUg7q/3.jpg" />
    <meta property="fc:frame:button:1" content="See you Space Cowboy..." />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="https://www.youtube.com/watch?v=Ru_H5PiyfSA" />
  </head></html>`);
  } else {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmR5nbUdQN5H1s28Tuuk62KAeFfD6eq5sSiXbR6thqUg7q/${id}.jpg" />
    <meta property="fc:frame:button:1" content="Next picture" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
