import postcss from "rollup-plugin-postcss";
import esbuild from "rollup-plugin-esbuild";
import metablock from "rollup-plugin-userscript-metablock";
import path from "path";
import replace from "@rollup/plugin-replace";

const buildConfig = {
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
      output: "./dist/external/copy.meta.js",
      metaFile: "./packages/copy/meta.scriptcat.json",
    },
    script: {
      input: "./packages/copy/src/index-scriptcat.ts",
      output: "./dist/external/copy.user.js",
      injectCss: false,
      override:{
        "updateURL":"https://api.staticj.top/script/update/copy.meta.js",
        "downloadURL":"https://api.staticj.top/script/update/copy.user.js"
      }
    },
    replace: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.CHANNEL": JSON.stringify(process.env.CHANNEL),
      "preventAssignment": true,
      "__couponV__":"10"
    }
  },
  {
    name: "CopyScriptCat",
    meta: {
      input: "./meta/blank.ts",
      output: "./dist/external/copy-scriptcat.meta.js",
      metaFile: "./packages/copy/meta.scriptcat.json",
    },
    script: {
      input: "./packages/copy/src/index-scriptcat.ts",
      output: "./dist/external/copy-scriptcat.user.js",
      injectCss: false,
      override:{
        "updateURL":"https://api.staticj.top/script/update/copy-scriptcat.meta.js",
        "downloadURL":"https://api.staticj.top/script/update/copy-scriptcat.user.js"
      }
    },
    replace: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.CHANNEL": JSON.stringify(process.env.CHANNEL),
      "preventAssignment": true,
      "__couponV__":"4"
    },
  },
  {
    name: "Timelygogo",
    meta: {
      input: "./meta/blank.ts",
      output: "./dist/copy-timelygogo.meta.js",
      metaFile: "./packages/copy/meta.timelygogo.json",
    },
    script: {
      input: "./packages/copy/src/index-timelygogo.ts",
      output: "./dist/copy-timelygogo.user.js",
      injectCss: false
    },
    replace: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.CHANNEL": JSON.stringify(process.env.CHANNEL),
      "preventAssignment": true,
      "__couponV__":"11"
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
      file: item.meta.metaFile ,
      override: item.script.override
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
      replace({ ...item.replace }),
      postcss({ ...buildConfig.postcss, inject: item.script.injectCss }),
      esbuild(buildConfig.esbuild),
      metablock({
        file: item.meta.metaFile,
        override: item.script.override
      }),
    ],
  })),
];
