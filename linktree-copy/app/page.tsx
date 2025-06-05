"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {

  useEffect(() => {
    toast("Hola Mundo", {
      description: "Esta es una notificación de prueba",
      duration: 5000,
      position: "top-right",
    });
  }
  , []);

  return (
    <div>

      <Button>HOLA MUNDO</Button>

    </div>
  );
}
