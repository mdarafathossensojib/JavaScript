const submit = document.getElementById("btn");

submit.addEventListener('click', (event)=>{
    const input = document.getElementById("food-srch").value;
    if(!input){return;}

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then((response) => response.json())
        .then((data) => {
            const container = document.getElementById("food-container");
            container.innerHTML = "";

            if(!data.meals){
                container.innerHTML = "<p>No meals found.</p>";
                return;
            }

            data.meals.forEach(food => {
                const div = document.createElement("div");
                div.classList.add("col-lg-3", "col-md-4", "col-sm-6", "col-12", "mb-4", "text-center");
                div.innerHTML = `
                    <div class="meal p-2 shadow rounded">
                        <img src="${food.strMealThumb}" alt="${food.strMeal}" class="food-img img-fluid rounded" data-id="${food.idMeal}" style="cursor:pointer">
                        <h5 class="mt-2">${food.strMeal}</h5>
                    </div>
                `;
                container.appendChild(div);
                container.addEventListener("click", (e) =>{
                    if(e.target.classList.contains("food-img")){
                        const mealId = e.target.getAttribute("data-id");

                        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
                            .then(res => res.json())
                            .then(data => {
                                const meal = data.meals[0];
                                const modalBody = document.getElementById("modal-body");
                                const modalTitle = document.getElementById("foodModalLabel");

                                modalTitle.textContent = meal.strMeal;
                                modalBody.innerHTML = `
                                    <img src="${meal.strMealThumb}" class="img-fluid mb-3 rounded food-img" alt="${meal.strMeal}">
                                    <h6>Category: ${meal.strCategory}</h6>
                                    <h6>Area: ${meal.strArea}</h6>
                                    <p><strong>Instructions:</strong><br>${meal.strInstructions.slice(0,100)}</p>
                                    <a href="${meal.strYoutube}" target="_blank" class="btn btn-danger mt-2">
                                        Watch on YouTube
                                    </a>
                                `;

                                if(!window.modalInstance){
                                    window.modalInstance = new bootstrap.Modal(document.getElementById("foodModal"));
                                }
                                window.modalInstance.show();
                            })
                            .catch(err => console.log(err));
                    }
                });
            });

    })
    .catch((err) => {
        console.log(err);
    });

});
