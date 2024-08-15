import {
    Button,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Register() {
    const { t } = useTranslation('register');

    const navigate = useNavigate();

    const [show, setShow] = useState<boolean>(false);

    const handleClick = () => setShow(!show);

    const handleRedirectSignIn = () => {
        navigate("/sign-in");
    };

    return (
        <HStack w={"100%"} h={"100vh"}>
            <VStack
                flex={1}
                h={"100%"}
                borderRight={"1px solid #F5F5F5"}
                display={{ sm: "none", md: "none", lg: "flex" }}
            >
                <Image src="/bg3.jpg" objectFit={"cover"} minH={"100%"} minW={"100%"} />
            </VStack>
            <VStack flex={1} h={"100%"} justifyContent={"center"}>
                <VStack w={"500px"} gap={"20px"}>
                    <Text fontSize={"28"} fontWeight={"bold"}>
                        {t('text_sign_up_key')}
                    </Text>
                    <Text
                        alignSelf={"center"}
                        textAlign={"justify"}
                        fontSize={"16"}
                        color={"black"}
                        fontWeight={"500"}
                    >
                        {t('text_enter_details_key')}
                    </Text>

                    <VStack w={"100%"} alignItems={"flex-start"}>
                        <Text fontSize={"14px"} color={"gray.500"}>
                            {t('text_email_key')}
                        </Text>
                        <Input
                            placeholder="Enter your email..."
                            inputMode="email"
                            outline={"none"}
                            autoFocus
                            focusBorderColor={"#00cc9d"}
                            _hover={{
                                border: "1px solid #00cc9d",
                            }}
                        />
                    </VStack>

                    <VStack w={"100%"} alignItems={"flex-start"}>
                        <Text fontSize={"14px"} color={"gray.500"}>
                            {t('placeholder_email')}
                        </Text>
                        <Input
                            placeholder={t('text_placeholder_input_name')}
                            focusBorderColor={"#00cc9d"}
                            _hover={{
                                border: "1px solid #00cc9d",
                            }}
                        />
                    </VStack>

                    <VStack w={"100%"} alignItems={"flex-start"}>
                        <Text fontSize={"14px"} color={"gray.500"}>
                            {t('placeholder_password')}
                        </Text>
                        <InputGroup size="md">
                            <Input
                                pr="4.5rem"
                                type={show ? "text" : "password"}
                                placeholder={t('text_placeholder_input_password_name')}
                            />
                            <InputRightElement width="4.5rem">
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    backgroundColor={"white"}
                                    border={"1px solid #F6F6F6"}
                                    _hover={{ backgroundColor: "#00cc9d", color: "white" }}
                                    onClick={handleClick}
                                >
                                    {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </VStack>

                    <Button
                        w={"100%"}
                        fontSize={"14px"}
                        backgroundColor={"#00cc9d"}
                        color={"white"}
                    >
                        {t('text_sign_up_key')}
                    </Button>

                    <HStack
                        w={"100%"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <VStack borderBottom={"1px solid #F3F3F3"} w={"38%"} h={"10px"} />
                        <Text fontSize={"14px"} color={"gray.500"}>
                            {t('text_or_sign_in_key')}
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
                        {t('text_sign_with_google')}
                    </Button>

                    <HStack>
                        <Text fontSize={"14px"}>{t('text_already_account_yet')}</Text>
                        <Text
                            fontSize={"14px"}
                            color={"#00cc9d"}
                            cursor={"pointer"}
                            fontWeight={"bold"}
                            onClick={handleRedirectSignIn}
                        >
                            {t('text_sign_up_key')}
                        </Text>
                    </HStack>
                </VStack>
            </VStack>
        </HStack>
    );
}

export const RegisterScreen = React.memo(Register);
