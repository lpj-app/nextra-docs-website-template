import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents } from "@/mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

/* Page route metadata
export async function generateMetadata(props) {
  const params = await props.params;
  const mdxPath = params?.mdxPath ?? [];
  const { metadata } = await importPage(mdxPath);
  return metadata;
}
*/

// General overall page metadata
export const metadata = {
  title: "Blog - your-website",
  description: "Blog - your-website",
};

const Wrapper = useMDXComponents().wrapper;

export default async function Page(props) {
  const params = await props.params;
  const mdxPath = params?.mdxPath ?? [];
  const result = await importPage(mdxPath);

  // Page route metadata
  //const { default: MDXContent, toc, metadata } = result;

  // General overall page metadata
  const { default: MDXContent, toc, metadata } = result;

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
