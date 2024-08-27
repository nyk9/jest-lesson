import { ExpenseRepository } from "../repositories/expenseRepository";
import { Expense, Group } from "../type";
import { ExpenseService } from "./expenseService";
import { GroupService } from "./groupService";

describe("ExpenseService", () => {
  let mockGroupService: Partial<GroupService>;
  let mockExoenseRepository: Partial<ExpenseRepository>;
  let expenseService: ExpenseService;

  const group: Group = {
    name: "group1",
    members: ["一郎", "二郎"]
  };
  const expense: Expense = {
    groupName: "group1",
    expenseName: "ランチ",
    amount: 2000,
    payer: "一郎"
  };
  beforeEach(() => {
    mockGroupService = {
      getGroupByName: jest.fn()
    };
    mockExoenseRepository = {
      loadExpenses: jest.fn(),
      saveExpense: jest.fn()
    };
    expenseService = new ExpenseService(
      mockExoenseRepository as ExpenseRepository,
      mockGroupService as GroupService
    );
  });

  describe("addExpense", () => {
    it("支出が登録される", () => {
      (mockGroupService.getGroupByName as jest.Mock).mockReturnValueOnce(group);
      expenseService.addExpense(expense);
      expect(mockExoenseRepository.saveExpense).toHaveBeenCalledWith(expense);
    });

    it("グループが存在しない場合はエラーが発生する", () => {
      (mockGroupService.getGroupByName as jest.Mock).mockReturnValueOnce(null);
      expect(() => {
        expenseService.addExpense(expense);
      }).toThrowError();
    });

    it("支払者がグループに存在しない場合はエラーが発生する", () => {
      (mockGroupService.getGroupByName as jest.Mock).mockReturnValueOnce(group);
      const nomMenberExpense: Expense = { ...expense, payer: "太郎" };
      expect(() => {
        expenseService.addExpense(nomMenberExpense);
      }).toThrowError();
    });
  });
});
