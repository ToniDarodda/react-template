import { VStack } from "@chakra-ui/react";
import React from "react";

interface ISizedLayout {
    children?: React.ReactElement | React.ReactElement[];
}

function SizedLayoutComponent({ children }: ISizedLayout) {
    return (
        <VStack w="calc(100% - 300px)" h="100%" alignSelf={'flex-end'}>
            {children}
        </VStack>
    );
}

export const SizedLayout = React.memo(SizedLayoutComponent);
