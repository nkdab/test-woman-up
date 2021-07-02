import React from "react";
import { render, screen } from "@testing-library/react";
import { MessagesBox } from "./MessagesBox";

const testMessages = [{ id: "1", userName: "2", text: "3" }];

describe("Тест компонента  <MessageBox />", () => {
  test("Компонент отрисовывается", () => {
    render(<MessagesBox messages="" />);
  });
  test("Отображение отсутствия сообщений", () => {
    render(<MessagesBox />);
    expect(screen.getByText("Здесь пока нет сообщений...")).toBeInTheDocument();
  });
});
