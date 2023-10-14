const toastContainer = document.querySelector('.notification')
const buttons = document.querySelectorAll('.buttons .btn');
const toastDetails = {
   success: {
     icon: "ep:success-filled",
     text : "success: You can access all files."
   },
   error: {
     icon: "clarity:remove-solid",
     text  : "error: Sorry, you're not authorized."
   },
   warning: {
     icon: "ph:warning-fill",
     text  : "warning: User has to be admin."
   },
   info: {
     icon: "akar-icons:info-fill",
     text  : "info: New settings available."
   },
}
console.log(toastDetails)

const createToast = (id)=> {
const {text,icon} = toastDetails[id];
console.log(text,icon);

const toast = document.createElement('li');
toast.className = `toast ${id}`;
toast.innerHTML = 
` <div class="column">
<iconify-icon icon=${icon}></iconify-icon>
<span>${text}</span>
</div>
<iconify-icon icon="mdi:remove"></iconify-icon>`
toastContainer.appendChild(toast);
}

buttons.forEach((btn)=>{
 btn.addEventListener('click', ()=> createToast(btn.id))
});