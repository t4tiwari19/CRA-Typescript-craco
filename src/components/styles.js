import React from "react";
import styled from "styled-components";

// Outer component
export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`;

// Inner component
export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 12px;
`;

// Nested content component
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .txt {
    .label {
    }
  }
`;
