const saveThread = async (body: any) => {
  const res = await fetch(`/api/threads`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

export default saveThread;
