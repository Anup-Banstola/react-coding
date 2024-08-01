import { useEffect, useState } from "react";
import useEntries from "../hooks/useEntries";

import { Button, Input, Table } from "antd";

const ProfilesList = () => {
  const { entries } = useEntries();
  console.log(entries);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProfiles, setFilterdProfiles] = useState([]);

  useEffect(() => {
    const filtered = entries.filter((entry) =>
      entry.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilterdProfiles(filtered);
  }, [searchQuery, entries]);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const entriesWithSN = filteredProfiles.map((entry, index) => ({
    ...entry,
    sn: index + 1,
  }));

  const columns = [
    { title: "S.N.", dataIndex: "sn", key: "sn" },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      key: "city",
    },
    { title: "District", dataIndex: ["address", "district"], key: "district" },

    { title: "Province", dataIndex: ["address", "province"], key: "province" },

    { title: "Country", dataIndex: ["address", "country"], key: "country" },
    {
      title: "Profile Picture",
      dataIndex: "profilePicture",
      key: "profilePicture",
      render: (url) => (
        <img src={url} alt="Profile" style={{ width: 50, height: 50 }} />
      ),
    },
  ];
  return (
    <div className="p-4 overflow-x-auto">
      <Input
        placeholder="Search by Name"
        className=" w-72 my-4 p-2"
        allowClear
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Table
        dataSource={entriesWithSN}
        columns={columns}
        rowKey="id"
        bordered
      />
      <Button type="primary" onClick={() => (window.location.href = "/")}>
        Back to HomePage
      </Button>
    </div>
  );
};

export default ProfilesList;
