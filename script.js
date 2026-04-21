function runAudit() {
  const url = document.getElementById("urlInput").value

  if (!url) {
    alert("Enter a valid URL")
    return
  }
  const score = Math.floor(Math.random() * 30) + 65;

  const issues = [
    {
      title: "No FAQ section",
      desc: "AI systems use FAQs to generate better answers"
    },
    {
      title: " Weak headings ",
      desc: " Clear headings help AI understand page structure "
    },
    {
      title: "No structured content",
      desc: "Structured content improves AI readability"
    },
    {
      title: "Unclear product explanation",
      desc: "AI needs clear context about what you offer"
    },
    {
      title: "Poor internal linking",
      desc: " Links help AI connect different parts of your content "
    }
  ];

  const selected = issues.sort(() => 0.5 - Math.random()).slice(0, 4);

  document.getElementById("score").innerText = score;

  const list = document.getElementById("issues");
  list.innerHTML = "";

  selected.forEach(item => {
    const li = document.createElement("li")
    li.innerHTML = `<strong>${item.title}</strong>: ${item.desc}`
    list.appendChild(li);
  })

  document.getElementById("explanation").innerText =
    "ai tools like ChatGPT rely on structured and clear content, If your website is not organized well, it becomes harder for AI to understand and recommend it";

  document.getElementById("result").classList.remove("hidden")
}