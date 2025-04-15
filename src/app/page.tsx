import Button from "@/components/Button";

export default function HomePage() {
  return (
    <>
      <h1 className="mb-8 p-5 text-4xl font-bold text-white text-center">
        Next.js + Bun でフロントエンドテストを実装する
      </h1>
      <div className="flex gap-4 items-center justify-center">
        <Button colorGray>NEGATIVE</Button>
        <Button colorBlue>POSITIVE</Button>
        <Button colorRed>DELETE</Button>
        <Button colorGreen>UPDATE</Button>
        <Button className="bg-purple-500 hover:bg-purple-600 rounded-2xl px-10 py-6">
          ORIGINAL
        </Button>
      </div>
    </>
  );
}
