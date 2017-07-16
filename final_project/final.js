$(function () {

	function getData(id) {
		$.ajax({
			url: 'final.json',
			dataType: "json",
			success: function (data) {
				$("#id").text(data[id].id);
				$(".capacity").text(data[id].capacity);
				$(".power").text(data[id].power);
				$(".torque").text(data[id].torque);
				$(".weight").text(data[id].weight);
				$(".speed").text(data[id].speed);

			},
			error: function (e) {
				console.log(e);
			}
		});
	}



	var list = document.querySelectorAll(".product_list_container > div");
	list.forEach(function (item) {
		item.addEventListener('click', function (e) {
			getData(item.id);
		});
	})

	var list2 = document.querySelectorAll(".product_list_container2 > div");
	list2.forEach(function (item) {
		item.addEventListener('click', function (e) {
			getData(item.id);
		});
	})
});
