import { fireEvent, render, screen } from "@testing-library/react";
import { MessagesInput } from "./MessagesInput";

const mockMessageAdd = jest.fn();

describe("Тест компонента <MessageInput />", () => {
  test("Компонент отрисовывается", () => {
    render(<MessagesInput onMessageAdd={mockMessageAdd} />);
    expect(screen.getByText("Ваше имя:")).toBeInTheDocument();
    expect(screen.getByText("Сообщение:")).toBeInTheDocument();
  });
  test("Кнопка отправки работает", () => {
    render(<MessagesInput onMessageAdd={mockMessageAdd} />);
    /**
     * @type {HTMLInputElement}
     */
    const inputName = screen.getByLabelText("Ваше имя:");
    /**
     * @type {HTMLInputElement}
     */
    const inputMessage = screen.getByLabelText("Сообщение:");
    fireEvent.input(inputName, {
      target: {
        value: "name",
      },
    });
    fireEvent.input(inputMessage, {
      target: {
        value: "message",
      },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(mockMessageAdd).toBeCalledWith({
      userName: "name",
      text: "message",
    });
  });
  test("Имя пользователя по умолчанию сбрасывается при фокусе на поле ввода имени", () => {
    render(<MessagesInput onMessageAdd={mockMessageAdd} />);
    /**
     * @type {HTMLInputElement}
     */
    const inputName = screen.getByLabelText("Ваше имя:");
    fireEvent.focus(inputName);
    expect(inputName.value).toBe("");
  });
  test("Имя пользователя не сбрасывается, если отличается от имени по умолчанию", () => {
    render(<MessagesInput onMessageAdd={mockMessageAdd} />);
    /**
     * @type {HTMLInputElement}
     */
    const inputName = screen.getByLabelText("Ваше имя:");
    fireEvent.change(inputName, { target: { value: "name1" } });
    fireEvent.focus(inputName);
    expect(inputName.value).toBe("name1");
  });
});
