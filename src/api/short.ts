import data from "./token.json";

const url = "https://api-ssl.bitly.com/v4/shorten";

const shortenLink = async (long: string): Promise<any> => {
  const { token, group_guid } = data;
  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      group_guid: group_guid,
      domain: "bit.ly",
      long_url: long,
    }),
  });
};

export default shortenLink;
