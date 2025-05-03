// 1. 폼 제출 시 작동하는 코드
document.getElementById("chatForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // 새로고침 막기

  const form = e.target; // 🔥 이 줄이 꼭 필요해!!

// 응답 전 메시지 표시
  document.getElementById("responseBox").innerText = "응답 중입니다. 잠시만 기다려주세요...";

  // 2. 입력값을 객체로 정리
  const data = {
    age: form.age.value,
    gender: form.gender.value,
    disease: form.disease.value,
    meds: form.meds.value,
    surgery: form.surgery.value,
    symptom: form.symptom.value,
  };

  // 3. 서버에 질문 보내기
  const res = await fetch("https://chattest.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // 4. GPT 응답 받아서 화면에 출력
  const result = await res.json();
  document.getElementById("responseBox").innerText = result.reply;
});