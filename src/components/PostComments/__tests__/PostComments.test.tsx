import { fireEvent, render, screen } from "@testing-library/react";
import PostComments from "..";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComments />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve renderizar dois comentários", () => {
    render(<PostComments />);

    fireEvent.change(screen.getByTestId("comment-value"), {
      target: { value: "primeiro comentário de teste" },
    });
    fireEvent.click(screen.getByTestId("comment-btn"));

    fireEvent.change(screen.getByTestId("comment-value"), {
      target: { value: "segundo comentário de teste" },
    });
    fireEvent.click(screen.getByTestId("comment-btn"));

    expect(screen.getAllByTestId("comment-container")).toHaveLength(2);
  });
});
