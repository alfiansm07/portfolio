import { chakra } from "@chakra-ui/react"
import NextLink from "next/link"

const Logo = () => (
  <>
    <NextLink href="/" passHref>
      <chakra.a fontSize="2rem" fontWeight="700">
        al.
      </chakra.a>
    </NextLink>
  </>
)

export default Logo
