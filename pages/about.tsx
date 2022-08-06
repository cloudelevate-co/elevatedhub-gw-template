import { Box, Group, Text, Stack, Title, Container } from "@mantine/core";
import { GetServerSideProps } from "next";
import { FooterLinks } from "../components/organisms/footer";
import { HeaderSearch } from "../components/organisms/header/index";
import { EmailBanner } from "../components/organisms/subscribe/index";
import { FooterIcons, HeaderLinks } from "../data/index";
import { PublicApi, TOrgAboutData, TOrgBlogData } from "../sdk/api";

export default function Screen({ data }) {

  let about: TOrgAboutData = data.about;
  return (
    <div>
      <HeaderSearch links={HeaderLinks} />
      <Container size="lg" my="42px">
        <Box
          sx={{
            backgroundColor: "red",
            borderRadius: 10,
            backgroundImage:
              "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://www.horizonhospital.com/wp-content/uploads/2018/09/contact-us-cover.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          py="62px"
          px="20px"
        >
          <Group position="center">
            <Box sx={{ textAlign: "center", maxWidth: 500 }}>
              <Title sx={{ color: "white" }}>About Us</Title>
              <Text color={"gray"} sx={{ color: "white" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                repellat sint molestiae magni ullam doloremque totam itaque.
              </Text>
            </Box>
          </Group>
        </Box>

        <Box my="42px"></Box>
      </Container>
      <EmailBanner />
      <FooterLinks data={FooterIcons} />
    </div>
  );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.req.headers["host"], "resolved");
  const url = context.req.headers["host"];

  let api = new PublicApi()
  let data = await api.siteControllerGetStoreAboutData(url)

  return { props: { data: { url, about: data.data } } };
}