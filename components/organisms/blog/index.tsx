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
import { Post } from "../../../sdk/api";
import { ArticleCard } from "../card/article-card";

export const OrgBlog = ({ posts }: { posts?: Post[] }) => {
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
          {posts.map((v) => {
            return (
              <Grid.Col md={4}>
                <ArticleCard post={v} />
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>

      <Container></Container>
    </Box>
  );
};
