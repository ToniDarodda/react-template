import { Center, Spinner, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useGetUser } from "../queries/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../stores/app.store";
import { setUser } from "../stores/slices/user";
import { Navbar } from "./navbar";
import { SizedLayout } from "./sized-layout";

interface ILayout {
    children: React.ReactElement[] | React.ReactElement;
    backgroundColor?: string;
    navbar?: boolean;
}

function Layout({ children, backgroundColor, navbar = false }: ILayout) {
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();

    const { data: account, isLoading, isError } = useGetUser();

    useEffect(() => {
        // if (isError) navigate('/sign-in', { replace: true })
    }, [isError, navigate]);

    useEffect(() => {
        if (!isLoading && account) {
            dispatch(setUser(account));
        }
    }, [isLoading, account, dispatch]);

    if (isLoading) {
        <Center>
            <Spinner size="md" />
        </Center>;
    }
    return (
        <VStack
            w={"100vw"}
            h={"100vh"}
            backgroundColor={backgroundColor ?? "white"}
        >
            {navbar ?
                <SizedLayout>
                    {children}
                </SizedLayout>
                :
                children
            }
            {navbar ? (
                <Navbar />
            ) : null}
        </VStack>
    );
}

export const LayoutStack = React.memo(Layout);
