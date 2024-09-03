"use client";

import Button from "@/components/Button";
import LabelAndInput from "@/components/LabelAndInput";
import Title from "@/components/Title";
import VehiclesList from "@/components/VehiclesList";
import { useRouter } from "next/router";
import React, { useState } from "react";

const NewVehicle = () => {
  const [vehicleName, setvehicleName] = useState("");
  const [vehiclePlate, setvehiclePlate] = useState("");
  const [vehicleKm, setvehicleKm] = useState(0);

  const handleCancel = (event: any) => {
    event.preventDefault();
    const router = useRouter();
    router.push("/");
  };

  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <section className="w-[80%] md:w-[50%] flex flex-col">
        <div className="flex flex-col justify-between">
          <div className="w-full flex justify-center items-center py-10 text-[#4894fe]">
            <Title text="New Vehicle" size="text-3xl" />
          </div>

          <div className="flex flex-col gap-3">
            <LabelAndInput
              title="vehicleName"
              state={vehicleName}
              setState={setvehicleName}
            />

            <LabelAndInput
              title="vehiclePlate"
              state={vehiclePlate}
              setState={setvehiclePlate}
            />

            <LabelAndInput
              title="vehicleKm"
              state={vehicleKm}
              setState={setvehicleKm}
            />
          </div>
          <div className="w-full flex justify-between mt-8">
            <Button text="Cancel" onClick={handleCancel}></Button>
            {/* <Button text="New Vehicle"></Button> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewVehicle;
