import { Card, Image, Text, Button, Group } from "@mantine/core";

interface NewsCardProps {
  imgUrl: string;
  headline: string;
  abstract: string;
  webUrl: string;
}

const NewsCard = (data: NewsCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={data?.imgUrl || "news_img.webp"}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{data.headline}</Text>
      </Group>

      <Text
        size="sm"
        c="dimmed"
        className="!mb-auto max-h-[100px] ellipsis overflow-hidden"
      >
        {data.abstract}
      </Text>

      <a target="_blank" href={data.webUrl} rel="noreferrer noopener">
        <Button color="blue" fullWidth mt="md" radius="md">
          Read now
        </Button>
      </a>
    </Card>
  );
};

export default NewsCard;
