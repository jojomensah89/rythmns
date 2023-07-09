"use client";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import queryString from "query-string";
import Input from "./Input";


const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const router = useRouter();
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };
    const url = queryString.stringifyUrl({
      url: "/search",
      query: query,
    });
    router.push(url);
  }, [router, debouncedValue]);

  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
