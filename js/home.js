(async () => {
    const response = await fetch('https://api.github.com/users/sbwinberg/repos');
    const repoJson = await response.json();
    console.log(repoJson);
})();

