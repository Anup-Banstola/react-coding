import { Button, Table } from "antd";
import { useState } from "react";

const TableComponent = ({ entries, handleDelete, handleEdit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const entriesWithSN = entries.map((entry, index) => ({
    ...entry,
    sn: index + 1,
  }));

  const columns = [
    { title: "S.N.", dataIndex: "sn", key: "sn" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "DOB", dataIndex: "dob", key: "dob" },
    { title: "City", dataIndex: ["address", "city"], key: "city" },
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
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button onClick={() => handleEdit(record.id)}>Edit</Button>
          <Button onClick={() => handleDelete(record.id)}>Delete</Button>
        </div>
      ),
    },
  ];
  return (
    <div className="overflow-x-auto">
      <Table
        dataSource={entriesWithSN}
        columns={columns}
        pagination={{
          current: currentPage,
          pageSize: itemsPerPage,
          onChange: (page) => setCurrentPage(page),
          total: entries?.length,
        }}
        rowKey="id"
        bordered
      />
    </div>
  );
};

export default TableComponent;
