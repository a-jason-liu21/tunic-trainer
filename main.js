const vMap = Object.keys(symbolMap).reduce((p, n) => {
  if (symbolMap[n].vowel) p[n] = symbolMap[n];
  return p;
}, {});
const cMap = Object.keys(symbolMap).reduce((p, n) => {
  if (!symbolMap[n].vowel) p[n] = symbolMap[n];
  return p;
}, {});

let topText, subText;
let currentSymbol;
let answerShown = false;
const settings = {
  mode: "stp",
  test: "vo",
};

const showElement = (e) => {
  if (typeof e === "string") {
    document.querySelectorAll(e).forEach((element) => showElement(element));
    return;
  }
  e.style = "display: block";
};

const hideElement = (e) => {
  if (typeof e === "string") {
    document.querySelectorAll(e).forEach((element) => hideElement(element));
    return;
  }
  e.style = "display: none";
};

const enableElement = (e) => {
  if (typeof e === "string") {
    document.querySelectorAll(e).forEach((element) => enableElement(element));
    return;
  }
  e.disabled = false;
};

const disableElement = (e) => {
  if (typeof e === "string") {
    document.querySelectorAll(e).forEach((element) => disableElement(element));
    return;
  }
  e.disabled = true;
};

const hoverOn = (e) => {
  if (!editActive()) return;
  if (typeof e === "string") {
    document.querySelectorAll(e).forEach((element) => hoverOn(element));
    return;
  }
  if (e.target !== undefined) e = e.target;
  e.classList.add("hover");
};

const hoverOff = (e) => {
  if (!editActive()) return;
  if (typeof e === "string") {
    document.querySelectorAll(e).forEach((element) => hoverOff(element));
    return;
  }
  if (e.target !== undefined) e = e.target;
  e.classList.remove("hover");
};

const editActive = () => {
  return settings.mode !== "stp" && !answerShown;
};

const turnAllOff = () => {
  hideElement(".on");
  hideElement(".sln");
  hoverOff(".hover");
  hideElement("#on-top-deco");
  hideElement("#on-circle");
};

const isLastTopOn = (e) => {
  let result = true;
  document.querySelectorAll(".top.on").forEach((test) => {
    if (
      (e === undefined || test.id !== e.id) &&
      window.getComputedStyle(test).display !== "none"
    ) {
      result = false;
    }
  });
  return result;
};

const isLastBottomOn = (e) => {
  let result = true;
  document.querySelectorAll(".bottom.on").forEach((test) => {
    if (
      (e === undefined || test.id !== e.id) &&
      window.getComputedStyle(test).display !== "none"
    ) {
      result = false;
    }
  });
  return result;
};

const showSymbol = (symbol, soln = false) => {
  let lineType = "on";
  if (soln) {
    showElement("#sln-baseline");
    lineType = "sln";
  }

  if (symbol.includes(" ")) {
    if (symbolMap[symbol.split(" ")[0]].vowel) {
      showElement(`#${lineType}-circle`);
    }
    showSymbol(symbol.split(" ")[0], soln);
    showSymbol(symbol.split(" ")[1], soln);
    return;
  }

  let hasTopInner = false;
  let hasBottomInner = false;
  symbolMap[symbol].lines.forEach((x) => {
    if (x === "s") showElement(`.${lineType}.side`);
    else showElement(`#${lineType}-${x}`);
    if (x.startsWith("ti")) hasTopInner = true;
    if (x.startsWith("bi")) hasBottomInner = true;
  });
  if (hasTopInner && hasBottomInner) showElement(`#${lineType}-top-deco`);
};

const nextQuestion = () => {
  turnAllOff();
  answerShown = false;
  document.querySelector("#next").innerText = "Reveal";
  if (document.querySelector("#radio-co").checked) {
    currentSymbol =
      Object.keys(cMap)[Math.floor(Math.random() * Object.keys(cMap).length)];
  } else if (document.querySelector("#radio-vo").checked) {
    currentSymbol =
      Object.keys(vMap)[Math.floor(Math.random() * Object.keys(vMap).length)];
  } else if (document.querySelector("#radio-cov").checked) {
    currentSymbol =
      Object.keys(symbolMap)[
        Math.floor(Math.random() * Object.keys(symbolMap).length)
      ];
  } else {
    const v =
      Object.keys(vMap)[Math.floor(Math.random() * Object.keys(vMap).length)];
    const c =
      Object.keys(cMap)[Math.floor(Math.random() * Object.keys(cMap).length)];

    if (Math.random() > 0.8) {
      currentSymbol = `${c} ${v}`;
    } else {
      currentSymbol = `${v} ${c}`;
    }
  }

  if (settings.mode === "stp") {
    topText.innerText = "Name this phonic.";
    showSymbol(currentSymbol);
  } else {
    topText.innerText = `Draw the symbol for '${currentSymbol}'.`;
  }

  if (settings.mode === "ptsh") {
    subText.innerText =
      currentSymbol
        .split(" ")
        .map((x) => `${x} as in ${symbolMap[x].example}`)
        .join("; ") + ".";
  } else {
    subText.innerText = "Press 'Show' to reveal the solution.";
  }
};

