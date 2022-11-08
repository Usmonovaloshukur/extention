let myLead=[]



const inpurEl=document.getElementById('input-el')
const inputBtn=document.getElementById('input-btn')
const tabBtn=document.getElementById('tab-btn')
const deleteBtn=document.getElementById('delete-btn')
const ulEl=document.getElementById('ul-el')

const leadsFromLocalStorage=JSON.parse( localStorage.getItem('myLead') )
if (leadsFromLocalStorage){
    myLead=leadsFromLocalStorage
    render(myLead)
}
//https://www.linkedin.com/in/usmonov-aloshukur-447ab1248/?jobid=1234
// const tabs=[
//     {url: "linkedin.com/in/usmonov-aloshukur-447ab1248/?jobid=1234"}
// ]

tabBtn.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLead.push(tabs[0].url)
        localStorage.setItem('myLead', JSON.stringify(myLead))
        render(myLead)
        
    })
    
})

function render(leads){
    let listItems=''
    for (let i=0; i<leads.length; i++){
        listItems+=`
        <li>
            <a target='_blank' href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>
        `  
    }
    ulEl.innerHTML=listItems
}

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear()
    myLead=[]
    render(myLead)
})

inputBtn.addEventListener('click', function(){
    myLead.push(inpurEl.value)
    inpurEl.value=''

    localStorage.setItem('myLead', JSON.stringify(myLead))
    render(myLead)
  
})



