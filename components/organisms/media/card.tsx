import { Box, Button, Card, Stack, Title, Text, Image} from "@mantine/core";

export const SermonCard = () => {
  return (
    <Box>
      <Card shadow={"md"}>
        <Card.Section>
          <Image src="https://i.ytimg.com/vi/73KWayeFHYM/maxresdefault.jpg" />
        </Card.Section>

        <Card.Section sx={{ padding: 18 }}>
          <Stack>
            <Box>
              <Title sx={{ fontSize: 16 }}>Sermon title goes here</Title>
              <Box>
                {" "}
                <small>{new Date().toDateString()}</small>
              </Box>
            </Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              dolorem, consequuntur, eius nobis autem natus.
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
