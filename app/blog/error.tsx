"use client";

import React from "react";

export default function error({ error }: { error: Error }) {
  return <h1>Ошибка получения постов {error.message}</h1>;
}
