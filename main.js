$(function () {
	$("#button-see-on-github").on("click", () => {
		const userGitHub = "FabioFelipeSantos";
		const endpoint = `https://api.github.com/users/${userGitHub}`;

		fetch(endpoint)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				$("#avatar").attr("src", data.avatar_url);
				$("#name").text(data.name);
				$("#user-name").text(data.login);
				$("#repo-number").text(data.public_repos);
				$("#followers-number").text(data.followers);
				$("#following-number").text(data.following);
			});
	});
});
