const UserData = {
  "enabledRecipes": {
    vanillaRecipes: true,
    SVERecipes: false,
    RSVRecipes: false,
  },
  "showCompletedRecipes": false,
  "completedRecipes": {},
  setEnabledRecipes: (enabledRecipes) => {
    UserData.enabledRecipes = enabledRecipes;
    localStorage.setItem("enabledRecipes", JSON.stringify(UserData.enabledRecipes));
  },
  setCompletedRecipes: (completedRecipes) => {
    UserData.completedRecipes = completedRecipes;
    localStorage.setItem("completedRecipes", JSON.stringify(UserData.completedRecipes));
  },
  setShowCompletedRecipes: (showCompletedRecipes) => {
    UserData.showCompletedRecipes = showCompletedRecipes;
    localStorage.setItem("showCompletedRecipes", JSON.stringify(UserData.showCompletedRecipes))
  }
};

// Load user settings from local storage
UserData.enabledRecipes = JSON.parse(localStorage.getItem("enabledRecipes")) || UserData.enabledRecipes;
UserData.completedRecipes = JSON.parse(localStorage.getItem("completedRecipes")) || UserData.completedRecipes;
UserData.showCompletedRecipes = JSON.parse(localStorage.getItem("showCompletedRecipes")) || UserData.showCompletedRecipes;

export default UserData;
