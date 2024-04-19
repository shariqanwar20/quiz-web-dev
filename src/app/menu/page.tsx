"use client";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Recipie from "../recipies/[id]";
import { RecipieCard } from "@/components/recipieCard";
// jwt
const jwt = require("jsonwebtoken");

const people = [
  {
    name: "Jane Cooper",
    description: "Regional Paradigm Technician",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    description: "Regional Paradigm Technician",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    description: "Regional Paradigm Technician",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    description: "Regional Paradigm Technician",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [activeRecipie, setActiveRecipie] = useState<any>({});
  const [recipies, setRecipies] = useState([]);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const getRecipies = async () => {
    setLoading(true);
    try {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_APIURL}/recipie`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setRecipies(resp.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getRecipies();

    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt.decode(token);
      setUser(decoded.email);
      console.log(decoded)
    }
  }, []);

  const handleRecipieClick = (recipie: any) => {
    console.log("recipie", recipie);
    setShowModal(true);
    setActiveRecipie(recipie);
  };
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">Welcome {user}</h1>
          <h2 className="text-2xl font-bold">Recipies</h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {recipies.map((person: any, i) => (
              <div
                key={i}
                onClick={() => handleRecipieClick(person)}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <img
                    className="h-20 w-20 flex-shrink-0 rounded-md bg-gray-300"
                    src={person.image}
                    alt=""
                  />
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-lg font-bold text-gray-900">
                        {person.name}
                      </h3>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500">
                      {person.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
      <RecipieCard
        showModal={showModal}
        setShowModal={setShowModal}
        recipie={activeRecipie}
      />
    </>
  );
}
