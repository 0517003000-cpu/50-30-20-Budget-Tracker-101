function getNumber(v){
return parseInt(v.replace(/\./g,"")) || 0
}

function calculate(){

let essentialInputs=document.querySelectorAll(".essential")
let nonInputs=document.querySelectorAll(".non")
let saveInputs=document.querySelectorAll(".save")

let essentialTotal=0
let nonTotal=0
let saveTotal=0

essentialInputs.forEach(i=>{
essentialTotal+=getNumber(i.value)
})

nonInputs.forEach(i=>{
nonTotal+=getNumber(i.value)
})

saveInputs.forEach(i=>{
saveTotal+=getNumber(i.value)
})

document.getElementById("essentialTotal").innerText=essentialTotal.toLocaleString("id-ID")
document.getElementById("nonTotal").innerText=nonTotal.toLocaleString("id-ID")
document.getElementById("saveTotal").innerText=saveTotal.toLocaleString("id-ID")

checkBudget()

}

function checkBudget(){

let eBudget=getNumber(document.getElementById("essentialBudget").value)
let nBudget=getNumber(document.getElementById("nonBudget").value)
let sBudget=getNumber(document.getElementById("saveBudget").value)

let eSpend=getNumber(document.getElementById("essentialTotal").innerText)
let nSpend=getNumber(document.getElementById("nonTotal").innerText)
let sSpend=getNumber(document.getElementById("saveTotal").innerText)

let over=[]
let tight=[]

if(eBudget>0){

if(eSpend>eBudget) over.push("essential expenses")
else if(eSpend>eBudget*0.9) tight.push("essential expenses")

}

if(nBudget>0){

if(nSpend>nBudget) over.push("non-essential expenses")
else if(nSpend>nBudget*0.9) tight.push("non-essential expenses")

}

if(sBudget>0){

if(sSpend>sBudget) over.push("savings")
else if(sSpend>sBudget*0.9) tight.push("savings")

}

generateAdvice(over,tight)

}

function generateAdvice(over,tight){

let box=document.getElementById("advice")

if(over.length===0 && tight.length===0){

box.innerHTML=
"✅ Your budget is healthy.<br><br>"+
"Tips:<br>"+
"• Continue tracking your spending.<br>"+
"• Try saving at least 20% of your income.<br>"+
"• Build an emergency fund (3-6 months expenses)."

return
}

if(over.length>0){

let categories=over.join(" and ")

box.innerHTML=
"🚨 You are over budget in "+categories+".<br><br>"+
"Solutions:<br>"+
"• Review your largest expenses and reduce them.<br>"+
"• Cut unnecessary subscriptions or entertainment spending.<br>"+
"• Move some spending into next month if possible.<br>"+
"• Re-adjust your budget based on your real income."

return
}

if(tight.length>0){

let categories=tight.join(" and ")

box.innerHTML=
"⚠️ Your budget is getting tight in "+categories+".<br><br>"+
"Suggestions:<br>"+
"• Avoid additional spending this month.<br>"+
"• Track daily expenses carefully.<br>"+
"• Try lowering non-essential purchases."

}

}

document.querySelectorAll("input").forEach(i=>{
i.addEventListener("input",calculate)
})
