const baseUrl = "https://dummyapi.io/data/v1/user";
const baseUrl2 = "https://dummyapi.io/data/v1/tag";
const baseUrl3 = "https://dummyapi.io/data/v1/post";
const token = "62e1d90e2677f9d8258fd877";

const getAllUsers = async () => {
  const users = await fetch(baseUrl, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await users.json();
};

const getUserById = async (id) => {
  const user = await fetch(`${baseUrl}/${id}`, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await user.json();
};

const getUserByPost = async (id) => {
  const post = await fetch(`${baseUrl}/${id}/post`, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await post.json();
};

const getAllTags = async () => {
  const tags = await fetch(baseUrl2, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await tags.json();
};

const getUserByTags = async (tagTitle) => {
  const user = await fetch(`${baseUrl2}/${tagTitle}/post`, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await user.json();
};

const getAllPost = async () => {
  const tags = await fetch(baseUrl3, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await tags.json();
};

const getUserByComment = async (id) => {
  const post = await fetch(`${baseUrl3}/${id}/comment`, {
    method: "GET",
    headers: {
      "app-id": `${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await post.json();
};

export {
  getAllUsers,
  getUserById,
  getUserByPost,
  getUserByTags,
  getAllTags,
  getAllPost,
  getUserByComment,
};
