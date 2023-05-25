import React from "react";

type Guest = {
  params: {
    name: string;
  };
};

export default function Guest({ params: { name } }: Guest) {
  return <div>{name} page</div>;
}
