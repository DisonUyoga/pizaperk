"use client";
import {
  Box,
  Flex,
  Link,
  Stack,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Collapse,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "@/lib/hook";
import DrawerComponent from "./ui/Drawer";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { totalQuantity } = useAppSelector((state) => state.cart);
  const { isOpen: openDrawer, onOpen, onClose } = useDisclosure();
  const [scrollY, setScrollY] = useState(0);
  const bg = useColorModeValue("#050152", "#161622");
  const color = useColorModeValue("#161622", "white");
  const navSize = useBreakpointValue({ base: "70px", md: "80px" });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const nav_links = [
    {
      dispaly: "Home",
      path: "/",
    },
    {
      dispaly: "Menu",
      path: "/menu",
    },
    {
      dispaly: "Orders",
      path: "/orders",
    },
  ];
  return (
    <Box
      position="fixed"
      top="0"
      width="100%"
      zIndex="1000"
      transition="background-color 0.2s ease, height 0.2s ease"
      bg={scrollY > 10 ? "gray.700" : bg}
      color={scrollY > 10 ? "white" : color}
      height={scrollY > 10 ? "60px" : navSize}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        maxW="1200px"
        mx="auto"
      >
        <Flex
          fontSize="1.5rem"
          fontWeight="bold"
          gap={2}
          alignItems={"center"}
          justify={"center"}
        >
          <Image
            src={"/pizzaman.png"}
            alt="logo"
            width={100}
            height={100}
            className={"w-6 h-6 rounded-full"}
          />
          <Link color={"#fff"} href="/">
            PizzaPerk
          </Link>
        </Flex>
        <Box display={{ base: "block", md: "none" }}>
          <UserButton />
        </Box>
        <Box
          display={{ base: "block", md: "none" }}
          onClick={() => {
            onOpen();
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} color="#fff" />
        </Box>
        <IconButton
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          icon={
            isOpen ? (
              <CloseIcon color={"#FF9001"} />
            ) : (
              <HamburgerIcon color={"#FF9001"} />
            )
          }
          variant="ghost"
          aria-label="Toggle Navigation"
          color={"black"}
        />
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          mt={{ base: 4, md: 0 }}
          spacing={6}
          color={"#fff"}
        >
          {nav_links.map((link, index) => (
            <Link mr={2} href={link.path}>
              {link.dispaly}
            </Link>
          ))}
          <UserButton />
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <VStack
          bg={useColorModeValue("#FF9001", "gray.900")}
          p={4}
          display={{ md: "none" }}
          color={"#fff"}
        >
          {nav_links.map((link, index) => (
            <Link mr={2} fontSize={"sm"} href={link.path}>
              {link.dispaly}
            </Link>
          ))}
        </VStack>
      </Collapse>
      <DrawerComponent isOpen={openDrawer} onClose={onClose} />
    </Box>
  );
};

export default Navbar;
