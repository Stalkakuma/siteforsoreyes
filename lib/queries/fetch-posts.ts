const fetchPosts = async () => {
  const res = await fetch(`/api/posts`);
  const data = await res.json();

  return data;
};

export default fetchPosts;
