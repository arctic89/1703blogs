import React from "react";

type PostType = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export default async function Post({ params: { id } }: PostType) {
  const postData = await getData(id);

  return (
    <>
      <h1>Post {id}</h1>
      <section className="section">
        <h4>{postData.title}</h4>
        <div>{postData.body}</div>
      </section>
    </>
  );
}
