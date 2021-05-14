
document.querySelectorAll('.list-item').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      console.log('click!')
      if (!item.classList.contains('active')) {
          item.classList.add('active')
      } else {
          item.classList.remove('active')
      }
    })
  })

