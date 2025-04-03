import Layout from "./layout";
import { ReactNode } from "react";


export default function Home(): ReactNode & {getLayout?: (page: ReactNode) => ReactNode} {
  return (
    <div
    >
      Home
    </div>
  );
}
Home.getLayout = function getLayout(page: ReactNode) {
    return <Layout>{page}</Layout>;
}