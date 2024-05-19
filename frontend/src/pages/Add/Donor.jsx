import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Donor() {
  const [inputData, setInputData] = useState({
    name: "",
    blood_group: "",
    area: "",
    date: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    axios.post("http://localhost:8800/api/donors", inputData).then((res) => {
      navigate("/");
      setInputData({
        name: "",
        blood_group: "",
        area: "",
        date: "",
      });
    });
  };

  return (
    <div className="flex items-center ">
      <Card className="sm:max-w-md mx-auto mt-20">
        <CardHeader>
          <CardTitle>Add Blood Donor</CardTitle>
          <CardDescription>
            Give us the information about the blood donor.
          </CardDescription>
        </CardHeader>
        <CardDescription className="grid gap-4 p-6">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="group" className="text-right">
              Blood Group
            </Label>
            <Input
              id="group"
              value={inputData.blood_group}
              onChange={(e) =>
                setInputData({ ...inputData, blood_group: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="area" className="text-right">
              Area
            </Label>
            <Input
              id="area"
              value={inputData.area}
              onChange={(e) =>
                setInputData({ ...inputData, area: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Available
            </Label>
            <Input
              type="date"
              value={inputData.date}
              onChange={(e) =>
                setInputData({ ...inputData, date: e.target.value })
              }
              id="date"
              className="col-span-3"
            />
          </div>
        </CardDescription>
        <CardFooter>
          <Button
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            Add Donor
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
