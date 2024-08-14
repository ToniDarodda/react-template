import { HStack } from "@chakra-ui/react";
import React from "react";

function Home() {
    return (
        <HStack w={'100%'} backgroundColor={'white'} h={'50px'}>Home</HStack>
    )
}

export const HomeScreen = React.memo(Home);