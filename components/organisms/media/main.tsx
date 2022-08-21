import { CacheProvider } from "@emotion/react";
import { Box, Container, Grid, Stack, Title, Text, Group } from "@mantine/core";
import { Post } from "../../../sdk/api";
import { SermonCard } from "./card";

export const OrgMediaMain = ({ posts }: { posts: Post[] }) => {
  return (
    <Box>
      <Container size="lg" my={"64px"}>
        <Box
          sx={{
            backgroundColor: "red",
            borderRadius: 10,
            backgroundImage:
              "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://pbblogassets.s3.amazonaws.com/uploads/2019/12/02140921/thumbnail-cover.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          py="42px"
          px="20px"
        >
          <Group position="center">
            <Box sx={{ textAlign: "center", maxWidth: 500 }}>
              <Title sx={{ color: "white" }}>Our Media Repo</Title>
              <Text color={"gray"} sx={{ color: "white" }}>
                WCCRM Jos Media Repository is an online media repository offering a wide range of resources related to the WCCRM Jos Org and its audience.
              </Text>
            </Box>
          </Group>
        </Box>
        <Grid mt={"24px"} gutter="lg">
          {(posts ?? []).map((v) => {
            return (
              <Grid.Col md={4}>
                <SermonCard post={v} />
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>

      <Container></Container>
    </Box>
  );
};
