const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu(){ if(menu&&nav){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
window.matchMedia('(min-width:761px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
const photoDialog=document.querySelector('.photo-dialog');
document.querySelectorAll('[data-open-photo]').forEach(button=>button.addEventListener('click',()=>{if(!photoDialog)return;const img=photoDialog.querySelector('img');img.src=button.dataset.openPhoto;img.alt=button.dataset.photoAlt;photoDialog.showModal();}));
photoDialog?.querySelector('.dialog-close')?.addEventListener('click',()=>photoDialog.close());
photoDialog?.addEventListener('click',event=>{if(event.target===photoDialog){const rect=photoDialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)photoDialog.close();}});
