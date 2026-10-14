import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name}. ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
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
          padding: "72px 80px",
          color: "#F7F5EF",
          backgroundColor: "#03120B",
          backgroundImage:
            "radial-gradient(circle at 88% 0%, rgba(26, 132, 67, 0.55) 0%, rgba(26, 132, 67, 0) 58%), radial-gradient(circle at 0% 100%, rgba(201, 154, 46, 0.22) 0%, rgba(201, 154, 46, 0) 52%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`data:image/png;base64,${mark}`}
            width={66}
            height={75}
            alt=""
          />
          <div
            style={{
              display: "flex",
              marginLeft: 24,
              fontSize: 40,
              fontWeight: 600,
            }}
          >
            <div>Fundamental</div>
            <div style={{ marginLeft: 12, color: "#DDB54E" }}>IT</div>
            <div style={{ marginLeft: 12 }}>Solutions</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 72, height: 4, backgroundColor: "#C99A2E" }} />
          <div
            style={{
              marginTop: 36,
              maxWidth: 920,
              fontSize: 84,
              lineHeight: 1.05,
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#7CC98E" }}>
          {new URL(site.url).host}
        </div>
      </div>
    ),
    { ...size },
  );
}
