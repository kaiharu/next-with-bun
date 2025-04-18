import Button from "@/components/Button";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const baseClassName = "rounded-md px-6 py-3 text-white";
const colorGrayClassName = "bg-zinc-500 hover:bg-zinc-600";
const colorBlueClassName = "bg-sky-600 hover:bg-sky-700";
const colorRedClassName = "bg-red-600 hover:bg-red-700";
const colorGreenClassName = "bg-green-600 hover:bg-green-700";
const colorCustomClassName =
  "bg-purple-500 hover:bg-purple-600 rounded-2xl px-10 py-6";

describe("Button", () => {
  it("色を指定したボタンが表示できる", () => {
    render(<Button color="gray">グレー</Button>);
    const button = screen.getByRole("button", { name: "グレー" });
    expect(button.className).toContain(baseClassName);
    expect(button.className).toContain(colorGrayClassName);
    expect(button.textContent).toBe("グレー");

    render(<Button color="blue">ブルー</Button>);
    const buttonBlue = screen.getByRole("button", { name: "ブルー" });
    expect(buttonBlue.className).toContain(baseClassName);
    expect(buttonBlue.className).toContain(colorBlueClassName);
    expect(buttonBlue.textContent).toBe("ブルー");

    render(<Button color="red">レッド</Button>);
    const buttonRed = screen.getByRole("button", { name: "レッド" });
    expect(buttonRed.className).toContain(baseClassName);
    expect(buttonRed.className).toContain(colorRedClassName);
    expect(buttonRed.textContent).toBe("レッド");

    render(<Button color="green">グリーン</Button>);
    const buttonGreen = screen.getByRole("button", { name: "グリーン" });
    expect(buttonGreen.className).toContain(baseClassName);
    expect(buttonGreen.className).toContain(colorGreenClassName);
    expect(buttonGreen.textContent).toBe("グリーン");
  });
  it("クラス名が適用される", () => {
    render(<Button className={colorCustomClassName}>カスタムクラス</Button>);
    const button = screen.getByRole("button", { name: "カスタムクラス" });
    expect(button.className).toContain(baseClassName);
    expect(button.className).toContain(colorCustomClassName);
    expect(button.textContent).toBe("カスタムクラス");
  });
  it("Click イベントが発火する", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>クリック</Button>);
    const button = screen.getByRole("button", { name: "クリック" });
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
