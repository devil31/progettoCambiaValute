const val2 = document
  .getElementById("valute-two")
  .addEventListener("change", change);
const val1 = document
  .getElementById("valute-one")
  .addEventListener("change", change);
const input1 = document
  .getElementById("amount-one")
  .addEventListener("change", change);
const input2 = document
  .getElementById("amount-two")
  .addEventListener("change", change);




function change() {
  const one = document.getElementById("valute-one").value;

  const ui = new UI();

  const val = new Extchange(one);

  val.getExtchange().then((data) => {
    ui.getData(data);
  });
}
