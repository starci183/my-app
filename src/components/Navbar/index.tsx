"use client"

import {Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react"
import React from "react"

export const Navbar = () => {
    return (
        <NextUINavbar isBordered classNames={{
            wrapper: "min-w-full"
        }} position="static" isBlurred={false}>
            <NavbarBrand>
                <div className="flex gap-2 items-center">
                    <Image removeWrapper src="/logo.svg" className="w-5 h-5" alt="Logo" />
                    <div className="font-bold text-primary">CI WALLET</div>
                </div>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href="#">About</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#">Earn</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} href="https://t.me/ciwallet_bot" isExternal color="primary">
            Go To App
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    )
}