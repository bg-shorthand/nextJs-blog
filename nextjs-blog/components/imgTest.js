import Image from "next/image";

export default function imgTest() {
  return (
    <Image src="/public/images/test-img.jpg" alt="test" width={200}></Image>
  );
}
