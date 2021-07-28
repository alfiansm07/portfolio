import {
  Box,
  Button,
  Icon,
  Link as ChakraLink,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

import { MAX_WIDTH } from "config"

// Fell free to add your social media accounts!
const socialAccounts = [
  { icon: FaTwitter, path: "https://twitter.com/alpyian", title: "Twitter" },
  {
    icon: FaLinkedin,
    path: "https://www.linkedin.com/in/muhammadalfiansyah/",
    title: "Linkedin",
  },
  {
    icon: FaInstagram,
    path: "https://www.instagram.com/alfi.an",
    title: "Instagram",
  },
]
// const color = useColorModeValue("whatsapp.700", "whatsapp.400")
const Footer = () => (
  <>
    <Box as="footer">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Box py="2">
          {socialAccounts.map((item, index) => (
            <ChakraLink
              href={item.path}
              aria-label={item.title}
              mx="2"
              _focus={{ outline: "none" }}
              key={index}
              isExternal
            >
              <Button
                aria-label={item.title}
                _hover={{
                  bg: useColorModeValue("whatsapp.400", "whatsapp.700"),
                }}
              >
                <Icon as={item.icon} w="6" h="6" />
              </Button>
            </ChakraLink>
          ))}
        </Box>
        <Box py="5">
          <Text>
            Built with{" "}
            <span role="img" aria-label="red heart">
              ❤️
            </span>
            ,{" "}
            <ChakraLink
              href="https://nextjs.org/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Next.js
            </ChakraLink>
            ,{" "}
            <ChakraLink
              href="https://chakra-ui.com/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Chakra UI
            </ChakraLink>
            , Hosted in{" "}
            <ChakraLink
              href="http://vercel.com/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Vercel.
            </ChakraLink>
          </Text>
        </Box>
      </Box>
    </Box>
  </>
)

export default Footer
