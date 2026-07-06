const GET_RATE = 0.04712;

let items = [{ id: 1, desc: "", amount: "" }];
let nextId = 2;
let tipPercent = 15;
let isCustomTip = false;

const itemsContainer = document.getElementById("itemsContainer");
const addItemBtn = document.getElementById("addItemBtn");
const tipGrid = document.getElementById("tipGrid");
const customTipToggle = document.getElementById("customTipToggle");
const customTipWrap = document.getElementById("customTipWrap");
const customTipInput = document.getElementById("customTipInput");

function renderItems() {
  itemsContainer.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "item-row";
    row.innerHTML = `
      <input type="text" placeholder="Item (optional)" value="${escapeAttr(item.desc)}" data-id="${item.id}" data-field="desc">
      <div class="amount-wrap">
        <span>$</span>
        <input type="number" inputmode="decimal" min="0" step="0.01" placeholder="0.00" value="${item.amount}" data-id="${item.id}" data-field="amount">
      </div>
      <button class="remove-btn" data-id="${item.id}" ${items.length <= 1 ? "disabled" : ""} title="Remove item">✕</button>
    `;
    itemsContainer.appendChild(row);
  });
}

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}

function addItem() {
  items.push({ id: nextId++, desc: "", amount: "" });
  renderItems();
}

function removeItem(id) {
  if (items.length <= 1) return;
  items = items.filter((i) => i.id !== id);
  renderItems();
  calculate();
}

itemsContainer.addEventListener("input", (e) => {
  const id = Number(e.target.dataset.id);
  const field = e.target.dataset.field;
  if (!id || !field) return;
  const item = items.find((i) => i.id === id);
  if (item) item[field] = e.target.value;
  calculate();
});

itemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    removeItem(Number(e.target.dataset.id));
  }
});

addItemBtn.addEventListener("click", addItem);

tipGrid.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tip-btn")) return;
  isCustomTip = false;
  customTipWrap.classList.remove("visible");
  customTipToggle.classList.remove("active");
  document
    .querySelectorAll(".tip-grid .tip-btn")
    .forEach((b) => b.classList.remove("active"));
  e.target.classList.add("active");
  tipPercent = Number(e.target.dataset.tip);
  calculate();
});

customTipToggle.addEventListener("click", () => {
  isCustomTip = true;
  document
    .querySelectorAll(".tip-grid .tip-btn")
    .forEach((b) => b.classList.remove("active"));
  customTipToggle.classList.add("active");
  customTipWrap.classList.add("visible");
  customTipInput.focus();
  tipPercent = Number(customTipInput.value) || 0;
  calculate();
});

customTipInput.addEventListener("input", () => {
  tipPercent = Number(customTipInput.value) || 0;
  calculate();
});

function calculate() {
  const subtotal = items.reduce((sum, item) => {
    const val = parseFloat(item.amount);
    return sum + (isNaN(val) || val < 0 ? 0 : val);
  }, 0);

  const tax = subtotal * GET_RATE;
  const tip = subtotal * (tipPercent / 100);
  const total = subtotal + tax + tip;

  document.getElementById("outSubtotal").textContent = formatMoney(subtotal);
  document.getElementById("outTax").textContent = formatMoney(tax);
  document.getElementById("outTip").textContent = formatMoney(tip);
  document.getElementById("outTipLabel").textContent = `Tip (${tipPercent}%)`;
  document.getElementById("outTotal").textContent = formatMoney(total);
}

function formatMoney(n) {
  return (
    "$" +
    n.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

renderItems();
calculate();
