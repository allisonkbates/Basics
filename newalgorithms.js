function diffArray(arr1, arr2) {
 
 arr1.forEach(function(indexes){
	return arr2.indexOf(indexes);
             });



 /*	var indexnone1 = [];
 	var indexnone2 = [];
	for (var i =0; i<arr1.length; i++) {
		var index1 = arr2.indexOf(arr1[i]);
		indexnone1.push(index1);
	}

	for (var j=0; j<arr2.length; j++) {
		var index2 = arr1.indexOf(arr2[i]);
		indexnone2.push(index2);
	}
*/
	

	// loop through first array
	//find index of each value in 2nd array
	//take those (use filter) that are not indexable and put them in their own array - other array
	//
	//loop through 2nd array
	//find index of value in first array
	//take those that are not indexable and add them to other array
	




}

diffArray([1,2,3,4,5], [1,2,3,6]);