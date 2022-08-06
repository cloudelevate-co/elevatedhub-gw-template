import { Box, Button, Card, Stack, Title, Text, Image } from "@mantine/core";
import { Post } from "../../../sdk/api";

export const SermonCard = ({ post }: { post: Post }) => {
  return (
    <Box>
      <Card shadow={"md"}>
        <Card.Section>
          <Image src={post.image ?? "https://i.ytimg.com/vi/73KWayeFHYM/maxresdefault.jpg"} />
        </Card.Section>

        <Card.Section sx={{ padding: 18 }}>
          <Stack>
            <Box>
              <Title sx={{ fontSize: 16 }}>{post.title}</Title>
              <Box>
                {" "}
                <small>{new Date().toDateString()}</small>
              </Box>
            </Box>
            <Text>
              {post.short_description}
            </Text>
            <Box>
              <Button gradient={{ from: "blue", to: "orange" }}>View </Button>
            </Box>
          </Stack>
        </Card.Section>
      </Card>
    </Box>
  );
};
