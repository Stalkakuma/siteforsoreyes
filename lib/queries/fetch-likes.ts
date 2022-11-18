const fetchLikes = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/likes`);
  const data = await res.json();

  return data;
};

export default fetchLikes;
