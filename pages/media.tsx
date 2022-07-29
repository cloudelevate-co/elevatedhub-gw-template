import { Button, Container, Pagination, Stack } from "@mantine/core";
import { GetServerSideProps } from "next";
import { OrgBlog } from "../components/organisms/blog/index";
import { OrgBlogMain } from "../components/organisms/blog/main";
import { FooterLinks } from "../components/organisms/footer";
import { HeaderSearch } from "../components/organisms/header/index";
import { OrgMediaMain } from "../components/organisms/media/main";
import { EmailBanner } from "../components/organisms/subscribe/index";
import { FooterIcons, HeaderLinks, LiveEventData } from "../data/index";

export default function Screen() {
  return (
    <div>
      <HeaderSearch links={HeaderLinks} />
      <Stack spacing={"lg"} justify="stretch"></Stack>
      <OrgMediaMain />
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
  console.log(context.req.method,"resolved")
  return {props:{}}
}