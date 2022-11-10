const fetchUser = async (userId: string) => {
  const res = await fetch(`/api/users/${userId}`);
  const data = await res.json();

  return data;
};

export default fetchUser;
