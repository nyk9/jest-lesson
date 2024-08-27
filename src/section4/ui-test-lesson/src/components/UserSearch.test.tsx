import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { UserSearch } from "./UserSearch";

const user = userEvent.setup();
jest.mock("axios");
const mockAxios = jest.mocked(axios);

describe("UserSearch", () => {
  beforeEach(() => {
    mockAxios.get.mockReset();
  });
  it("入力フィールドに入力した内容でAPIリクエストが送信される", async () => {
    const userInfo = {
      id: 1,
      name: "Taro"
    };
    const response = { data: userInfo };
    mockAxios.get.mockResolvedValue(response);

    render(<UserSearch />);
    const input = screen.getByRole("textbox");
    await user.type(input, userInfo.name);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/api/users?query=${userInfo.name}`
    );
  });

  it("APIから所得したユーザー情報が画面に表示される", async () => {
    const userInfo = {
      id: 1,
      name: "Taro"
    };
    const response = { data: userInfo };
    mockAxios.get.mockResolvedValue(response);

    render(<UserSearch />);
    const input = screen.getByRole("textbox");
    await user.type(input, userInfo.name);
    const button = screen.getByRole("button");
    await user.click(button);
    waitFor(() => expect(screen.getByText(userInfo.name)).toBeInTheDocument());
  });
});
