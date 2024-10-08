import postcss from "rollup-plugin-postcss";
import esbuild from "rollup-plugin-esbuild";
// import { terser } from "rollup-plugin-terser";
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
    target: "es2015",
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
  },
  {
    name: "CopyCurrency",
    meta: {
      input: "./meta/blank.ts",
      output: "./dist/meta/copy-currency.meta.js",
      metaFile: "./packages/copy-currency/meta.json",
    },
    script: {
      input: "./packages/copy-currency/src/index.ts",
      output: "./dist/copy-currency.user.js",
    },
  }
];

export default [
  ...scriptConfig.map(item => ({
    input: item.meta.input,
    output: {
      file: item.meta.output,
      format: "es",
      name: item.name + "Meta",
    },
    plugins: [metablock({
      file: item.meta.metaFile,
      override: {
        "antifeature":["referral-link 【此提示为满足GreasyFork社区规范而添加，实际使用无任何强制跳转，代码可查，请知悉】"]
      }
    })],
  })),
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
      // terser({ format: { comments: true } }),
      metablock({
        file: item.meta.metaFile,
        override: {
          "antifeature":["referral-link 【此提示为满足GreasyFork社区规范而添加，实际使用无任何强制跳转，代码可查，请知悉】"]
        }
      }),
    ],
  })),
];
