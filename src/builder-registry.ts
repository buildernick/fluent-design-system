"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Card, CardHeader } from "@fluentui/react-components";
import Counter from "./components/Counter/Counter";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
