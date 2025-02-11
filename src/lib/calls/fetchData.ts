"use server";
export default async function fetchData() {
  const response = await fetch("https://dummyjson.com/test");
  return await response.json();
}
