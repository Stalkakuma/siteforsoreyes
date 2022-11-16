const deleteThread = async (threadId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/threads/${threadId}`,
    {
      method: "DELETE",
    }
  );
  const data = await res.json();

  return data;
};

export default deleteThread;
