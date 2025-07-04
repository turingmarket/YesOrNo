"use client";
import { Flex, Text, Inset, Card, Box, Avatar, Button } from "@radix-ui/themes";
import { MarketMeta } from './Meta'
import { useState } from "react";
import sdk from "@farcaster/frame-sdk";
import { useMiniApp } from "@neynar/react";

type HeaderProps = {
  neynarUser?: {
    fid: number;
    score: number;
  } | null;
};

export function MarketList({ neynarUser }: HeaderProps) {
  const { context } = useMiniApp();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [hasClickedPfp, setHasClickedPfp] = useState(false);

  return (
		<Box maxWidth="full">
      <Card size="3">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src="https://mallbucket-pub.s3.us-west-1.amazonaws.com/f9c01be5f647a8f46835e74839d21bfab7a47c2bf64cd29e2887186684ce7ef5.png"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Flex gap="6" direction="column">
          <Text as="div" size="2" weight="bold">
            Trump mobile release by August?
          </Text>
          <MarketMeta />
          <Flex gap="3" justify="between" >
            <Button color="green" radius="large" size="4">
              Yes
            </Button>
            <Button color="red" radius="large" size="4">
              No
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Box>
	);
}
