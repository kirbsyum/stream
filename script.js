async function loadData() {
  const res = await fetch("data.json");
  return await res.json();
}

function openPanel(type) {
  const panel = document.getElementById("panel");
  const content = document.getElementById("panelContent");

  panel.classList.remove("hidden");

  loadData().then(data => {
    if (type === "about") {
      content.innerHTML = `
        <h2>About Me</h2>
        <p>Hello!!! I am kirbsyum, a Roblox png streamer :></p>
        <p>I like playing games like forsaken, left 4 blox, route 06, and condemned!!!</p>
      `;
    }

    if (type === "schedule") {
      content.innerHTML = `
        <h2>Schedule</h2>
        <ul>
          ${data.schedule.map(day => `<li>${day}</li>`).join("")}
        </ul>
      `;
    }

    if (type === "announcements") {
      content.innerHTML = `
        <h2>Announcements</h2>
        ${data.announcements.map(a => `<p>• ${a}</p>`).join("")}
      `;
    }

    if (type === "gallery") {
      content.innerHTML = `
        <h2>Gallery</h2>
        ${data.images.map(img => `<img src="${img}" width="150">`).join("")}
      `;
    }
  });
}

function closePanel() {
  document.getElementById("panel").classList.add("hidden");
}

async function loadData() {
  try {
    const res = await fetch("data.json");
    return await res.json();
  } catch (err) {
    console.error("Data failed to load:", err);

    return {
      schedule: ["Schedule failed to load"],
      announcements: ["No announcements available"],
      images: []
    };
  }
}
window.onload = () => {
  setTimeout(() => {
    const screen = document.getElementById("screen");
    screen.classList.remove("boot");
    screen.innerHTML = `
      <h2>kirbsyum.exe</h2>
      <p>click to enter ✧</p>
    `;
    showPopup("✨ Welcome back, kirbsyum viewer!");
  }, 2000);
};

function showPopup(message) {
  const container = document.getElementById("popupContainer");

  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerText = message;

  container.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 4000);
}

