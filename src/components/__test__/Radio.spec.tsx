import Radio from "@/components/Radio";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, mock } from "bun:test";

const baseClassName = "mr-1";

describe("Radio", () => {
  test("ラベルとラジオボタンが表示される", () => {
    render(<Radio value="test" label="ラジオボタン表示" />);
    const radioButton = screen.getByLabelText(
      "ラジオボタン表示",
    ) as HTMLInputElement;
    expect(radioButton).not.toBeNull();
    expect(radioButton.className).toContain(baseClassName);
    const label = radioButton.parentElement;
    expect(label).not.toBeNull();
  });

  test("クラス名が適用される", () => {
    render(
      <Radio
        value="test"
        label="クラス名を付けたよ"
        className="text-red-500"
        labelClassName="text-2xl"
      />,
    );
    const radioButton = screen.getByLabelText(
      "クラス名を付けたよ",
    ) as HTMLInputElement;
    expect(radioButton.className).toContain(`${baseClassName} text-red-500`);
    const label = radioButton.parentElement;
    expect(label?.className).toContain("text-2xl");
  });

  test("ラジオボタンのチェックが切り替えられる", () => {
    const handleChange = mock();
    render(
      <>
        <Radio
          name="radio-test"
          value="test1"
          label="ラジオボタン１"
          defaultChecked
          onChange={handleChange}
        />
        <Radio
          name="radio-test"
          value="test2"
          label="ラジオボタン２"
          onChange={handleChange}
        />
      </>,
    );
    const radioButton1 = screen.getByLabelText(
      "ラジオボタン１",
    ) as HTMLInputElement;
    const radioButton2 = screen.getByLabelText(
      "ラジオボタン２",
    ) as HTMLInputElement;
    expect(radioButton1.checked).toBe(true);
    expect(radioButton2.checked).toBe(false);

    // ラジオボタン2を選択する
    radioButton2.click();
    expect(handleChange).toHaveBeenCalled();
    expect(radioButton1.checked).toBe(false);
    expect(radioButton2.checked).toBe(true);
  });
});
