const fetchThreads = async () => {
  const res = await fetch(`/api/threads`);
  const data = await res.json();

  return data;
};

export default fetchThreads;
