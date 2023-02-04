export const fetchProperties = async () => {
  try {
    const query = `
      {
        propertyCollection(limit:6) {
          items {
            id
              title
              address
              category
            image {
              url
            }
          }
        }
      }
    `;

    const res = await window.fetch(
      `https://graphql.contentful.com/content/v1/spaces/vyvd54sdd5jm`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer TVMyOuOqkY3kNh_wDrlce2zwju8TDkI-96twtPci8fk",
        },
        body: JSON.stringify({ query }),
      }
    );

    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
};
