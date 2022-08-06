import { Button, Container, Pagination, Stack } from "@mantine/core";
import { GetServerSideProps } from "next";
import { OrgBlogMain } from "../components/organisms/blog/main";
import { FooterLinks } from "../components/organisms/footer";
import { HeaderSearch } from "../components/organisms/header/index";
import { EmailBanner } from "../components/organisms/subscribe/index";
import { FooterIcons, HeaderLinks } from "../data/index";
import { PublicApi, TOrgBlogData } from "../sdk/api";


export default function Screen({ data }) {

  let blog: TOrgBlogData = data.blog;
  return (
    <div>
      <HeaderSearch links={HeaderLinks} />
      <Stack spacing={"lg"} justify="stretch"></Stack>
      <OrgBlogMain posts={blog.posts} />
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
  const url = context.req.headers["host"];

  let api = new PublicApi()
  let data = await api.siteControllerGetStoreBlogData(url)

  return { props: { data: { url, blog: data.data } } };
}