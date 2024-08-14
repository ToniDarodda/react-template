import { HStack } from "@chakra-ui/react";
import React from "react";

function Register() {
    return (
        <HStack w={'100%'} backgroundColor={'white'} h={'50px'}>Register</HStack>
    )
}

export const RegisterScreen = React.memo(Register);