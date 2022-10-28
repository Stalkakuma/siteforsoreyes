const fetchPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  const data = await res.json();

  return data;
};

export default fetchPosts;
