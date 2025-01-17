import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { DNA } from "react-loader-spinner";

const BrokenPhones = () => {
  const [phones, setPhones] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phonesData = data.data.data;
        // console.log(phonesData);
        const phonesWithFakeData = phonesData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        // console.log(phonesWithFakeData);
        setLoader(false);
        setPhones(phonesWithFakeData);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        {loader && (
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
      </div>
      <h3 className="text-4xl text-center font-bold">
        Phones : {phones.length}
      </h3>
      <div className="flex justify-center">
        <BarChart width={500} height={400} data={phones}>
          <Bar dataKey={"price"} fill="gray"></Bar>
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </div>
    </div>
  );
};

export default BrokenPhones;
