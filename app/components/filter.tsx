"use client";

import { useEffect, useRef, useState } from "react";
import { CloseButton, Input, NativeSelect } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import dayjs from "dayjs";

export interface Filter {
  keyword: string;
  date: string;
  source: string;
}

interface FilterProps {
  onChange: (e: Filter) => void;
}

const Filter = ({ onChange }: FilterProps) => {
  const [filter, setFilter] = useState<Filter>({
    keyword: "",
    date: dayjs().format("YYYY-MM-DD"),
    source: "newsAPI",
  });

  const debounceRef = useRef(setTimeout(() => {}));

  const setFilterValue = (key: string, value: unknown) => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setFilter((prev) => ({ ...prev, [key]: value }));
    }, 500);
  };

  useEffect(() => {
    onChange(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="grow gap-4 flex flex-col">
      <NativeSelect
        label="Source"
        description="Select your news source"
        data={[
          { label: "News API", value: "newsAPI" },
          { label: "The Guardian", value: "theGuardian" },
          { label: "New York Times", value: "nyTimes" },
        ]}
        onChange={(e) => setFilterValue("source", e.target.value)}
      />

      <DateInput
        value={dayjs(filter.date).toDate()}
        onChange={(e) => setFilterValue("date", dayjs(e).format("YYYY-MM-DD"))}
        label="Date input"
        placeholder="Date input"
      />

      <Input.Wrapper label="Search">
        <Input
          placeholder="Search news..."
          onChange={(e) => setFilterValue("keyword", e.target.value)}
          rightSectionPointerEvents="all"
          rightSection={
            <CloseButton
              aria-label="Clear input"
              onClick={() => setFilterValue("keyword", "")}
              style={{ display: filter.keyword ? undefined : "none" }}
            />
          }
        />
      </Input.Wrapper>
    </div>
  );
};

export default Filter;
