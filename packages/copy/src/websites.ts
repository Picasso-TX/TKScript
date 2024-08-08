import type { CopyParams } from "./utils/copy";
import doc88 from "./modules/doc88";
import wk from "./modules/wk";
import zhihu from "./modules/zhihu";
import docqq from "./modules/docqq";
import boke112 from "./modules/boke112";
import diyifanwen from "./modules/diyifanwen";
import mbalib from "./modules/mbalib";
import uemeds from "./modules/uemeds";
import aiyuke from "./modules/aiyuke";
import qidian from "./modules/qidian";
import zongheng from "./modules/zongheng";
import k17 from "./modules/17k";
import ciweimao from "./modules/ciweimao";
import qqbook from "./modules/qqbook";
import utaten from "./modules/utaten";
import baiduwk from "./modules/baiduwk";
import server from "./modules/server";
import csdn from "./modules/csdn";
import bilibili from "./modules/bilibili";
import cnki from "./modules/cnki";
import docin from "./modules/docin";
import common from "./modules/common";
import commonEnhance from "./modules/common-e";
import commonPreLoad from "./modules/common-p";
import { kdoc } from "./modules/kdocs";
import commonOnlyCss from "./modules/common-only-css";

export interface WebsiteConfig {
  initCopyEvent?: boolean;
  runAt?: "document-start" | "document-end";
  captureInstance?: boolean;
  delay?: number;
}
export interface Website {
  config?: WebsiteConfig;
  regexp: RegExp;
  init: () => void;
  getSelectedText?: () => CopyParams;
}

const websites: Website[] = [
  wk,
  zhihu,
  docqq,
  boke112,
  diyifanwen,
  mbalib,
  uemeds,
  aiyuke,
  qidian,
  zongheng,
  k17,
  ciweimao,
  qqbook,
  utaten,
  baiduwk,
  server,
  doc88,
  csdn,
  bilibili,
  cnki,
  docin,
  kdoc,
  common,
  commonEnhance,
  commonPreLoad,
  commonOnlyCss
];

export default websites;
