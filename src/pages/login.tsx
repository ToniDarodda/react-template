import { HStack } from "@chakra-ui/react";
import React from "react";

function Login() {
    return (
        <HStack w={'100%'} backgroundColor={'white'} h={'50px'}>Login</HStack>
    )
}

export const LoginScreen = React.memo(Login);