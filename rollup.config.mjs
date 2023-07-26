import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import json from "@rollup/plugin-json";

const paths = {
  input: {
    root: "src/index.js",
  },
  output: {
    root: "dist/",
  },
};

export default {
  input: `${paths.input.root}`,
  output: [
    {
      file: `${paths.output.root}bundle.cjs.js`,
      format: "cjs",
    },
    {
      file: `${paths.output.root}bundle.esm.js`,
      format: "esm",
    },
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    // babel({
    //   exclude: "node_modules/**",
    //   runtimeHelpers: true,
    // }),
    uglify(),
  ],
  babelHelpers: "runtime",
};
