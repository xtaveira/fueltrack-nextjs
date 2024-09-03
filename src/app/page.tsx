"use client";

import Button from "@/components/Button";
import Title from "@/components/Title";
import VehiclesList from "@/components/VehiclesList";
import { useRouter } from "next/router";

export default function Home() {
  const handleNewVehicle = (event: any) => {
    event.preventDefault();
    const router = useRouter();
    router.push("/new-vehicle");
  };

  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <section className="w-[80%] md:w-[50%] flex flex-col">
        <div className="flex justify-between">
          <Title text="Vehicles" />
          <Button onClick={handleNewVehicle} text="New Vehicle"></Button>
        </div>
        <VehiclesList />
      </section>
    </main>
  );
}
