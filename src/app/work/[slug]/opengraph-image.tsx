import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { caseStudySlugs, getCaseStudy } from "@/content/work";
import { site } from "@/lib/site";

export const alt = "Case study from Fundamental IT Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudySlugs().map((slug) => ({ slug }));
}

export default async function CaseStudyImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return new Response(null, { status: 404 });
  }

  const mark = await readFile(
    join(process.cwd(), "public/brand/fit-mark.png"),
    "base64",
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "60px 80px",
          color: "#F7F5EF",
          backgroundColor: "#03120B",
          backgroundImage:
            "radial-gradient(circle at 88% 0%, rgba(26, 132, 67, 0.55) 0%, rgba(26, 132, 67, 0) 58%), radial-gradient(circle at 0% 100%, rgba(201, 154, 46, 0.22) 0%, rgba(201, 154, 46, 0) 52%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`data:image/png;base64,${mark}`}
            width={50}
            height={57}
            alt=""
          />
          <div
            style={{
              display: "flex",
              marginLeft: 18,
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            <div>Fundamental</div>
            <div style={{ marginLeft: 9, color: "#DDB54E" }}>IT</div>
            <div style={{ marginLeft: 9 }}>Solutions</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, color: "#ECD28C" }}>{study.sector}</div>
          <div
            style={{
              marginTop: 14,
              fontSize: 76,
              lineHeight: 1.05,
            }}
          >
            {study.name}
          </div>
          <div
            style={{
              marginTop: 22,
              maxWidth: 1000,
              fontSize: 26,
              lineHeight: 1.4,
              color: "#B9E3C3",
            }}
          >
            {study.summary}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#7CC98E" }}>
          {`${new URL(site.url).host}/work/${study.slug}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
