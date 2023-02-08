import axios from "axios";

export const createRecord = async (body) => {
  const { data } = await axios({
    method: "POST",
    data: body,
    url: `/api/record`,
  });

  return data;
};
