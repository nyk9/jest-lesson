import { ShoppingList } from "./practice";

describe("ShoppingList", () => {
  let shoppinglist: ShoppingList;

  beforeEach(() => {
    shoppinglist = new ShoppingList();
  });

  describe("addItem", () => {
    it("アイテムをリストに追加する", () => {
      shoppinglist.addItem("apple");
      expect(shoppinglist.list).toEqual(["apple"]);
    });
  });

  describe("removeItem", () => {
    it("アイテムをリストから削除する", () => {
      shoppinglist.addItem("apple");
      shoppinglist.removeItem("apple");
      expect(shoppinglist.list).not.toContain("apple");
    });

    it("リストにアイテムが存在しない場合はエラー", () => {
      expect(() => shoppinglist.removeItem("banana")).toThrow(
        "アイテム: banana は存在しません"
      );
    });
  });
});
