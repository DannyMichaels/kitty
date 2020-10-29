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

const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/addedCats`;

export const getCats = async () => {
  try {
    const response = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    const cats = response.data.records;
    return cats;
  } catch (error) {
    throw error;
  }
};