const showAnswer = () => {
  answerShown = true;
  document.querySelector("#next").innerText = "Next";
  if (settings.mode !== "stp") {
    showSymbol(currentSymbol, true);
  } else {
    topText.innerText = `This phonic is ${currentSymbol}.`;
    subText.innerText =
      currentSymbol
        .split(" ")
        .map((x) => `${x} as in ${symbolMap[x].example}`)
        .join("; ") + ".";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  topText = document.querySelector("#top-text");
  subText = document.querySelector("#sub-text");

  document.querySelectorAll(".on").forEach((element) => {
    element.addEventListener("mouseenter", hoverOn);
    element.addEventListener("mouseleave", hoverOff);
    element.addEventListener("click", (e) => {
      if (!editActive()) return;
      hideElement(e.target);
    });
  });
  document.querySelectorAll(".off").forEach((element) => {
    element.addEventListener("mouseenter", hoverOn);
    element.addEventListener("mouseleave", hoverOff);
    element.addEventListener("click", (e) => {
      if (!editActive()) return;
      showElement(`#${e.target.id.replace("off", "on")}`);
    });
  });

  document.querySelectorAll(".side").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      hoverOn(".side");
    });
    element.addEventListener("mouseleave", () => {
      hoverOff(".side");
    });
    element.addEventListener("click", (e) => {
      if (!editActive()) return;
      if (e.target.id.startsWith("on")) {
        hoverOff(".side");
        hideElement(".side.on");
      } else {
        hoverOff(".side");
        showElement(".side.on");
      }
    });
  });

  document.querySelectorAll(".top.on").forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      if (isLastTopOn(e.target) && !isLastBottomOn()) {
        hoverOn("#on-top-deco");
      }
    });
    element.addEventListener("mouseleave", (e) => {
      if (isLastTopOn(e.target) && !isLastBottomOn()) {
        hoverOff("#on-top-deco");
      }
    });
    element.addEventListener("click", (e) => {
      if (!editActive()) return;
      if (isLastTopOn(e.target) && !isLastBottomOn()) {
        hoverOff(".deco");
        hideElement("#on-top-deco");
      }
    });
  });

  document.querySelectorAll(".bottom.on").forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      if (!isLastTopOn() && isLastBottomOn(e.target)) {
        hoverOn("#on-top-deco");
      }
    });
    element.addEventListener("mouseleave", (e) => {
      if (!isLastTopOn() && isLastBottomOn(e.target)) {
        hoverOff("#on-top-deco");
      }
    });
    element.addEventListener("click", (e) => {
      if (!editActive()) return;
      if (!isLastTopOn() && isLastBottomOn(e.target)) {
        hoverOff(".deco");
        hideElement("#on-top-deco");
      }
    });
  });

  document.querySelectorAll(".top.off").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      if (isLastTopOn() && !isLastBottomOn()) {
        hoverOn("#off-top-deco");
      }
    });
    element.addEventListener("mouseleave", () => {
      if (isLastTopOn() && !isLastBottomOn()) {
        hoverOff("#off-top-deco");
      }
    });
    element.addEventListener("click", () => {
      if (!editActive()) return;
      if (!isLastBottomOn()) {
        hoverOff(".deco");
        showElement("#on-top-deco");
      }
    });
  });

  document.querySelectorAll(".bottom.off").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      if (!isLastTopOn() && isLastBottomOn()) {
        hoverOn("#off-top-deco");
      }
    });
    element.addEventListener("mouseleave", () => {
      if (!isLastTopOn() && isLastBottomOn()) {
        hoverOff("#off-top-deco");
      }
    });
    element.addEventListener("click", () => {
      if (!isLastTopOn()) {
        hoverOff(".deco");
        showElement("#on-top-deco");
      }
    });
  });

  document
    .querySelectorAll("#settings > div > span > input")
    .forEach((element) => {
      element.addEventListener("change", (e) => {
        settings[e.target.name] = e.target.value;
        nextQuestion();
      });
    });

  document.querySelector("#next").addEventListener("click", () => {
    if (answerShown) {
      nextQuestion();
    } else {
      showAnswer();
    }
  });

  nextQuestion();
});
