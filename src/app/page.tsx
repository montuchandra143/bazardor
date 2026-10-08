import MarketBanner from "./components/MarketBanner";


export default async function Home() {

   const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
   const data = await res.json();
   console.log(data)



  return (
    <div>
      <MarketBanner/>

      

    </div>
  );
}
