"use client"
import React from "react"
import { Avatar, Button, Image, Spacer } from "@nextui-org/react"
import { Player } from "./Player"
const Page = () => {
    return (
        <main>
            <div className=" h-fit max-h-[400px]">
                <div className="w-full !max-w-none h-fit max-h-[400px] !overflow-hidden grid relative">
                    <Image classNames={{
                        img: "w-full",
                    }} removeWrapper radius="none" src="/cifarm/background.png" className="w-full !max-w-none"/>
                    <Image classNames={{
                        img: "w-full",
                    }} removeWrapper radius="none" src="/cifarm/background.png" className="absolute bottom-0 w-full !max-w-none"/>
                </div>
                <div className="px-6 relative -top-[100px] z-20">
                </div>
                <div className="relative -top-[60px] px-6 z-20">
                    <div>
                        <div className="flex gap-2 items-end ">
                            <Avatar isBordered src="/cifarm/logo.png" className="w-[120px] h-[120px]"/>
                            <div className="text-4xl font-bold">CiFarm</div>
                        </div>
                        <Spacer y={4}/>
                        <div>The first multichain Farm-To-Earn game launched on Telegram, with initial support for Solana</div>
                        <Spacer y={4}/>
                        <Button color="primary" size="lg">Play Now</Button>
                    </div>
                </div>
                <div className="p-6">
                    <div className="text-center text-4xl font-bold">
                    Farm, Help and Earn
                    </div>
                    <Spacer y={4}/>
                    <div className="text-center">Take care of your garden, help your friends, and earn $CARROT</div>
                    <Spacer y={12}/>
                    <div className="w-full grid place-content-center gap-12">
                        <div className="flex gap-12 items-center">
                            <Image removeWrapper src="/cifarm/screen-1.jpg" className="w-[300px]"/>
                            <Image removeWrapper src="/cifarm/screen-2.jpg" className="w-[300px]"/>
                            <Image removeWrapper src="/cifarm/screen-3.jpg" className="w-[300px]"/>
                            <Image removeWrapper src="/cifarm/screen-4.jpg" className="w-[300px]"/>
                        </div>
                        <div className="w-full">
                            <Player />
                        </div>
                    </div>
                </div>
                <Spacer y={12}/>
            </div>
        </main>
    )
}
export default Page