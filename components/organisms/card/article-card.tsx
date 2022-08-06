import { Card, Stack, Box, Title, Button, Image, Text } from "@mantine/core";
import { Post } from "../../../sdk/api";



export function ArticleCard({ post }: { post: Post }) {
    return <Card shadow={"md"}>
        <Card.Section>
            <Image src={post.image??"https://media.istockphoto.com/photos/every-time-you-open-a-book-you-learn-something-picture-id1182489122?b=1&k=20&m=1182489122&s=170667a&w=0&h=OUPs_giwFPXLNDzj-9ZZEKswO0ydMvtPKNFph4AX6JE="} />
        </Card.Section>

        <Card.Section sx={{ padding: 18 }}>
            <Stack>
                <Box>
                    <Title sx={{ fontSize: 16 }}>
                        {post.title}
                    </Title>
                    <Box>
                        {" "}
                        <small>{new Date().toDateString()}</small>
                    </Box>
                </Box>
                <Text>
                    {post.short_description}
                </Text>
                <Box>
                    <Button gradient={{ from: "blue", to: "orange" }}>
                        Read
                    </Button>
                </Box>
            </Stack>
        </Card.Section>
    </Card>
}