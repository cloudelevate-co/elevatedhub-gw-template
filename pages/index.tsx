import { Button, Container, Stack } from "@mantine/core";
import { OrgBlog } from "../components/organisms/blog/index";
import { FaqWithBg } from "../components/organisms/faq";
import { FooterLinks } from "../components/organisms/footer";
import { HeaderSearch } from "../components/organisms/header/index";
import { HeroImageRight } from "../components/organisms/hero";
import { LiveEventBanner } from "../components/organisms/live/live-event";
import { EmailBanner } from "../components/organisms/subscribe/index";
import { FooterIcons, HeaderLinks, LiveEventData } from "../data/index";

export default function Screen() {
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
      <OrgBlog />
      <FaqWithBg />
      <Container size={"lg"}>{/* <ContactIcons /> */}</Container>
      <EmailBanner />
      <FooterLinks data={FooterIcons} />
    </div>
  );
}
