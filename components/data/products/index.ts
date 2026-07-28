import { tokuyamaProducts } from "./tokuyama";
import { renfertProducts } from "./renfert";
import { shiningProducts } from "./shining";
import { zhermackProducts } from "./zhermack";
import { edentaProducts } from "./edenta";
import { waveProducts } from "./wave";
import { redonProducts } from "./redon";
import { vericomProducts } from "./vericom";
import { ortodonciaProducts } from "./g&h";
import { IqdentalProducts } from "./Iqdental";
import { bsmProducts } from "./bsm";
import { audentalProducts } from "./audental";
import { dentsplyProducts } from "./dentsply";
import { planmecaProducts } from "./planmeca";

export const products = {

  tokuyama: tokuyamaProducts,

  renfert: renfertProducts,

  shining: shiningProducts,

  zhermack: zhermackProducts,

  edenta: edentaProducts,

  wave: waveProducts,

  redon: redonProducts,

  vericom: vericomProducts,

  ortodoncia: ortodonciaProducts,

  Iqdental: IqdentalProducts,

  bsm: bsmProducts,

  audental: audentalProducts,

  dentsply: dentsplyProducts,

  planmeca: planmecaProducts,

};

/* NUEVO PARA LA IA */
export const allProducts = [
  ...tokuyamaProducts,
  ...renfertProducts,
  ...shiningProducts,
  ...zhermackProducts,
  ...edentaProducts,
  ...waveProducts,
  ...redonProducts,
  ...vericomProducts,
  ...ortodonciaProducts,
  ...IqdentalProducts,
  ...bsmProducts,
  ...audentalProducts,
  ...dentsplyProducts,
  ...planmecaProducts,
];
