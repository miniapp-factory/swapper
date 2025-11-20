"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function SwapButton() {
  const [fromToken, setFromToken] = useState("ETH");
  const [toToken, setToToken] = useState("DAI");

  const handleSwap = () => {
    // Placeholder for swap logic
    alert(`Swapping ${fromToken} to ${toToken}`);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div className="flex gap-2">
        <Select value={fromToken} onValueChange={setFromToken}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="From" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ETH">ETH</SelectItem>
            <SelectItem value="DAI">DAI</SelectItem>
            <SelectItem value="USDC">USDC</SelectItem>
          </SelectContent>
        </Select>

        <Select value={toToken} onValueChange={setToToken}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="To" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ETH">ETH</SelectItem>
            <SelectItem value="DAI">DAI</SelectItem>
            <SelectItem value="USDC">USDC</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button variant="outline" size="lg" onClick={handleSwap}>
        Swap
      </Button>
    </div>
  );
}
