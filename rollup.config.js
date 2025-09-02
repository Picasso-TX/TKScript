import postcss from "rollup-plugin-postcss";
import esbuild from "rollup-plugin-esbuild";
import metablock from "rollup-plugin-userscript-metablock";
import path from "path";
import replace from "@rollup/plugin-replace";

const buildConfig = {
  replace: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    "process.env.CHANNEL": JSON.stringify(process.env.CHANNEL),
    "preventAssignment": true,
  },
  postcss: {
    minimize: true,
    extensions: [".css"],
  },
  esbuild: {
    exclude: [/node_modules/],
    sourceMap: false,
    target: "es2020",
    minify: false,
    charset: "utf8",
    tsconfig: path.resolve(__dirname, "tsconfig.json"),
  },
};

const scriptConfig = [
  {
    name: "Copy",
    meta: {
      input: "./meta/blank.ts",
      output: "./dist/meta/copy.meta.js",
      metaFile: "./packages/copy/meta.json",
    },
    script: {
      input: "./packages/copy/src/index.ts",
      output: "./dist/copy.user.js",
      injectCss: false,
    },
  },
  {
    name: "CopyScriptCat",
    meta: {
      input: "./meta/blank.ts",
      output: "./dist/meta/copy.scriptcat.meta.js",
      metaFile: "./packages/copy/meta.scriptcat.json",
    },
    script: {
      input: "./packages/copy/src/index-scriptcat.ts",
      output: "./dist/copy-scriptcat.user.js",
      injectCss: false,
    },
  }
];

export default [
  ...scriptConfig.map(item => ({
    input: item.script.input,
    output: {
      file: item.script.output,
      format: "iife",
      name: item.name + "Module",
    },
    plugins: [
      replace({ ...buildConfig.replace }),
      postcss({ ...buildConfig.postcss, inject: item.script.injectCss }),
      esbuild(buildConfig.esbuild),
      metablock({
        file: item.meta.metaFile,
        override: {

        }
      }),
    ],
  })),
];
