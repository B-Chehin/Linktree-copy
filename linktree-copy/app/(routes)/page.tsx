import { Button } from "@/components/ui/button";
import { Navbar } from "./components/Navbar";
import { Logo } from "@/components/Shared";

export default function Home() {
  return (
    <div>
      <Logo />

      <Button>HOLA MUNDO</Button>

      <Navbar/>
    </div>
  );
}
