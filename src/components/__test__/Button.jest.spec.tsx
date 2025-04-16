import Button from "@/components/Button";
import { render, screen } from "@testing-library/react";

const baseClassName = "rounded-md px-6 py-3 text-white";
const colorGrayClassName = "bg-zinc-500 hover:bg-zinc-600";
const colorBlueClassName = "bg-sky-600 hover:bg-sky-700";
const colorRedClassName = "bg-red-600 hover:bg-red-700";
const colorGreenClassName = "bg-green-600 hover:bg-green-700";
const colorOriginalClassName =
  "bg-purple-500 hover:bg-purple-600 rounded-2xl px-10 py-6";

describe("Button", () => {
  it("colorGray で「キャンセル」のボタンが表示される", () => {
    render(<Button colorGray>キャンセル</Button>);
    const button = screen.getByRole("button", { name: "キャンセル" });
    expect(button.className).toContain(baseClassName);
    expect(button.className).toContain(colorGrayClassName);
    expect(button.textContent).toBe("キャンセル");
  });
  it("colorBlue で「決定」のボタンが表示される", () => {
    render(<Button colorBlue>決定</Button>);
    const button = screen.getByRole("button", { name: "決定" });
    expect(button.className).toContain(baseClassName);
    expect(button.className).toContain(colorBlueClassName);
    expect(button.textContent).toBe("決定");
  });
  it("colorRed で「削除」のボタンが表示される", () => {
    render(<Button colorRed>削除</Button>);
    const button = screen.getByRole("button", { name: "削除" });
    expect(button.className).toContain(baseClassName);
    expect(button.className).toContain(colorRedClassName);
    expect(button.textContent).toBe("削除");
  });
  it("colorGreen で「更新」のボタンが表示される", () => {
    render(<Button colorGreen>更新</Button>);
    const button = screen.getByRole("button", { name: "更新" });
    expect(button.className).toContain(baseClassName);
    expect(button.className).toContain(colorGreenClassName);
    expect(button.textContent).toBe("更新");
  });
  it("className で「オリジナル」のボタンが表示される", () => {
    render(<Button className={colorOriginalClassName}>オリジナル</Button>);
    const button = screen.getByRole("button", { name: "オリジナル" });
    expect(button.className).toContain(baseClassName);
    expect(button.className).toContain(colorOriginalClassName);
    expect(button.textContent).toBe("オリジナル");
  });
  it("Click イベントが発火する", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>クリック</Button>);
    const button = screen.getByRole("button", { name: "クリック" });
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
