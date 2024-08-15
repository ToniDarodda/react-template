import { Center, Spinner, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useGetUser } from "../queries/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../stores/app.store";
import { setUser } from "../stores/slices/user";

interface ILayout {
    children: React.ReactElement;
}

function Layout({ children }: ILayout) {
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();

    const { data: account, isLoading, isError } = useGetUser();

    useEffect(() => {
        if (isError) navigate('/sign-in', { replace: true })
    }, [isError, navigate])

    useEffect(() => {
        if (!isLoading && account) {
            dispatch(setUser(account));
        }
    }, [isLoading, account, dispatch])

    if (isLoading) {
        <Center>
            <Spinner size='md' />
        </Center>
    }
    return (
        <VStack w={'100vw'} h={'100vh'}>
            {children}
        </VStack>
    )
}

export const LayoutStack = React.memo(Layout);