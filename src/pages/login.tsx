import React, { useEffect, useState } from "react";
import { Button, HStack, Image, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { useUserLogin } from "../queries/user";
import { FormLogin } from "../types/forms/login";

function Login() {
    const navigate = useNavigate();

    const { mutate: login, isPending, isSuccess } = useUserLogin();

    const [show, setShow] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
    } = useForm<FormLogin>()


    const onSubmit: SubmitHandler<FormLogin> = (data) => {
        login(data);
    }

    const handleClick = () => setShow(!show)

    const handleRedirectSignUp = () => {
        navigate("/sign-up");
    };

    useEffect(() => {
        if (isSuccess) navigate('/home');
    }, [isSuccess, navigate])


    return (
        <HStack w={"100%"} h={"100vh"}>
            <VStack flex={1} h={"100%"} borderRight={"1px solid #F5F5F5"}>
                <Image src="/bg3.jpg" objectFit={"cover"} minH={"100%"} minW={"100%"} />
            </VStack>
            <VStack flex={1} h={"100%"} justifyContent={"center"}>
                <VStack w={"500px"} gap={"20px"}>
                    <Text fontSize={"28"} fontWeight={"bold"}>
                        Sign in
                    </Text>
                    <Text
                        alignSelf={"center"}
                        textAlign={"justify"}
                        fontSize={"16"}
                        color={"black"}
                        fontWeight={"500"}
                    >
                        Enter your details to get sign in to your account!
                    </Text>

                    <VStack w={"100%"} alignItems={"flex-start"}>
                        <Text fontSize={"14px"} color={"gray.500"}>
                            Enter your email to get started.
                        </Text>
                        <Input
                            placeholder="Enter your email"
                            inputMode="email"
                            outline={"none"}
                            focusBorderColor={"#00cc9d"}
                            _hover={{
                                border: "1px solid #00cc9d",
                            }}
                            {...register('email', { required: true })}
                        />
                    </VStack>

                    <VStack w={"100%"} alignItems={"flex-start"}>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                {...register('password', { min: 8, required: true })}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' backgroundColor={'white'} border={'1px solid #F6F6F6'} _hover={{ backgroundColor: '#00cc9d', color: 'white' }} onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </VStack>

                    <Button
                        w={"100%"}
                        fontSize={"14px"}
                        backgroundColor={"#00cc9d"}
                        color={"white"}
                        isLoading={isPending}
                        onClick={handleSubmit(onSubmit)}
                    >
                        Sign in
                    </Button>

                    <HStack
                        w={"100%"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <VStack borderBottom={"1px solid #F3F3F3"} w={"38%"} h={"10px"} />
                        <Text fontSize={"14px"} color={"gray.500"}>
                            Or sign in with
                        </Text>
                        <VStack borderBottom={"1px solid #F3F3F3"} w={"38%"} h={"10px"} />
                    </HStack>

                    <Button
                        w={"100%"}
                        fontSize={"14px"}
                        backgroundColor={"white"}
                        border={"1px solid #F6F6F6"}
                        iconSpacing={"8px"}
                        leftIcon={<FcGoogle size={"24px"} />}
                    >
                        Sign in with Google
                    </Button>

                    <HStack>
                        <Text fontSize={"14px"}>Didn't have an account yet?</Text>
                        <Text
                            fontSize={"14px"}
                            color={"#00cc9d"}
                            cursor={"pointer"}
                            fontWeight={"bold"}
                            onClick={handleRedirectSignUp}
                        >
                            Sign up
                        </Text>
                    </HStack>
                </VStack>
            </VStack>
        </HStack>
    );
}

export const LoginScreen = React.memo(Login);
