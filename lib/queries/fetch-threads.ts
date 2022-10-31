const fetchThreads = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/threads`);
  const data = await res.json();

  return data;
};

export default fetchThreads;
