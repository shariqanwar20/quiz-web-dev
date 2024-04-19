import { RecipieCard } from "@/components/recipieCard";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { getStaticPaths } from "../menu/page";

const Recipie = ({ recipie }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  //   const [recipie, setRecipie] = useState({});

  //   const getRecipieById = async () => {
  //     setLoading(true);
  //     try {
  //       const resp = await axios.get(
  //         `${process.env.NEXT_PUBLIC_APIURL}/recipie/${recipieId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         }
  //       );
  //       setRecipie(resp.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };

  //   useEffect(() => {
  //     // console.log("recipieId", recipieId);
  //     getRecipieById();
  //   }, []);

  return (
    <div>
      {loading ? <div>Loading...</div> : <RecipieCard recipie={recipie} />}
    </div>
  );
};

export default Recipie;

export const getRecipieById = async (recipieId: any) => {
  const resp = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/recipie/${recipieId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return resp.data;
};

export async function getStaticProps({ params }: any) {
  const postData = await getRecipieById(params.id);
  return {
    props: {
      recipie: postData,
    },
  };
}