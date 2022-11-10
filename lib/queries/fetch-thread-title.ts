const fetchThreadTitle = async (threadId: string) => {
  const res = await fetch(`/api/threads/${threadId}`);
  const data = await res.json();

  return data.title;
};

export default fetchThreadTitle;
