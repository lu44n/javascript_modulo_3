const devsRegistered = []
const addTech = document.getElementById('addTechBttn')
const devForm = document.getElementById('devForm')
const techArea = document.getElementById('techArea')

const techLabel = document.createElement('label')
techLabel.textContent = 'Tecnologia: '
techLabel.setAttribute('for', 'techText')

const techText =  document.createElement('input')
techText.type = 'text'
techText.id = 'techText'
techText.name = 'techText'

const experienceLabel = document.createElement('label')
experienceLabel.textContent = 'Experiência: '
experienceLabel.setAttribute('for', 'experienceRadio')

const experienceRadio1 = document.createElement('input')
experienceRadio1.type = 'radio'
experienceRadio1.name = 'experienceRadio'
experienceRadio1.id = 'experienceRadio1'
experienceRadio1.value = '0-2 anos'

const experienceLabel1 = document.createElement('label')
experienceLabel1.textContent = '0-2 anos'
experienceLabel1.setAttribute('for', 'experienceRadio1')

const experienceRadio2 = document.createElement('input')
experienceRadio2.type = 'radio'
experienceRadio2.name = 'experienceRadio'
experienceRadio2.id = 'experienceRadio2'
experienceRadio2.value = '3-4 anos'

const experienceLabel2 = document.createElement('label')
experienceLabel2.textContent = '3-4 anos'
experienceLabel2.setAttribute('for', 'experienceRadio2')


const experienceRadio3 = document.createElement('input')
experienceRadio3.type = 'radio'
experienceRadio3.name = 'experienceRadio'
experienceRadio3.id = 'experienceRadio3'
experienceRadio3.value = '5+ anos'

const experienceLabel3 = document.createElement('label')
experienceLabel3.textContent = '5+ anos'
experienceLabel3.setAttribute('for', 'experienceRadio3')


const rmvBttn = document.createElement('button')
rmvBttn.textContent = 'Remover'
rmvBttn.id = 'rmvBttn'

addTech.addEventListener('click', function(ev){
    ev.preventDefault()
    const nextLine = document.createElement('br')
    const nextLine2 = document.createElement('br')

    techArea.appendChild(techLabel)
    techArea.appendChild(techText)
    techArea.appendChild(nextLine)
    techArea.appendChild(experienceLabel)
    techArea.appendChild(experienceRadio1)
    techArea.appendChild(experienceLabel1)
    techArea.appendChild(experienceRadio2)
    techArea.appendChild(experienceLabel2)
    techArea.appendChild(experienceRadio3)
    techArea.appendChild(experienceLabel3)
    techArea.appendChild(nextLine2)
    techArea.appendChild(rmvBttn)
})

rmvBttn.addEventListener('click', function(ev){
    ev.preventDefault()

    while (techArea.firstChild){
        techArea.removeChild(techArea.firstChild)
    }
})

devForm.addEventListener('submit', function(ev){
    ev.preventDefault()

    const devName = document.getElementById('name').value
    const devTech =  document.getElementById('techText').value
    const devExperience = document.querySelector('input[name="experienceRadio"]:checked').value

    devsRegistered.push({
        name: devName,
        tech: devTech,
        experience: devExperience
    })

    console.log(devsRegistered)

    document.getElementById('name').value = ''
    document.getElementById('techText').value = ''
    document.querySelector('input[name="experienceRadio"]:checked').checked = false
})