import { HStack } from "@chakra-ui/react";
import React from "react";
import { LayoutStack } from "../components/layout";

function Home() {

    return (
        <LayoutStack>
            <HStack w={'100%'} backgroundColor={'white'} h={'50px'}>Home</HStack>
        </LayoutStack>
    )
}

export const HomeScreen = React.memo(Home);