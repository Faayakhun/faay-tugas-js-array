let dynamicDraco = [
	"Brian",
	"Dendy",
	"Faay",
	"Febian",
	"Rendy",
	"Suryanto",
	"Utomo",
	"Yoshi",
];

dynamicDraco2 = dynamicDraco.splice(0, dynamicDraco.indexOf("Rendy"));
dynamicDraco.splice(0, 1, "Rendy (Leader)");
dynamicDraco2.splice(3, 1, "Febian (Leader)");

console.log(dynamicDraco.join());
console.log(dynamicDraco2.join());

function showList1() {
	document.getElementById("team1").innerHTML = dynamicDraco.map(
		(dynamicDraco) => {
			return "<li>" + dynamicDraco + "</li>";
		}
	);
}

showList1();

function showList2() {
	document.getElementById("team2").innerHTML = dynamicDraco2.map(
		(dynamicDraco2) => {
			return "<li>" + dynamicDraco2 + "</li>";
		}
	);
}

showList2();
