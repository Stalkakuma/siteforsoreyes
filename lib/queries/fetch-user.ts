const fetchUser = async (userEmail: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/users/${userEmail}`
  );
  const data = await res.json();

  return data;
};

export default fetchUser;
