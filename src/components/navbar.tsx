import { HStack, Text } from "@chakra-ui/react";
import React from "react";

function NavbarComponent() {
    return (
        <HStack w={'300px'} backgroundColor={'white'} border={'1px solid #F1F1F1'} h={'100%'} position={'fixed'} left={0} top={0} alignItems={'flex-start'} justifyContent={'center'}>
            <Text>navbar</Text>
        </HStack>
    )
}

export const Navbar = React.memo(NavbarComponent);