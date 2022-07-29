import { Button, Container, Stack } from "@mantine/core";
import {
  ContactIcons,
  ContactIconsList,
} from "../components/organisms/contact";
import { FaqWithBg } from "../components/organisms/faq";
import { FooterLinks } from "../components/organisms/footer";
import { HeaderSearch } from "../components/organisms/header/index";
import { HeroImageRight } from "../components/organisms/hero";
import { FooterIcons, HeaderLinks } from "../data/index";

export default function Screen() {
  return (
    <div>
      <HeaderSearch links={HeaderLinks} />
      <HeroImageRight />
      <Stack spacing={"lg"} justify="stretch"></Stack>
      <FaqWithBg />
      <Container size={"lg"}>{/* <ContactIcons /> */}</Container>
      <FooterLinks data={FooterIcons} />
    </div>
  );
}
