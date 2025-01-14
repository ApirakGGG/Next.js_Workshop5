import Image from "next/image";
export default async function Highlight() {
  const highlightImage = [
    { id: "1", heighlight: "js", image: "/asset/js.png" },
    { id: "2", heighlight: "ts", image: "/asset/ts.png" },
    { id: "3", heighlight: "html", image: "/asset/html-5.png" },
  ];

  return (
    <>
      <div className="relative space-x-5 flex ">
        {highlightImage.map((highlight) => (
          <div
            key={highlight.id}
            className="cursor-pointer items-center rounded-full p-1.5 bg-gradient-to-t from-orange-500 to-blue-500"
          >
            <div className="p-1 items-center rounded-full bg-gray-200 ">
              <Image
                src={highlight.image}
                alt={highlight.heighlight}
                width={100}
                height={100}
                className="object-cover rounded-full border overflow-hidden "
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
