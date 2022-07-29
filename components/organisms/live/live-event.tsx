import {
  createStyles,
  Card,
  Overlay,
  CardProps,
  Button,
  Text,
  Box,
  Group,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: 240,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  content: {
    position: "absolute",
    padding: theme.spacing.xl,
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  action: {
    position: "absolute",
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },

  title: {
    color: theme.white,
    marginBottom: theme.spacing.xs / 2,
  },

  description: {
    color: theme.white,
    maxWidth: 220,
  },
}));

interface ImageActionBannerProps {
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  action: {
    label: string;
    link: string;
  };
}

export function LiveEventBanner({
  title,
  description,
  image,
  action,
  style,
  className,
  ...others
}: ImageActionBannerProps &
  Omit<CardProps, keyof ImageActionBannerProps | "children">) {
  const { classes, cx, theme } = useStyles();

  return (
    <Box>
      <Group position="center" mb={24}>
        <Box sx={{ textAlign: "center", maxWidth: 500 }}>
          <Title>Liv Event</Title>
          <Text color={"gray"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            repellat sint molestiae magni ullam doloremque totam itaque.
          </Text>
        </Box>
      </Group>

      <Card
        radius="md"
        style={{ backgroundImage: `url(${image})`, ...style }}
        className={cx(classes.card, className)}
        {...others}
      >
        <Overlay
          gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
          opacity={0.55}
          zIndex={0}
        />

        <div className={classes.content}>
          <Text size="lg" weight={700} className={classes.title}>
            {title}
          </Text>

          <Text size="sm" className={classes.description}>
            {description}
          </Text>

          <Button
            className={classes.action}
            variant="white"
            color="dark"
            component="a"
            size="xs"
            href={action.link}
          >
            {action.label}
          </Button>
        </div>
      </Card>
    </Box>
  );
}
