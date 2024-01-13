const UserData = {
  "enabledRecipes": {
    vanillaRecipes: true,
    SVERecipes: false,
    RSVRecipes: false,
  },
  "completedRecipes": {},
  setEnabledRecipes: (enabledRecipes) => {
    UserData.enabledRecipes = enabledRecipes;
    localStorage.setItem("enabledRecipes", JSON.stringify(UserData.enabledRecipes));
  },
  setCompletedRecipes: (completedRecipes) => {
    UserData.completedRecipes = completedRecipes;
    localStorage.setItem("completedRecipes", JSON.stringify(UserData.completedRecipes));
  }
};

// Override with user settings in local storage
UserData.enabledRecipes = JSON.parse(localStorage.getItem("enabledRecipes")) || UserData.enabledRecipes;
UserData.completedRecipes = JSON.parse(localStorage.getItem("completedRecipes")) || UserData.completedRecipes;

export default UserData;
