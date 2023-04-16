let qText = document.getElementById("quote-text");
let qAuthor = document.getElementById("author");
let twitterBtn =  document.getElementById("twitter");
let  nextBtn =  document.getElementById("next-quote");
  
let quoteArray = [];

const tweeetFun = () => {
    
  const url =  `https://twitter.com/intent/tweet?text=${qText.innerText} \n-${qAuthor.innerText}`;
  window.open(url,'_blank');
}
  
 

const quoteFetcher =  async () => {
  const url = `https://type.fit/api/quotes`;
  await fetch(url)
      .then(res => res.json()) // converting the  bare strig to json to use in javaScript.
        .then(data => quoteArray=data);
       i = Math.floor(Math.random() * quoteArray.length);
       if(quoteArray[i].text.length < 100){
        qText.classList.remove('text-sm');
        qText.classList.add('text-lg');
       }
      qText.textContent =  quoteArray[i].text;
    qAuthor.textContent =   "-" + (quoteArray[i].author  || "unknown");

} 
nextBtn.addEventListener('click',quoteFetcher);
twitterBtn.addEventListener('click',tweeetFun);



quoteFetcher();