"use client";
import { url } from "inspector";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type vehicleType = {
  name: string;
  fuelRange: number;
  lastRefuel: string;
  km: number;
};

const vehiclesDataBase = [
  { name: "Jaque", fuelRange: 45.7, lastRefuel: "23/08", km: 157298 },
  { name: "Jaque", fuelRange: 45.7, lastRefuel: "23/08", km: 1 },
  { name: "Jaque", fuelRange: 45.7, lastRefuel: "23/08", km: 1 },
];

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState<vehicleType[]>();

  useEffect(() => {
    setVehicles(vehiclesDataBase);
  });

  return (
    <div className="w-full">
      {vehicles &&
        vehicles.map((vehicle) => (
          <div className="flex justify-between items-center rounded-2xl my-2 p-3 bg-[#4894fe] color-white ">
            <div>
              <p className="font-bold text-lg">{vehicle.name}</p>
              <p>Km: {vehicle.km}</p>
              <p>Autonomia: {vehicle.fuelRange}km/l</p>
              <p>Abastecimento: {vehicle.lastRefuel}</p>
            </div>
            <div className="bg-white rounded-full p-3">
              <Image
                src="/gas-station.svg"
                alt="refuel-icon"
                width={70}
                height={70}
                className="m-1"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default VehiclesList;
