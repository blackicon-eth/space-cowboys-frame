import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmUBYmmRJ13ndJapNWmG1XraPVsDv5VeCChfmu9qHAQTQi/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Metal Slug Prisoner",
  description: "A Frame where you can set the MS prisoner free",
  openGraph: {
    title: "Metal Slug Prisoner",
    description: "A Frame where you can set the MS prisoner free",
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmUBYmmRJ13ndJapNWmG1XraPVsDv5VeCChfmu9qHAQTQi/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Metal Slug Prisoner</h1>
    </>
  );
}
