"use client";
import { Flex, DataList, Badge, Code, IconButton, Link } from "@radix-ui/themes";
import { CopyIcon } from '@radix-ui/react-icons';

type MetaData = {
  data?: {
    id: number;
    startDate: number;
    endDate: number;
    volume: number;
    yesName: string;
    yesPrice: number;
    noName: string;
    noPrice: number;
    lastTradePrice: number;
  } | null;
};

export function MarketMeta({ data }: MetaData) {
 
  return (
		<DataList.Root>
      <DataList.Item>
        <DataList.Label minWidth="88px">ID</DataList.Label>
        <DataList.Value>{data?.id}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Start Date</DataList.Label>
        <DataList.Value>{new Date(data?.startDate)?.toLocaleDateString() ?? 'N/A'}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">End Date</DataList.Label>
        <DataList.Value>{new Date(data?.endDate)?.toLocaleDateString() ?? 'N/A'}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Volume</DataList.Label>
        <DataList.Value>{data?.volume}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Current Chance</DataList.Label>
        <DataList.Value>{data?.lastTradePrice}</DataList.Value>
      </DataList.Item>
    </DataList.Root>
	);
}
