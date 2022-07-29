import { CacheProvider } from "@emotion/react";
import { Box, Container, Grid, Stack, Title, Text, Group } from "@mantine/core";
import { SermonCard } from "./card";

export const OrgMediaMain = () => {
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                repellat sint molestiae magni ullam doloremque totam itaque.
              </Text>
            </Box>
          </Group>
        </Box>
        <Grid mt={"24px"} gutter="lg">
          {[1, 2, 3, 4, 5, 6].map((v) => {
            return (
              <Grid.Col md={4}>
                <SermonCard />
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>

      <Container></Container>
    </Box>
  );
};
