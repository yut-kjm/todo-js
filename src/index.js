import "./styles.css";

const onClickAdd = () => {
  // TODOテキストを取得し、取得後にテキストを空にする
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 完了ボタンを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了リストから削除
    const deleteTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);

    // divタグを生成
    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";

    // liタグを生成
    const completeLi = document.createElement("li");
    completeLi.innerText = deleteTarget.firstElementChild.innerText;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget1 = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget1);
      document.getElementById("incomplete-list").appendChild(deleteTarget);
    });

    completeDiv.appendChild(completeLi);
    completeDiv.appendChild(backButton);

    document.getElementById("complete-list").appendChild(completeDiv);
  });

  // 削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // 未完了リストに追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
