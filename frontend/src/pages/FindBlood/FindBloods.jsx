import { DeleteDialouge } from "@/components/delete/DeleteDialouge";
// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AddBlood } from "../AddBlood/AddBlood";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataTableDemo } from "@/components/dataTable/DataTable";

export default function FindBloods() {
  const [bloods, setBloods] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8800/api/donors").then((res) => {
      //
      setBloods(res.data);
    });
  }, []);

  const fetchData = async () => {
    await axios.get("http://localhost:8800/api/donors").then((res) => {
      setBloods(res.data);
    });
  };

  const [search, setSearch] = useState("");

  // for each search input change, filter the bloods array

  return (
    <div>
      <h1 className="text-center text-xl font-semibold my-6">Find Bloods</h1>
      <Input
        className="w-1/4 mx-auto"
        placeholder="search by anything..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <DataTableDemo data={bloods} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {bloods.length > 0 &&
          bloods
            .filter((b) => {
              if (search === "") {
                return b;
              } else if (
                b.name.toLowerCase().includes(search.toLowerCase()) ||
                b.blood_group.toLowerCase().includes(search.toLowerCase()) ||
                b.area.toLowerCase().includes(search.toLowerCase())
              ) {
                return b;
              }
            })
            .map((b, index) => (
              <Card className="w-full mx-auto my-6 rounded-md" key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">
                      Donor Name: {b?.name}
                    </h2>
                    <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
                      {b?.blood_group}
                    </span>
                  </div>
                </CardHeader>
                <Separator />
                <CardContent>
                  <div className="mt-4 space-y-1">
                    <p className="text-gray-600">Area: {b?.area}</p>
                    <p className="text-gray-600">
                      Available:
                      {b?.date}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <AddBlood fetchData={fetchData} isEdit={true} data={b} />
                    <DeleteDialouge id={b?.id} setBloods={setBloods} />
                  </div>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  );
}
