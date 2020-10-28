import axios from "axios";

const catURL = `https://api.thecatapi.com/v1/images/search`;

export const getCat = async () => {
  try {
    const response = await axios.get(catURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
    const cats = response.data;
    return cats;
  } catch (error) {
    throw error;
  }
};

