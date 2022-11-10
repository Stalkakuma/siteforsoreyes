const fetchThreadTitle = async (threadId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/threads/${threadId}`
  );
  const data = await res.json();

  return data.title;
};

export default fetchThreadTitle;
