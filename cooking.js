let searchButton=document.getElementById("searchButton").addEventListener("click",function(){
    console.log("search button clicked");
    clickedItem=document.getElementById("clickedItem");
    clickedItem.style.display="none";
    let text= document.getElementById("mealName").value;
    console.log(text);
    window.firstLetter=""
    if(text.length==0){
        console.log("length 0");

    }
    else{

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
        .then(response=> response.json())
        .then(data=> nullCheck(data.meals)  );
        nullCheck=(checkingNull) =>{
            if(checkingNull==null){
                let nothingMatched=document.getElementById("nothingMatched").innerText="Sorry!! We Don't Have Any Meal By that Name..You can also try out these meal";

                firstLetter=firstLetter+text[0];
                console.log(firstLetter)
                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
                .then(res=> res.json())
                .then(data=> matchedMeal(data,data.meals) );

                matchedMeal= (allData,mealWhichMatched)=>{
                    console.log(allData);
                    let matchingLength= mealWhichMatched.length;
                    for (let i=0; i<matchingLength;i++){
                        console.log(mealWhichMatched[i].strMeal);
                        let foodListDiv =document.getElementById("foodListDiv");
                        
                        let innerFoodListDiv=document.createElement('div');
                        // innerFoodListDiv.style.backgroundColor="white";
                        // innerFoodListDiv.style.cssText = ' borderRadius: 10px; backgroundColor: white ';
                        innerFoodListDiv.classList.add('innerFoodListDiv');
                        const eachMatchedFood=`
                        <img style='height: 210px; width: 250px;' src=${mealWhichMatched[i].strMealThumb}>
                        <h1 style=' background-color: white;  ' >${mealWhichMatched[i].strMeal}</h1>
                        `
                        innerFoodListDiv.innerHTML=eachMatchedFood;
                        foodListDiv.appendChild(innerFoodListDiv);


                        innerFoodListDiv.addEventListener("click",function(){

                            clickedItem.style.display="none";
                            let ul=document.getElementById("unorderedList");

                            

                            // let ingredients=document.createElement('li');
                       
                            // ingredients.classList.add('ingredientsLi');

                            const user= mealWhichMatched[i]
                            let entries=Object.entries(user);
                            for (let j=9; j<=50;j++){
                                
                                if(entries[j][1]==""){
                                    break

                                }
                                else{
                                    
                                    
                                    
                                    let imageForIngrediants=document.getElementById("imageForIngrediants");
                                    const imageForIngrediantsHTML=`
                                    <img style='height: 210px; width: 250px; justify-content: center;' src=${mealWhichMatched[i].strMealThumb}>`

                                    imageForIngrediants.innerHTML=imageForIngrediantsHTML;

                                    
                                    let ingredients=document.createElement('li');
                                    ingredients.classList.add('ingredientsLi');
                                    
                                    var mapMap = new Map(entries);
                                    var measurement=(mapMap.get(`strMeasure${j-8}`));
                                    ingredients.innerText= entries[j][1]+ " "+measurement;
                                    ul.appendChild(ingredients);

                                    document.getElementById("nothingMatched").innerText=""
                                    

                                    let ingredientsOf=document.getElementById("ingredientsOf").innerText=`Ingredients of ${mealWhichMatched[i].strMeal} is:`

                                   

                                   



                                }
                                clickedItem.style.display="block";
                            }
                            
                            // innerFoodListDiv.innerHTML=eachMatchedFood;
                            // foodListDiv.appendChild(innerFoodListDiv);
                        })








                        
                    }
                }



                
            

            }

            else if(checkingNull!=null){

           
                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
                .then(response=> response.json())
                .then(data=> matchedMeal(data.meals)  );
                

                matchedMeal= (mealWhichMatched)=>{
                    console.log("Not null match hoise",mealWhichMatched);
                    let matchingLength= mealWhichMatched.length;
                    for (let i=0; i<matchingLength;i++){
                        console.log(mealWhichMatched[i].strMeal);
                        let foodListDiv =document.getElementById("foodListDiv");
                        
                        let innerFoodListDiv=document.createElement('div');
                       
                        innerFoodListDiv.classList.add('innerFoodListDiv');
                        const eachMatchedFood=`
                        <img style='height: 210px; width: 250px;' src=${mealWhichMatched[i].strMealThumb}>
                        <h1 style=' background-color: white;  ' >${mealWhichMatched[i].strMeal}</h1>
                        `
                        innerFoodListDiv.innerHTML=eachMatchedFood;
                        foodListDiv.appendChild(innerFoodListDiv);

                        // click korle ingredient dekhanor kaj
                        

                        
                        innerFoodListDiv.addEventListener("click",function(){

                            clickedItem.style.display="none";
                            let ul=document.getElementById("unorderedList");

                            

                            // let ingredients=document.createElement('li');
                       
                            // ingredients.classList.add('ingredientsLi');

                            const user= mealWhichMatched[i]
                            let entries=Object.entries(user);
                            for (let j=9; j<=50;j++){
                                
                                if(entries[j][1]==""){
                                    break

                                }
                                else{
                                    
                                    let imageForIngrediants=document.getElementById("imageForIngrediants");
                                    const imageForIngrediantsHTML=`
                                    <img style='height: 210px; width: 250px; justify-content: center;' src=${mealWhichMatched[i].strMealThumb}>`

                                    imageForIngrediants.innerHTML=imageForIngrediantsHTML;



                                    

                                    let ingredients=document.createElement('li');
                                    ingredients.classList.add('ingredientsLi');
                                    
                                    var mapMap = new Map(entries);
                                    var measurement=(mapMap.get(`strMeasure${j-8}`));
                                    ingredients.innerText= entries[j][1]+ " "+measurement;
                                    ul.appendChild(ingredients);

                                    let ingredientsOf=document.getElementById("ingredientsOf").innerText=`Ingredients of ${mealWhichMatched[i].strMeal} is:`
                                    

                                }
                                clickedItem.style.display="block";
                                
                                
                            }
                            
                            // innerFoodListDiv.innerHTML=eachMatchedFood;
                            // foodListDiv.appendChild(innerFoodListDiv);
                        })


                        
                    }
                }
       


            }
            

        }


        




        // firstLetter=firstLetter+text[0];
        // console.log(firstLetter)
        // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
        // .then(res=> res.json())
        // .then(data=> matchedMeal(data,data.meals) );

        // matchedMeal= (allData,mealWhichMatched)=>{
        //     console.log(allData);
        //     let matchingLength= mealWhichMatched.length;
        //     for (let i=0; i<matchingLength;i++){
        //         console.log(mealWhichMatched[i].strMeal);
        //         let foodListDiv =document.getElementById("foodListDiv");
                
        //         let innerFoodListDiv=document.createElement('div');
        //         // innerFoodListDiv.style.backgroundColor="white";
        //         // innerFoodListDiv.style.cssText = ' borderRadius: 10px; backgroundColor: white ';
        //         innerFoodListDiv.classList.add('innerFoodListDiv');
        //         const eachMatchedFood=`
        //         <img style='height: 210px; width: 250px;' src=${mealWhichMatched[i].strMealThumb}>
        //         <h1 style=' background-color: white;  ' >${mealWhichMatched[i].strMeal}</h1>
        //          `
        //         innerFoodListDiv.innerHTML=eachMatchedFood;
        //         foodListDiv.appendChild(innerFoodListDiv);
                
        //     }
        // }
       
    }

    
})



// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
// .then(res=> res.json())
// .then(data=> console.log(data.meals.length));