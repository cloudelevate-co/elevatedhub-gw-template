import { CacheProvider } from "@emotion/react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Title,
  Text,
  Card,
  Image,
  Button,
  Group,
} from "@mantine/core";
import { SermonCard } from "./card";

export const OrgBlog = () => {
  return (
    <Box>
      <Container size="lg" my={"64px"}>
        <Group position="center">
          <Box sx={{ textAlign: "center", maxWidth: 500 }}>
            <Title>Our Media Repo</Title>
            <Text color={"gray"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              repellat sint molestiae magni ullam doloremque totam itaque.
            </Text>
          </Box>
        </Group>
        <Grid mt={"24px"} gutter="lg">
          {[1, 2, 3, 4, 5, 6].map((v) => {
            return (
              <Grid.Col md={4}>
               <SermonCard/>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>

      <Container></Container>
    </Box>
  );
};
