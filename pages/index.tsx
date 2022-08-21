import { Button, Container, Stack } from "@mantine/core";
import { GetServerSideProps } from "next";
import { AxiosResponse } from "axios"
import { OrgBlog } from "../components/organisms/blog/index";
import { FaqWithBg } from "../components/organisms/faq";
import { FooterLinks } from "../components/organisms/footer";
import { HeaderSearch } from "../components/organisms/header/index";
import { FooterIcons, HeaderLinks, LiveEventData } from "../data/index";
import { PublicApi, TOrgHomeData } from "../sdk/api";
import { SermonCarousel } from "../components/organisms/sermon-carousel/index";
import { HeroImageRight } from "../components/organisms/hero";

export default function Screen({ data }) {
  let home: TOrgHomeData = data.home;
  return (
    <div>
      <HeaderSearch links={HeaderLinks} />

      <HeroImageRight/>
      <Container size="lg" sx={{}}>
        
        <SermonCarousel />
      </Container>
      <Stack spacing={"lg"} justify="stretch"></Stack>
      <OrgBlog posts={home.posts ?? []} />
      <FaqWithBg />

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
