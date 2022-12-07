export default function Next({ data }) {
  // 這裡的 data 就是 getStaticProps 回傳的～
  return <RepoCard data={data} />;
}
export async function getStaticProps() {
  // 抓取 vercel/next.js repository 的資料
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const data = await res.json();

  // 回傳該 page 所需的 props
  return {
    props: { data },
  };
}
