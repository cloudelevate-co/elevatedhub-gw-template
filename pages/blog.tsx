import { Button, Container, Pagination, Stack } from "@mantine/core";
import { OrgBlogMain } from "../components/organisms/blog/main";
import { FooterLinks } from "../components/organisms/footer";
import { HeaderSearch } from "../components/organisms/header/index";
import { EmailBanner } from "../components/organisms/subscribe/index";
import { FooterIcons, HeaderLinks, LiveEventData } from "../data/index";

export default function Screen() {
  return (
    <div>
      <HeaderSearch links={HeaderLinks} />
      <Stack spacing={"lg"} justify="stretch"></Stack>
      <OrgBlogMain />
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
