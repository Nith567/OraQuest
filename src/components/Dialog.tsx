"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";

export function CompetitionEntryDialog() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("");
  const [entryCost, setEntryCost] = useState("");
  const [scoreToWin, setScoreToWin] = useState(0); // replace "" with 0 or any default number

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const contestData = {
        theme,
        entryCost,
        scoreToWin,
        contractAddress: "du",
      };
      const response = await axios.post("/api/contest", contestData);
      console.log("data", response.data);

      router.push(`/contests/${response.data}`);
    } catch (error) {
      console.error("Error submitting contest:", error);
      // Handle error (e.g., show error message to user)
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Enter Competition
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter Competition</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="theme">Theme</Label>
            <Input
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              placeholder="Enter competition theme"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="entryCost">Entry Cost</Label>
            <Input
              id="entryCost"
              value={entryCost}
              onChange={(e) => setEntryCost(e.target.value)}
              placeholder="Enter cost in $"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="scoreToWin">Score to Win</Label>
            <Input
              id="scoreToWin"
              type="number"
              value={scoreToWin}
              onChange={(e) => setScoreToWin(Number(e.target.value))}
              placeholder="Enter minimum score to win"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Entry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
