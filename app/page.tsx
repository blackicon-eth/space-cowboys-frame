import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmR5nbUdQN5H1s28Tuuk62KAeFfD6eq5sSiXbR6thqUg7q/0.jpg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "A slightly different Cosmic Cowboys",
  description: "Life is but a dream...",
  openGraph: {
    title: "A slightly different Cosmic Cowboys",
    description: "Life is but a dream...",
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmR5nbUdQN5H1s28Tuuk62KAeFfD6eq5sSiXbR6thqUg7q/0.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>See you Space Cowboy...</h1>
    </>
  );
}
