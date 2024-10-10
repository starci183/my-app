"use client"

import React, { PropsWithChildren } from "react"
import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Navbar } from "@/components"

export const LayoutContent = ({ children }: PropsWithChildren) => {
    return (
        <NextThemesProvider attribute="class" defaultTheme="dark">
            <Navbar />
            {children}
        </NextThemesProvider>
    )
}

export const WrappedLayout = ({ children }: PropsWithChildren) => {
    return (
        <NextUIProvider>
            <LayoutContent> {children} </LayoutContent>
        </NextUIProvider>
    )
}