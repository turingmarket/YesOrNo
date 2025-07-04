"use client";
import sdk from "@farcaster/frame-sdk";
import { Flex, Text, Inset, Card, Box, Avatar, Button } from "@radix-ui/themes";
import { MarketMeta } from './Meta';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
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
  const [markets, setMarkets] = useState([]);

  const  queryParams = {
    pageNo: 1,
    pageSize: 12,
    title: '',
    active: null,
    closed: null,
    order: 'trending',
    ascending: false,
    page: 1,
    tagId: null,
    followed: false
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://avax-test.turingma-api.com/app-api/topic/recommend', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(queryParams)
        });
        const data = await response.json();
        console.log('total', data.data.total)
        setMarkets(data.data.list);
        console.log('markets', data.data.list)
      } catch (error) {
        console.error('Failed to fetch markets:', error);
      }
    };
    
    fetchData();
    sdk.actions.ready();
  }, []);
  
  return (
		<Box maxWidth="full">
      {markets.map((market) => (
        <Card key={market.id} size="3" mb="4">
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src={market.imageUrl}
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
              {market.title}
            </Text>
            <MarketMeta />
            <Flex gap="3" justify="between">
              <Button color="green" radius="large" size="4">
                Yes
              </Button>
              <Button color="red" radius="large" size="4">
                No
              </Button>
            </Flex>
          </Flex>
        </Card>
      ))}
    </Box>
	);
}
