const savePost = async (body: any) => {
  const res = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

export default savePost;
