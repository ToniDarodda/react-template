import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    return (
        <HStack w={'100%'} backgroundColor={'white'} h={'50px'} justifyContent={'center'} alignItems={'center'}>
            <Button onClick={() => navigate('/sign-in')}>Login</Button>
        </HStack>
    )
}

export const WelcomeScreen = React.memo(Welcome);