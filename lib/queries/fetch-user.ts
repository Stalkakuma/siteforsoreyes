const fetchUser = async (userId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/users/${userId}`
  );
  const data = await res.json();

  return data;
};

export default fetchUser;
