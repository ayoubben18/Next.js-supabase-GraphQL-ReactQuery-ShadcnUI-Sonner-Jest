import PageWrapper from "@/components/PageWrapper";
import PaginatedProducts from "@/components/PaginatedProducts";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper className="gap-4 pt-20">
      <h1 className="text-4xl">Hello Guys :)</h1>
      <h2 className="text-xl">
        My name is Ayoub Bensalah and I'm a software engineer
      </h2>
      <h3 className="text-xl">I hope you find this helpful</h3>

      <div className="flex flex-col items-center text-center">
        <h3>Follow me on :</h3>
        <div className="flex items-center gap-4">
          <Link href={`https://github.com/ayoubben18`} target="_blank">
            <Github size={32} />
          </Link>
          <Link
            target="_blank"
            href={`https://www.linkedin.com/in/ayoub-bensalah-56834b29b/`}
          >
            <Linkedin size={32} />
          </Link>
        </div>
      </div>
      <PaginatedProducts />
    </PageWrapper>
  );
}
