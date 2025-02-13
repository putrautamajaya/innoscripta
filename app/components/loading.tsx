"use client";

import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <div className="flex flex-row justify-center items-center py-20">
      <Loader color="blue" />
    </div>
  );
};

export default Loading;
