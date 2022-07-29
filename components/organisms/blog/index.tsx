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

export const OrgBlog = () => {
  return (
    <Box>
      <Container size="lg" my={"64px"}>
        <Group position="center">
          <Box sx={{ textAlign: "center", maxWidth: 500 }}>
            <Title>Our Blog</Title>
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
                <Card shadow={"md"}>
                  <Card.Section>
                    <Image src="https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE=" />
                  </Card.Section>

                  <Card.Section sx={{ padding: 18 }}>
                    <Stack>
                      <Box>
                        <Title sx={{ fontSize: 16 }}>
                          Article title goes here
                        </Title>
                        <Box>
                          {" "}
                          <small>{new Date().toDateString()}</small>
                        </Box>
                      </Box>
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias dolorem, consequuntur, eius nobis autem natus
                        nostrum necessitatibus.
                      </Text>
                      <Box>
                        <Button gradient={{ from: "blue", to: "orange" }}>
                          Read
                        </Button>
                      </Box>
                    </Stack>
                  </Card.Section>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>

      <Container></Container>
    </Box>
  );
};
