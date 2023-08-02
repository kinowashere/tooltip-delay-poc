import { Button, Tooltip } from "@heathmont/moon-core-tw";
import { useState } from "react";

const FooButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const text = isOpen ? "Close the tooltip" : "Click to open the test tooltip";
  return (
    <Tooltip open={true}>
      <Tooltip.Trigger>
        <Button onClick={() => setIsOpen(!isOpen)}>{text}</Button>
      </Tooltip.Trigger>
      <Tooltip.Content className="backface">Look at me</Tooltip.Content>
    </Tooltip>
  );
};
export default function Home() {
  return (
    <main className="flex flex-col space-y-5 md:p-4 p-1">
      <h1 className="text-center">
        Scroll up and down on mobile while the tooltip is open
      </h1>
      <section className="flex min-h-[120vh] items-center justify-center ">
        <FooButton />
      </section>
    </main>
  );
}
