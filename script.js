let isTimerDone = false;

let isBreadInToaster = false;

let isToast = false;

const bread = {
  size: [60, 40, 5],
  burnPoint: 600,
  toastPoint: 300,
  currentTemp: 20,
};

const toaster = {
  slots: 4,
  button: (e) => {
    if (e) {
      return true;
    }
    return false;
  },
};

function cageDown(e) {
  if (e) {
    setTimer();
  }
}

// cageUp TODO: merge with cageDown function

function cageUp(e) {}

function setTimer(e, time = 120) {
  if (e) {
    // run activate heat
    activateHeat();
    // start timer at length of time argument
  }
  // TODO: this doesn't feel right: toggle cage && disable heat element
}

function activateHeat() {
  // increase bread temp
  // TODO: as loop increases, apply value to bread current temp consistenly
}
