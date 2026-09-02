const sidebar=document.getElementById('sidebar');const title=document.getElementById('pageTitle');
document.getElementById('openMenu').onclick=()=>sidebar.classList.add('open');
document.getElementById('closeMenu').onclick=()=>sidebar.classList.remove('open');
document.getElementById('closeText').onclick=()=>sidebar.classList.remove('open');
document.querySelectorAll('[data-page]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-page]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));document.getElementById(btn.dataset.page).classList.add('active');title.textContent=btn.textContent.trim().replace(/\s+/g,' ');sidebar.classList.remove('open');window.scrollTo({top:0,behavior:'smooth'});}));
