import axios from "axios";
import Users from "./practice";

jest.mock("axios");
const mockFunc = jest.mocked(axios);

describe("Users", () => {
  beforeEach(() => {
    mockFunc.get.mockClear();
  });

  it("ユーザーが取得できる", async () => {
    const users = [{ name: "Taro"}, { name: "Hanako"}];
    const resp = { data: users};
    mockFunc.get.mockResolvedValue(resp);

    const result = await Users.all();
    expect(result).toEqual(users);
    expect(mockFunc.get).toHaveBeenCalledWith("/users.json")
  })
});
