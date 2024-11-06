

document.addEventListener('DOMContentLoaded', function (){
  const  selectList = document.querySelectorAll('.select-list');
  console.log(selectList)

  selectList.forEach( selectList => {
    selectList.addEventListener('focus', function () {
      if (!selectList.classList.contains('active_select')) {
        selectList.classList.add('active_select');
      }
    });
  })
})