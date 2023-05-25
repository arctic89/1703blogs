import Link from "next/link";
import React from "react";

export default function AboutLayot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link href="/about/team">Наша команда</Link>
        </li>
        <li>
          <Link href="/about/contacts">Наши контакты</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
