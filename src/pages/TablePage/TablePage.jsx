import { Spin, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TablePage.css";

const TablePage = () => {
  const [dataApi, setDataApi] = useState();

  const getApi = async () => {
    try {
      const { data } = await axios.get(
        "https://api.openbrewerydb.org/breweries"
      );

      setDataApi(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  const columns = [
    {
      title: "No",
      dataIndex: "no",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "State",
      dataIndex: "state",
    },
    {
      title: "Postal Code",
      dataIndex: "postal_code",
    },
    {
      title: "Country",
      dataIndex: "country",
    },
  ];

  const data = dataApi?.map((e, i) => ({
    key: i,
    no: <p>{i + 1}</p>,
    city: <p>{e.city}</p>,
    state: <p>{e.state}</p>,
    postal_code: <p>{e.postal_code}</p>,
    country: <p>{e.country}</p>,
  }));

  return (
    <div
      style={{
        backgroundColor: "#2d2d2d",
      }}
    >
      <div className="container">
        <h1 style={{ margin: "20px", color: "#bbbbbb" }}>TABLE</h1>
        {dataApi ? (
          <Table columns={columns} dataSource={data} scroll={{ x: true }} />
        ) : (
          <Spin />
        )}
      </div>
    </div>
  );
};

export default TablePage;
