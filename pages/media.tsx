import { Button, Container, Pagination, Stack } from "@mantine/core";
import { GetServerSideProps } from "next";
import { FooterLinks } from "../components/organisms/footer";
import { HeaderSearch } from "../components/organisms/header/index";
import { OrgMediaMain } from "../components/organisms/media/main";
import { EmailBanner } from "../components/organisms/subscribe/index";
import { FooterIcons, HeaderLinks, LiveEventData } from "../data/index";
import { PublicApi, TOrgMediaData } from "../sdk/api";

export default function Screen({ data }) {
  let media: TOrgMediaData = data.media??{};
  return (
    <div>
      <HeaderSearch links={HeaderLinks} />
      <Stack spacing={"lg"} justify="stretch"></Stack>
      <OrgMediaMain posts={media.media} />
      <Pagination
        mb={60}
        total={10}
        position="center"
        styles={(theme) => ({
          item: {
            "&[data-active]": {
              backgroundImage: theme.fn.gradient({ from: "red", to: "yellow" }),
            },
          },
        })}
      />
      <EmailBanner />
      <FooterLinks data={FooterIcons} />
    </div>
  );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.req.headers["host"], "resolved");
  let url = context.req.headers["host"];
 
  let api = new PublicApi()
  let data = await api.siteControllerGetStoreMediaData(url)

  return { props: { data: { url, media: data.data } } };
}