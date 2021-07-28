import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import NextImage from "next/image"
import Zoom from "react-reveal/Zoom"
import { seo, data } from "config"

const Home = () => {
  const color = useColorModeValue("whatsapp.700", "whatsapp.400")

  const isOdd = (num) => num % 2

  const title = `${seo.title}`
  const description = seo.description
  const canonical = seo.canonical

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}bighead.svg`,
              width: "300px",
              height: "300px",
              alt: "avatar bigheads",
            },
          ],
        }}
      />

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
        <Zoom>
          <NextImage
            src="/bighead.svg"
            width="300"
            height="300"
            alt="avatar bigheads"
            color="red"
            placeholder="blur"
            blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
            priority
          />
        </Zoom>
        <Box>
          <Heading
            as="h1"
            fontSize="2xl"
            fontWeight="500"
            py="2"
            className="face"
          >
            Hi, I'm Muhammad AlfianS{" "}
            <span role="img" aria-label="hand">
              👋🏻
            </span>
          </Heading>
          <Heading fontSize={["3xl", "4xl"]} fontWeight="700">
            Full-time{" "}
            <Text as="span" color={color}>
              Prayer
            </Text>{" "}
            and part-time learner
          </Heading>
          <Text py="4">
            A{" "}
            <Text as="span" fontWeight="600">
              web designer
            </Text>{" "}
            and{" "}
            <Text as="span" fontWeight="600">
              front-end web developer
            </Text>{" "}
            based in the Jakarta,Id. Currently working at government tax office
          </Text>

          {/* <Link
            href="https://api.whatsapp.com/send/?phone=%2B6282127272731"
            target="_blank"
          > */}
          <Button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=%2B6282127272731",
                "_blank"
              )
            }
            colorScheme="whatsapp"
            variant="ghost"
            size="lg"
            fontSize="24px"
          >
            Get in touch
          </Button>
          {/* </Link> */}
        </Box>
      </Box>
    </>
  )
}

export default Home
