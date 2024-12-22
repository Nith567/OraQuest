import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CompetitionEntryDialog } from "./Dialog";

export function Body() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                ChainQuest
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Enter the ultimate blockchain challenge. Participate, compete,
                and win in an exciting decentralized contest.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Join Now</Button>
              <Button variant="outline">View Contests</Button>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <CompetitionEntryDialog />
          </div>
        </div>
      </section>
    </main>
  );
}
