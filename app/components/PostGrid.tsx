"use client";
import Image from "next/image";
import Masonry from "react-masonry-css";

export default function PostGrid() {
  // test photo
  const postGrid = [
    { name: "ts", post: "1", image: "/asset/ts.png" },
    { name: "js", post: "2", image: "/asset/js.png" },
    { name: "penguin", post: "3", image: "/asset/G.png" },
    { name: "html", post: "4", image: "/asset/html-5.png" },
    { name: "ts", post: "5", image: "/asset/ts.png" },
    { name: "js", post: "6", image: "/asset/js.png" },
    { name: "penguin", post: "7", image: "/asset/G.png" },
    { name: "html", post: "8", image: "/asset/html-5.png" },
    { name: "ts", post: "9", image: "/asset/ts.png" },
    { name: "js", post: "10", image: "/asset/js.png" },
    { name: "penguin", post: "11", image: "/asset/G.png" },
    { name: "html", post: "12", image: "/asset/html-5.png" },
  ];

  return (
    <>
      <div className="mx-auto max-w-6xl md:max-w-4xl ">
        <Masonry
          // brakepoint ตามขนาดจอเมื่อย่อขยาย
          breakpointCols={{ default: 4, 1200: 3, 768: 2 }}
          className="my-masonry-grid mb-2"
          columnClassName="my-masonry-grid_column"
        >
          {postGrid.map((post) => (
            <div key={post.post}>
              <Image
                src={post.image}
                alt={post.name}
                height={500}
                width={500}
                className="object-cover size-full rounded-lg items-center"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
}

//1:06:11
