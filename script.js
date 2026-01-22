const START_AMOUNT = 30000;
const STEP = 100;

let amount = START_AMOUNT;
let bills = amount / STEP;

const amountEl = document.getElementById("amount");
const moneyArea = document.getElementById("moneyArea");
const penaltyBtn = document.getElementById("penaltyBtn");
const resetBtn = document.getElementById("resetBtn");

function createBills() {
  moneyArea.innerHTML = "";

  for (let i = 0; i < bills; i++) {
    const bill = document.createElement("div");
    bill.className = "bill";
    bill.textContent = "100₸";

    // random positioning inside jar
    const x = Math.random() * 210; // jar width range
    const y = Math.random() * 340; // jar height range
    const rot = (Math.random() * 40 - 20).toFixed(1) + "deg";

    bill.style.left = `${x}px`;
    bill.style.bottom = `${y}px`;
    bill.style.setProperty("--rot", rot);

    moneyArea.appendChild(bill);
  }
}

function updateUI() {
  amountEl.textContent = amount;
}

penaltyBtn.addEventListener("click", () => {
  if (amount <= 0) return;

  amount -= STEP;
  bills -= 1;

  // remove one bill visually
  const lastBill = moneyArea.lastElementChild;
  if (lastBill) lastBill.remove();

  updateUI();

  if (amount <= 0) {
    alert("Jar is empty 😭 No more money left!");
  }
});

resetBtn.addEventListener("click", () => {
  amount = START_AMOUNT;
  bills = amount / STEP;
  updateUI();
  createBills();
});

updateUI();
createBills();
