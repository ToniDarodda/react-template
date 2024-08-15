import React from "react";
import { LayoutStack } from "../components/layout";
import { HStack, Text } from "@chakra-ui/react";

function Home() {

    return (
        <LayoutStack backgroundColor="#fafafa" navbar>
            <HStack w={'100%'} justifyContent={'center'} alignItems={'center'} h={'100%'}>
                <Text>salut</Text>
            </HStack>
        </LayoutStack>
    )
}

export const HomeScreen = React.memo(Home);