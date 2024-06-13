document.addEventListener('DOMContentLoaded', ()=>{
    const selectLanguage=document.getElementById('language');
    languages.forEach(lang => {
        const choices=document.createElement('option')
        choices.value=lang.code;
        choices.innerText=lang.name;
        selectLanguage.appendChild(choices)
    });


    document.getElementById('translate').addEventListener('click',()=>{
        const language=selectLanguage.value;
    chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
chrome.scripting.executeScript({
    target:{tabId:tabs[0].id},
    files:['translate.js']
},()=>{
    chrome.tabs.sendMessage(tabs[0].id,{
        language
    })
})
    })
    })
})