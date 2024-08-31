import Title from "@/components/Title";
import VehiclesList from "@/components/VehiclesList";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <section className="w-[80%] md:w-[50%] flex flex-col">
        <div className="flex justify-between">
          <Title text="Vehicles" />
          <Button variant="contained" color="primary">
            New Vehicle
          </Button>
        </div>
        <VehiclesList />
      </section>
    </main>
  );
}
