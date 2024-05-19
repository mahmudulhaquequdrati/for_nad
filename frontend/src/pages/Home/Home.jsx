/* eslint-disable react/no-unknown-property */
import { useNavigate } from "react-router-dom";
import { AddBlood } from "../AddBlood/AddBlood";
import { DeleteDialouge } from "@/components/delete/DeleteDialouge";
// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataTableDemo } from "@/components/dataTable/DataTable";
export default function Home() {
  // const navigate = useNavigate();
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

  return (
    <>
      {/* <div>
        <main className="text-gray-900">
          <section className=" ">
            <div className="container mx-auto px-8 lg:flex">
              <div className="lg:w-1/3 lg:mx-auto pt-10 ">
                <img
                  className="w-full"
                  src={
                    "https://img.freepik.com/free-vector/world-blood-donor-day-heart-blood-drop-with-heartbeat-line-concept-poster_1017-38605.jpg?t=st=1716105410~exp=1716109010~hmac=fa512d6a89b78507f3a720e89a366fd4a59c7a66cf703f8250e922e50a639692&w=826"
                  }
                  alt=""
                />
              </div>
              <div className="text-center lg:text-left lg:w-1/2 pt-20 ">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                  Search People for Blood!
                </h1>
                <p className="text-xl lg:text-2xl mt-6 font-light">
                  Find blood donors in your area. Register as a donor and save
                  lives. We are in this together.
                </p>
                <p className="mt-8 md:mt-12">
                  <button
                    onClick={() => {
                      navigate("/find-bloods");
                    }}
                    type="button"
                    className=" py-4 px-12 bg-teal-500 hover:bg-teal-600 rounded text-white"
                  >
                    Find Bloods
                  </button>
                </p>
                <p className="mt-4 text-gray-600">
                  life is in blood, donate blood save life
                </p>
              </div>
            </div>
          </section>

          <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
            <h3 className="text-5xl font-semibold">Ready to Become a Donor?</h3>
            <p className="mt-8 text-xl font-light">
              Register as a donor and save lives. Blood donation is a voluntary
              procedure that can help save the lives of others.
            </p>
            <div className="mt-8">
              <AddBlood />
            </div>
          </section>
        </main>
      </div> */}
      <div className="p-5">
        <h1 className="text-center text-xl font-semibold my-6">Find Bloods</h1>

        <DataTableDemo data={bloods} setBloods={setBloods} />
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {bloods.length > 0 &&
            bloods.map((b, index) => (
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
        </div> */}
      </div>
    </>
  );
}
