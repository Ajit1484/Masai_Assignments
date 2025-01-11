
let sentenceBuilder = {
  subject : "i",
  verb : "am",
  object : "coding",

  buildSentence(){
    if((this.subject == undefined) || ( this.verb == undefined) || (this.object == undefined)){
    return "Incomplete statement"
  }
   return`${this.subject}  ${this.verb}  ${this.object}` 
}
}

updateProperty(sub, verb, obj){
 if(sub==undefined || verb == undefined || obj == undefined){
   return "Invalid Property"
 }
 return `${sub} ${verb} ${obj}`
 }

console.log(sentenceBuilder.buildSentence());
console.log(sentenceBuilder.updateProperty("i",""))
