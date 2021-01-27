let itJob = [
	"Front end developer",
	"Back end developer",
	"Devops",
	"Full stack developer",
	"Tester",
];

console.log(itJob.length);
console.log(itJob);

function showList() {
	document.getElementById("listJob").innerHTML = itJob.map((itJob) => {
		return "<li>" + itJob + "</li>";
	});
}

showList();
