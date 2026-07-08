import { useState } from "react";

// API

import { apiGetStudent } from "../../services/api/studentApi";

// Components

import { Select } from "../Select";
import { StudentOption } from "../SelectCustomOptions";

export const StudentSelect = ({
  value = null,
  onSelect = () => {},
  ...props
}) => {
  // States

  const [studentList, setStudentList] = useState([]);

  const [fetchStatus, setFetchStatus] = useState("default"); // loading | default | error

  const handleFetchStudents = async (searchValue = "") => {
    setFetchStatus("loading");
    try {
      const response = await apiGetStudent({
        search: searchValue,
        pagE_NO: 1,
        pagE_SIZE: 10,
      });
      setStudentList(response);
      setFetchStatus("default");
    } catch (error) {
      setFetchStatus("error");
    }
  };

  return (
    <Select
      className="min-h-fit"
      valueKey="CODE"
      labelKey="NAME"
      options={studentList}
      onSelectOpen={() => handleFetchStudents()}
      onSearchChange={handleFetchStudents}
      isLoading={fetchStatus === "loading"}
      selectedOption={value}
      onSelect={onSelect}
      placeholder="Select student"
      render={(data) => <StudentOption data={data} />}
      renderOption={(data) => <StudentOption data={data} />}
      optionClassName="min-h-fit py-2"
      {...props}
    />
  );
};
