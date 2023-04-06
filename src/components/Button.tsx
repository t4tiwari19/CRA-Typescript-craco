import React from "react";
import { Card, Title, Content } from "./styles";

export const ShowContent = () => {
  return (
    <Card>
      <Title>Card Title</Title>
      <Content className="content">
        <p className="txt">
          This is some content inside the card{" "}
          <span className="label">DONT SHOW ME </span>
        </p>
        <a href="#">Click me</a>
      </Content>
    </Card>
  );
};
