import Button from "@/components/Button";
import Title from "@/components/Title";
import VehiclesList from "@/components/VehiclesList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-center">
      <section className="w-full flex flex-col">
        <div className="flex justify-between">
          <Title text="Vehicles" />
          <Button text="New Vehicle" />
        </div>
        <VehiclesList />
      </section>
    </main>
  );
}
