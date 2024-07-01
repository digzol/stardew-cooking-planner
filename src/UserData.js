const UserData = {
  "enabledRecipes": {
    vanillaRecipes: true,
    SVERecipes: false,
    RSVRecipes: false,
  },
  "showCompletedRecipes": false,
  "completedRecipes": {},
  "completedIngredients": {},
  setEnabledRecipes: (enabledRecipes) => {
    UserData.enabledRecipes = enabledRecipes;
    localStorage.setItem("enabledRecipes", JSON.stringify(UserData.enabledRecipes));
  },
  setCompletedRecipes: (completedRecipes) => {
    UserData.completedRecipes = completedRecipes;
    localStorage.setItem("completedRecipes", JSON.stringify(UserData.completedRecipes));
  },
  setCompletedIngredients: (completedIngredients) => {
    UserData.completedIngredients = completedIngredients;
    localStorage.setItem("completedIngredients", JSON.stringify(UserData.completedIngredients));
  },
  setShowCompletedRecipes: (showCompletedRecipes) => {
    UserData.showCompletedRecipes = showCompletedRecipes;
    localStorage.setItem("showCompletedRecipes", JSON.stringify(UserData.showCompletedRecipes))
  }
};

// Load user settings from local storage
UserData.showCompletedRecipes = JSON.parse(localStorage.getItem("showCompletedRecipes")) || UserData.showCompletedRecipes;
UserData.enabledRecipes = JSON.parse(localStorage.getItem("enabledRecipes")) || UserData.enabledRecipes;
UserData.completedRecipes = JSON.parse(localStorage.getItem("completedRecipes")) || UserData.completedRecipes;
UserData.completedIngredients = JSON.parse(localStorage.getItem("completedIngredients")) || UserData.completedIngredients;

export default UserData;
