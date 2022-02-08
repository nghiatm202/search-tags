const input = document.querySelector('input')
const content = document.querySelector('.content')
const removeAll = document.querySelector('.btn')

const tagList = []

function renderTag() {
  content.innerHTML = ''

  //   loop
  tagList.forEach((tag, index) => {
    content.innerHTML += `<li>
          <span>${tag}</span>
          <i class="bx bx-x" onclick="removeTag(${index})"></i>
        </li>`
  })

  //   input
  content.appendChild(input)
  input.focus()
}

input.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') {
    tagList.push(input.value.trim())
    input.value = ''
    renderTag()
  }
})

function removeTag(index) {
  tagList.splice(index, 1)
  renderTag()
}

removeAll.addEventListener('click', function (e) {
  tagList.splice(0, tagList.length)
  input.value = ''
  renderTag()
})
