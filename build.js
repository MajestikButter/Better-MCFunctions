require("esbuild")
  .build({
    external: ["mojang-minecraft"],
    entryPoints: ["src/index.ts"],
    outfile: process.argv[2],
    target: "es2020",
    format: "esm",
    bundle: true,
    minify: true,
  })
  .catch(() => process.exit(1));
