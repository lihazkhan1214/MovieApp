import TvChannelTable from "@/components/TvChannelTable";


export default function Page({ params }: { params: { slug: string } }) {
  // Decode the slug to get the original value
  const decodedSlug = decodeURIComponent(params.slug);
  return (
    <div className="mt-24 mb-64">
      <h1 className="text-4xl text-green-700 py-3 items-center justify-center mx-auto  flex uppercase my-2">{decodedSlug}</h1>
     <TvChannelTable/>
      
    </div>
  );
}
