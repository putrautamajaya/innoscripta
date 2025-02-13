import { Button, Group, Text } from "@mantine/core";
import { Filter } from "./filter";
import { useEffect, useState } from "react";

interface PaginationProps {
  filter: Filter;
  onChange: (e: number) => void;
}

const Pagination = ({ filter, onChange }: PaginationProps) => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    setPage(1);
  }, [filter.source]);

  useEffect(() => {
    onChange(page);
  }, [page]);

  return (
    <Group gap={10} justify="center">
      <Button variant="subtle" onClick={prevPage}>
        {"<"}
      </Button>
      <Text>{page}</Text>
      <Button variant="subtle" onClick={nextPage}>
        {">"}
      </Button>
    </Group>
  );
};

export default Pagination;
