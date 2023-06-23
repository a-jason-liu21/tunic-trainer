const symbolMap = {
  A: {
    vowel: true,
    example: "glAss",
    lines: ["tol", "tor", "s"],
  },
  AR: {
    vowel: true,
    example: "ARm",
    lines: ["tol", "tor", "bol", "bor"],
  },
  AH: {
    vowel: true,
    example: "swA(H)n",
    lines: ["tol", "s"],
  },
  AY: {
    vowel: true,
    example: "bAY",
    lines: ["tol"],
  },
  E: {
    vowel: true,
    example: "End",
    lines: ["s", "bol", "bor"],
  },
  EE: {
    vowel: true,
    example: "bEE",
    lines: ["tol", "s", "bol", "bor"],
  },
  EER: {
    vowel: true,
    example: "bEER",
    lines: ["tol", "s", "bor"],
  },
  EH: {
    vowel: true,
    example: "thE(H)",
    lines: ["tol", "tor"],
  },
  ERE: {
    vowel: true,
    example: "thERE",
    lines: ["s", "bor"],
  },
  I: {
    vowel: true,
    example: "bIt",
    lines: ["bol", "bor"],
  },
  IE: {
    vowel: true,
    example: "pIE",
    lines: ["tor"],
  },
  IR: {
    vowel: true,
    example: "bIRd",
    lines: ["tor", "s", "bol", "bor"],
  },
  OH: {
    vowel: true,
    example: "tO(H)e",
    lines: ["tol", "tor", "s", "bol", "bor"],
  },
  OI: {
    vowel: true,
    example: "avOId",
    lines: ["bol"],
  },
  OO: {
    vowel: true,
    example: "tOO",
    lines: ["tol", "tor", "s", "bol"],
  },
  OU: {
    vowel: true,
    example: "wOUld",
    lines: ["s", "bol"],
  },
  OW: {
    vowel: true,
    example: "hOW",
    lines: ["bor"],
  },
  ORE: {
    vowel: true,
    example: "lORE",
    lines: ["tol", "tor", "s", "bor"],
  },

  B: { vowel: false, example: "Bird", lines: ["tim", "bir"] },
  CH: { vowel: false, example: "CHat", lines: ["til", "bim"] },
  D: { vowel: false, example: "Dog", lines: ["tim", "bil", "bir"] },
  F: { vowel: false, example: "Fox", lines: ["tir", "bil", "bim"] },
  G: { vowel: false, example: "Gun", lines: ["tir", "bim", "bir"] },
  H: { vowel: false, example: "Hop", lines: ["tim", "bim", "bir"] },
  J: { vowel: false, example: "Jam", lines: ["tim", "bil"] },
  K: { vowel: false, example: "Kart", lines: ["tim", "tir", "bir"] },
  L: { vowel: false, example: "Live", lines: ["tim", "bim"] },
  M: { vowel: false, example: "Man", lines: ["bil", "bir"] },
  N: { vowel: false, example: "Net", lines: ["til", "bil", "bir"] },
  NG: {
    vowel: false,
    example: "riN(G)k",
    lines: ["til", "tim", "tir", "bil", "bim", "bir"],
  },
  P: { vowel: false, example: "Pet", lines: ["tir", "bim"] },
  R: { vowel: false, example: "Run", lines: ["tim", "tir", "bim"] },
  S: {
    vowel: false,
    example: "Sit",
    lines: ["tim", "tir", "bil", "bim"],
  },
  SH: {
    vowel: false,
    example: "SHut",
    lines: ["til", "tir", "bil", "bim", "bir"],
  },
  T: { vowel: false, example: "Text", lines: ["til", "tir", "bim"] },
  TH: {
    vowel: false,
    example: "THick",
    lines: ["til", "tim", "tir", "bim"],
  },
  DTH: {
    vowel: false,
    example: "(D)THis",
    lines: ["tim", "bil", "bim", "bir"],
  },
  V: {
    example: "Vine",
    lines: ["til", "tim", "bir"],
  },
  W: {
    example: "Word",
    lines: ["til", "tir"],
  },
  Y: {
    example: "You",
    lines: ["til", "tim", "bim"],
  },
  Z: {
    example: "Zap",
    lines: ["til", "tim", "bim", "bir"],
  },
  ZH: {
    vowel: false,
    example: "aZ(H)ure",
    lines: ["til", "tim", "tir", "bil", "bir"],
  },
};
