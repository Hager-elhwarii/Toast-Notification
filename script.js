const toastContainer = document.querySelector(".notification");
const buttons = document.querySelectorAll(".buttons .btn");

// Creating an object contains toast details for each toast.
const toastDetails = {
  timer: 5000,
  success: {
    icon: "ep:success-filled",
    text: "success: You can access all files.",
  },
  error: {
    icon: "clarity:remove-solid",
    text: "error: Sorry, you're not authorized.",
  },
  warning: {
    icon: "ph:warning-fill",
    text: "warning: User has to be admin.",
  },
  info: {
    icon: "akar-icons:info-fill",
    text: "info: New settings available.",
  },
};

// Removing toast after 500ms.
const removeToast = (toast) => {
  toast.classList.add("hide");
  // Clearing the timeout for the toast.
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 500);
};

// Toast creation.
const createToast = (id) => {
  // Getting the icon and text for the toast based on the id passed.
  const { text, icon } = toastDetails[id];

  // Creating a new 'li' element for the toast.
  const toast = document.createElement("li");

  // Adding the classes for the toast.
  toast.className = `toast ${id}`;

  // Adding elements structure in each toast.
  toast.innerHTML = ` <div class="column">
      <iconify-icon icon=${icon}></iconify-icon>
      <span>${text}</span>
    </div>
    <iconify-icon icon="mdi:remove" onclick='removeToast(this.parentElement)'></iconify-icon>
  `;
  // Appending the toast to it's parent, In our case ul with class notification.
  toastContainer.appendChild(toast);
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

// Adding a event listener. So when button is clicked, it creats a new toast.
buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});
