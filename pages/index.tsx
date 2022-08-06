import { Button, Container, Stack } from "@mantine/core";
import { GetServerSideProps } from "next";
import { AxiosResponse } from "axios"
import { OrgBlog } from "../components/organisms/blog/index";
import { FaqWithBg } from "../components/organisms/faq";
import { FooterLinks } from "../components/organisms/footer";
import { HeaderSearch } from "../components/organisms/header/index";
import { HeroImageRight } from "../components/organisms/hero";
import { LiveEventBanner } from "../components/organisms/live/live-event";
import { EmailBanner } from "../components/organisms/subscribe/index";
import { FooterIcons, HeaderLinks, LiveEventData } from "../data/index";
import { PublicApi, TOrgHomeData } from "../sdk/api";

export default function Screen({ data }) {

  console.log(data.url);

  let home: TOrgHomeData = data.home;
  console.log(home);

  return (
    <div>
      <HeaderSearch links={HeaderLinks} />
      <HeroImageRight />
      <Container size={"xs"}>
        <Stack sx={{ height: "70vh" }} justify="center">
          <LiveEventBanner {...LiveEventData} />
        </Stack>
      </Container>
      <Stack spacing={"lg"} justify="stretch"></Stack>
      <OrgBlog posts={home.posts ?? []} />
      <FaqWithBg />
      <Container size={"lg"}>{/* <ContactIcons /> */}</Container>
      <EmailBanner />
      <FooterLinks data={FooterIcons} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.req.headers["host"], "resolved");
  const url = context.req.headers["host"];

  let api = new PublicApi()
  let data = await api.siteControllerGetStoreHomeData(url)


  return { props: { data: { url, home: data.data } } };
};
