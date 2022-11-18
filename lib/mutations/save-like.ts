const saveLike = async (body: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/likes`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

export default saveLike;
