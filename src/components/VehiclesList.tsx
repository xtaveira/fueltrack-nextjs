"use client";
import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

type vehiclesDataBaseType = [{ name: "string" }];

const vehiclesDataBase = [{ name: "Jaque" }, { name: "SrSandero" }];

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState<vehiclesDataBaseType[]>();

  setVehicles(vehiclesDataBase);

  return (
    <div className="w-full bg-red-500">
      {vehicles &&
        vehicles.map((vehicle) => (
          <Card>
            <CardContent>
              <Typography>{vehicle.name}</Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default VehiclesList;
