import { HStack } from "@chakra-ui/react";
import React from "react";

function Welcome() {
    return (
        <HStack w={'100%'} backgroundColor={'white'} h={'50px'}>Welcome</HStack>
    )
}

export const WelcomeScreen = React.memo(Welcome);