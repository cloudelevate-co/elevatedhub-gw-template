
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
        <Box sx={{ maxWidth: 600 }}>
          <Title>Our Articles</Title>
          <Text color={"gray"}>
            Browse our collection of articles and videos that help you get the most out of your online presence.
          </Text>
        </Box>
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
